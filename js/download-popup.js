(function () {
  // ─── Download links ────────────────────────────────────────────────
  var browserLinks = {
    chrome:  "https://get.requestly.com/chrome-store",
    safari:  "https://get.requestly.com/safari",
    firefox: "https://get.requestly.com/firefox",
    edge:    "https://get.requestly.com/microsoft-edge",
    brave:   "https://get.requestly.com/chrome-store",
    opera:   "https://get.requestly.com/chrome-store",
    vivaldi: "https://get.requestly.com/chrome-store",
  };

  var osLinks = {
    "windows":     "https://get.requestly.com/win-api-client",
    "mac-silicon": "https://get.requestly.com/mac-api-client",
    "mac-intel":   "https://get.requestly.com/mac-intel-api-client",
    "linux":       "https://get.requestly.com/linux-api-client",
  };

  // ─── Image URLs ────────────────────────────────────────────────────
  var images = {
    apiClient: "https://requestly.com/wp-content/uploads/2026/04/api-client-logo.png",
    chrome:    "https://requestly.com/wp-content/uploads/2024/02/Google-chrome-logo-fix.svg",
    edge:      "https://requestly.com/wp-content/uploads/2024/10/logos_microsoft-edge.svg",
    firefox:   "https://requestly.com/wp-content/uploads/2024/10/logos_firefox.svg",
    safari:    "https://requestly.com/wp-content/uploads/2024/10/devicon_safari.svg",
    brave:     "https://requestly.com/wp-content/uploads/2023/09/brave.svg",
    opera:     "https://requestly.com/wp-content/uploads/2024/10/devicon_opera.svg",
    vivaldi:   "https://requestly.com/wp-content/uploads/2023/09/vivaldi.svg",
    windows:   "https://requestly.com/wp-content/uploads/2024/10/devicon_windows8.svg",
    linux:     "https://requestly.com/wp-content/uploads/2024/10/flat-color-icons_linux.svg",
    mac:       "https://requestly.com/wp-content/uploads/2024/10/wpf_macos.svg",
  };

  // ─── Detection ─────────────────────────────────────────────────────
  var ua = navigator.userAgent;
  var plat = (navigator.platform || "").toLowerCase();

  var browser = ua.includes("Vivaldi")  ? "vivaldi"
    : ua.includes("Brave")   ? "brave"
    : ua.includes("Firefox") ? "firefox"
    : ua.includes("Edg")     ? "edge"
    : ua.includes("OPR") || ua.includes("Opera") ? "opera"
    : ua.includes("Safari") && !ua.includes("Chrome") ? "safari"
    : "chrome";

  var os = plat.includes("win")   ? "windows"
    : plat.includes("linux") ? "linux"
    : "mac-silicon";

  var browserLabel = browser.charAt(0).toUpperCase() + browser.slice(1);

  // ─── Amplitude helper ──────────────────────────────────────────────
  function trackAmplitude(eventName, props) {
    try {
      if (window.amplitude && typeof window.amplitude.track === "function") {
        window.amplitude.track(eventName, props);
      }
    } catch (e) { /* noop */ }
  }

  // ─── State ─────────────────────────────────────────────────────────
  var HIDE_DELAY = 200;
  var hideTimeout = null;
  var popupBuilt = false;

  // ─── Inject CSS ────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById("rq-dl-popup-styles")) return;
    var style = document.createElement("style");
    style.id = "rq-dl-popup-styles";
    style.textContent = [
      /* dropdown container — positioned by JS */
      "#rq-dl-dropdown{position:absolute;z-index:99990;display:none;padding-top:8px}",

      /* popup box */
      "#rq-dl-popup{padding:8px;background:#232323;box-shadow:0 16px 64px 8px rgba(0,0,0,0.5);border-radius:12px;border:1px solid rgba(255,255,255,0.05);display:inline-flex;gap:8px;max-width:calc(100vw - 32px);opacity:0;transform:translateY(-6px);transition:opacity .18s ease,transform .18s ease}",
      "#rq-dl-dropdown.rq-visible #rq-dl-popup{opacity:1;transform:translateY(0)}",

      /* open-up: popup opens above the button */
      "#rq-dl-dropdown.open-up{padding-top:0;padding-bottom:8px}",
      "#rq-dl-dropdown.open-up #rq-dl-popup{transform:translateY(6px)}",
      "#rq-dl-dropdown.open-up.rq-visible #rq-dl-popup{transform:translateY(0)}",

      /* cards */
      ".rq-dl-card{width:300px;padding:20px 24px;background:#2d2d2d;border-radius:8px;display:flex;flex-direction:column;gap:12px;border:1px solid rgba(255,255,255,0)}",

      /* icon + title */
      ".rq-dl-header{display:flex;flex-direction:column;gap:10px}",
      ".rq-dl-header img{width:32px;height:32px;object-fit:contain}",
      ".rq-dl-title{color:#fff;font-size:15px;font-weight:500;font-family:Inter,system-ui,sans-serif;line-height:1.3}",
      ".rq-dl-subtitle{color:#999;font-size:13px;font-family:Inter,system-ui,sans-serif;font-weight:400;line-height:1.5}",

      /* bullet list */
      ".rq-dl-features{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;}",
      ".rq-dl-features li{color:#bbb;font-size:13px;font-family:Inter,system-ui,sans-serif;line-height:1.5;padding-left:16px;position:relative;color:#999;}",
      ".rq-dl-features li::before{content:'\\2022';position:absolute;left:0;color:#666}",

      /* button */
      ".rq-dl-btn{display:flex;padding:11px 16px;justify-content:center;align-items:center;border-radius:48px;border:1px solid rgba(255,255,255,0.2);background:linear-gradient(102deg,rgba(255,255,255,0.2) 8.88%,rgba(255,255,255,0.3) 44.24%,rgba(255,255,255,0.2) 61.3%,rgba(255,255,255,0.11) 90.5%);color:#fff;font-size:14px;font-weight:500;font-family:Inter,system-ui,sans-serif;text-decoration:none;cursor:pointer;transition:all .15s ease}",
      ".rq-dl-btn:hover{border-color:#004eeb;background:#004eeb}",

      /* platform / browser row */
      ".rq-dl-alt{display:flex;align-items:center;gap:10px}",
      ".rq-dl-alt a{display:flex;align-items:center;text-decoration:none}",
      ".rq-dl-alt img{width:18px;height:18px;object-fit:contain;opacity:0.7;transition:opacity .15s}",
      ".rq-dl-alt a:hover img{opacity:1}",
      ".rq-dl-more{color:#999;font-size:13px;font-family:Inter,system-ui,sans-serif;font-weight:500;text-decoration:none;transition:color .15s;white-space:nowrap}",
      ".rq-dl-more:hover{color:#fff}",

      /* responsive */
      "@media(max-width:640px){#rq-dl-popup{flex-direction:column}.rq-dl-card{width:100%;min-width:260px}}",
    ].join("\n");
    document.head.appendChild(style);
  }

  // ─── Build the dropdown (once) ─────────────────────────────────────
  function buildDropdown() {
    if (popupBuilt) return;
    popupBuilt = true;

    var dropdown = document.createElement("div");
    dropdown.id = "rq-dl-dropdown";

    var popup = document.createElement("div");
    popup.id = "rq-dl-popup";

    // — API Client card —
    var apiCard = document.createElement("div");
    apiCard.className = "rq-dl-card";
    apiCard.innerHTML = [
      '<div class="rq-dl-header">',
        '<img src="' + images.apiClient + '" alt="Requestly API Client">',
        '<div class="rq-dl-title">API Client</div>',
        '<div class="rq-dl-subtitle">Lightweight & Privacy-first API Client</div>',
      '</div>',
      '<ul class="rq-dl-features">',
        '<li>Local Projects</li>',
        '<li>Organize API into Collections & Environments</li>',
        '<li>API Tests</li>',
        '<li>Import from Postman, OpenAPI, etc</li>',
      '</ul>',
      '<a class="rq-dl-btn" id="rq-dl-app-btn" href="' + (osLinks[os] || osLinks["mac-silicon"]) + '" target="_blank" rel="noopener">Download Now</a>',
      '<div class="rq-dl-alt">',
        '<a href="' + (osLinks["mac-silicon"] || osLinks["mac-intel"]) + '" target="_blank" rel="noopener" id="rq-dl-alt-mac" title="macOS"><img src="' + images.mac + '" alt="macOS"></a>',
        '<a href="' + osLinks["windows"] + '" target="_blank" rel="noopener" id="rq-dl-alt-win" title="Windows"><img src="' + images.windows + '" alt="Windows"></a>',
        '<a href="' + osLinks["linux"] + '" target="_blank" rel="noopener" id="rq-dl-alt-linux" title="Linux"><img src="' + images.linux + '" alt="Linux"></a>',
        '<a class="rq-dl-more" href="https://requestly.com/downloads" target="_blank" rel="noopener">More platforms \u2192</a>',
      '</div>',
    ].join("");

    // — HTTP Interceptor card —
    var extCard = document.createElement("div");
    extCard.className = "rq-dl-card";
    extCard.innerHTML = [
      '<div class="rq-dl-header">',
        '<img src="' + (images[browser] || images.chrome) + '" alt="' + browserLabel + '">',
        '<div class="rq-dl-title">HTTP Interceptor</div>',
        '<div class="rq-dl-subtitle">Intercept & modify HTTP requests/responses</div>',
      '</div>',
      '<ul class="rq-dl-features">',
        '<li>Redirect URLs & modify HTTP headers</li>',
        '<li>Mock API / GraphQL responses</li>',
        '<li>Insert custom JavaScript scripts</li>',
      '</ul>',
      '<a class="rq-dl-btn" id="rq-dl-ext-btn" href="' + (browserLinks[browser] || browserLinks.chrome) + '" target="_blank" rel="noopener">Add To ' + browserLabel + '</a>',
      '<div class="rq-dl-alt">',
        '<a href="' + browserLinks.chrome + '" target="_blank" rel="noopener" id="rq-dl-alt-chrome" title="Chrome"><img src="' + images.chrome + '" alt="Chrome"></a>',
        '<a href="' + browserLinks.edge + '" target="_blank" rel="noopener" id="rq-dl-alt-edge" title="Edge"><img src="' + images.edge + '" alt="Edge"></a>',
        '<a href="' + browserLinks.firefox + '" target="_blank" rel="noopener" id="rq-dl-alt-firefox" title="Firefox"><img src="' + images.firefox + '" alt="Firefox"></a>',
        '<a class="rq-dl-more" href="https://requestly.com/downloads" target="_blank" rel="noopener">More browsers \u2192</a>',
      '</div>',
    ].join("");

    popup.appendChild(apiCard);
    popup.appendChild(extCard);
    dropdown.appendChild(popup);
    document.body.appendChild(dropdown);

    // — Keep open when hovering the dropdown itself —
    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
    });
    dropdown.addEventListener("mouseleave", function () {
      scheduleHide();
    });

    // — Close on ESC —
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hideDropdown();
    });

    // — Close when clicking outside —
    document.addEventListener("click", function (e) {
      var dd = document.getElementById("rq-dl-dropdown");
      if (!dd) return;
      // If click is outside the dropdown and outside any intercepted button
      if (!dd.contains(e.target) && !e.target.closest("[data-rq-dl-intercepted]")) {
        hideDropdown();
      }
    });

    // — Amplitude events on download clicks —
    bindAmplitudeEvents();
  }

  function bindAmplitudeEvents() {
    var appBtn = document.getElementById("rq-dl-app-btn");
    if (appBtn) {
      appBtn.addEventListener("click", function () {
        trackAmplitude("download_button_clicked", {
          download_type: "api-client",
          type: os,
          source: "docs-download-popup",
        });
      });
    }

    var extBtn = document.getElementById("rq-dl-ext-btn");
    if (extBtn) {
      extBtn.addEventListener("click", function () {
        trackAmplitude("download_button_clicked", {
          download_type: "extension",
          type: browser,
          source: "docs-download-popup",
        });
      });
    }

    var altMap = {
      "rq-dl-alt-mac":     { download_type: "api-client", type: "mac" },
      "rq-dl-alt-win":     { download_type: "api-client", type: "windows" },
      "rq-dl-alt-linux":   { download_type: "api-client", type: "linux" },
      "rq-dl-alt-chrome":  { download_type: "extension",  type: "chrome" },
      "rq-dl-alt-edge":    { download_type: "extension",  type: "edge" },
      "rq-dl-alt-firefox": { download_type: "extension",  type: "firefox" },
    };
    Object.keys(altMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", function () {
          trackAmplitude("download_button_clicked", {
            download_type: altMap[id].download_type,
            type: altMap[id].type,
            source: "docs-download-popup",
          });
        });
      }
    });
  }

  // ─── Position the dropdown relative to the anchor button ───────────
  function positionDropdown(button) {
    var dropdown = document.getElementById("rq-dl-dropdown");
    if (!dropdown) return;

    var POPUP_HEIGHT = 440; // estimated max height
    var rect = button.getBoundingClientRect();
    var viewportH = window.innerHeight;
    var spaceBelow = viewportH - rect.bottom;
    var spaceAbove = rect.top;

    dropdown.classList.remove("open-up", "open-down");

    if (POPUP_HEIGHT > spaceBelow && POPUP_HEIGHT <= spaceAbove) {
      // Open upward
      dropdown.classList.add("open-up");
      dropdown.style.top = "";
      dropdown.style.bottom = (viewportH - rect.top) + "px";
    } else {
      // Open downward (default)
      dropdown.classList.add("open-down");
      dropdown.style.bottom = "";
      dropdown.style.top = rect.bottom + "px";
    }

    // Horizontal: align right edge of popup with right edge of button
    var popupWidth = dropdown.offsetWidth || 590;
    var rightEdge = rect.right;
    var left = rightEdge - popupWidth;
    if (left < 8) left = 8; // don't overflow left edge
    dropdown.style.left = left + "px";
    dropdown.style.position = "fixed";
  }

  // ─── Show / Hide ──────────────────────────────────────────────────
  function showDropdown(button) {
    clearTimeout(hideTimeout);
    injectStyles();
    buildDropdown();

    var dropdown = document.getElementById("rq-dl-dropdown");
    if (!dropdown) return;

    // Position before making visible (measure while hidden)
    dropdown.style.display = "inline-flex";
    dropdown.classList.remove("rq-visible");
    positionDropdown(button);

    // Force reflow then add class for CSS transition
    void dropdown.offsetHeight;
    dropdown.classList.add("rq-visible");

    trackAmplitude("download_popup_opened", { source: "docs-navbar" });
  }

  function scheduleHide() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function () {
      hideDropdown();
    }, HIDE_DELAY);
  }

  function hideDropdown() {
    clearTimeout(hideTimeout);
    var dropdown = document.getElementById("rq-dl-dropdown");
    if (!dropdown) return;
    dropdown.classList.remove("rq-visible");
    // Wait for transition to finish, then hide
    setTimeout(function () {
      if (!dropdown.classList.contains("rq-visible")) {
        dropdown.style.display = "none";
      }
    }, 200);
  }

  // ─── Intercept the navbar Download button ──────────────────────────
  function interceptDownloadButton() {
    var navbar = document.getElementById("navbar");
    if (!navbar) return false;

    var links = navbar.querySelectorAll("a");
    var found = false;
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href") || "";
      if (href.includes("requestly.com/downloads") || href.includes("/downloads")) {
        if (links[i].getAttribute("data-rq-dl-intercepted")) continue;
        links[i].setAttribute("data-rq-dl-intercepted", "true");

        // Prevent default navigation on click
        links[i].addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });

        // Hover: show
        (function (btn) {
          btn.addEventListener("mouseenter", function () {
            showDropdown(btn);
          });
          btn.addEventListener("mouseleave", function () {
            scheduleHide();
          });
        })(links[i]);

        found = true;
      }
    }
    return found;
  }

  // ─── Persistent observer (navbar may re-render on route change) ────
  var observer = new MutationObserver(function () {
    interceptDownloadButton();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  function patchHistory(method) {
    var original = history[method];
    history[method] = function () {
      original.apply(this, arguments);
      setTimeout(interceptDownloadButton, 0);
    };
  }
  patchHistory("pushState");
  patchHistory("replaceState");
  window.addEventListener("popstate", function () {
    setTimeout(interceptDownloadButton, 0);
  });

  // Reposition on scroll/resize since we use fixed positioning
  window.addEventListener("scroll", function () {
    var dropdown = document.getElementById("rq-dl-dropdown");
    if (dropdown && dropdown.classList.contains("rq-visible")) {
      var btn = document.querySelector("[data-rq-dl-intercepted]");
      if (btn) positionDropdown(btn);
    }
  }, { passive: true });

  window.addEventListener("resize", function () {
    var dropdown = document.getElementById("rq-dl-dropdown");
    if (dropdown && dropdown.classList.contains("rq-visible")) {
      var btn = document.querySelector("[data-rq-dl-intercepted]");
      if (btn) positionDropdown(btn);
    }
  });

  // Initial attempt
  interceptDownloadButton();
})();
