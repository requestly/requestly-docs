(function () {
  var TOKEN = "ecb64aff-5d8a-40e6-b07b-80b14997c80f";
  var BOT_ID = "d59d951e-714f-41d9-8834-4d8dfa437b0e";

  function buildSrc() {
    return (
      "https://widget.botsonic.com/CDN/index.html" +
      "?service-base-url=https%3A%2F%2Fapi-bot.writesonic.com" +
      "&token=" + TOKEN +
      "&base-origin=https%3A%2F%2Fbot.writesonic.com" +
      "&instance-name=Botsonic" +
      "&standalone=true" +
      "&page-url=" + encodeURIComponent(window.location.href)
    );
  }

  // --- Chat panel (bottom-right) ---
  function createPanel() {
    if (document.getElementById("botsonic-panel")) return;

    var panel = document.createElement("div");
    panel.id = "botsonic-panel";
    panel.style.cssText = [
      "position: fixed",
      "bottom: 24px",
      "right: 24px",
      "width: 400px",
      "height: 600px",
      "max-height: calc(100vh - 48px)",
      "border-radius: 16px",
      "overflow: hidden",
      "box-shadow: 0 8px 32px rgba(0,0,0,0.18)",
      "display: none",
      "flex-direction: column",
      "z-index: 99999",
      "border: 1px solid rgba(0,0,0,0.08)",
    ].join(";");

    var header = document.createElement("div");
    header.style.cssText = [
      "display: flex",
      "align-items: center",
      "justify-content: space-between",
      "padding: 12px 16px",
      "background: #fff",
      "border-bottom: 1px solid #f0f0f0",
      "flex-shrink: 0",
    ].join(";");

    var title = document.createElement("span");
    title.textContent = "Ask AI";
    title.style.cssText = "font-size:14px;font-weight:600;color:#111";

    var closeBtn = document.createElement("button");
    closeBtn.setAttribute("aria-label", "Close chat");
    closeBtn.style.cssText = [
      "background: none",
      "border: none",
      "cursor: pointer",
      "color: #666",
      "font-size: 20px",
      "line-height: 1",
      "padding: 0",
      "display: flex",
      "align-items: center",
      "justify-content: center",
    ].join(";");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", togglePanel);

    header.appendChild(title);
    header.appendChild(closeBtn);

    var iframe = document.createElement("iframe");
    iframe.id = "botsonic-iframe";
    iframe.src = buildSrc();
    iframe.setAttribute("frameborder", "0");
    iframe.style.cssText = "flex:1;width:100%;border:none;display:block";

    panel.appendChild(header);
    panel.appendChild(iframe);
    document.body.appendChild(panel);
  }

  function togglePanel() {
    createPanel();
    var panel = document.getElementById("botsonic-panel");
    var isOpen = panel.style.display === "flex";
    panel.style.display = isOpen ? "none" : "flex";

    var btn = document.getElementById("assistant-entry");
    if (btn) btn.setAttribute("data-state", isOpen ? "closed" : "open");
  }

  // --- Update page-url in the iframe on navigation ---
  function updateIframePageUrl() {
    var iframe = document.getElementById("botsonic-iframe");
    if (iframe) {
      iframe.src = buildSrc();
    }
  }

  // --- Find the best available target inside the navbar ---
  function findTarget() {
    var navbar = document.getElementById("navbar");
    if (!navbar) return null;

    var secondChild = navbar.children[1];
    if (!secondChild) return null;

    var selectors = [
      "div > div.relative > div > div > div.relative",
      "div > div.relative > div > div",
      "div > div.relative > div",
      "div > div.relative",
      "div",
    ];

    for (var i = 0; i < selectors.length; i++) {
      var el = secondChild.querySelector(selectors[i]);
      if (el) return el;
    }

    return secondChild;
  }

  // --- Inject the button ---
  function injectButton() {
    if (document.getElementById("assistant-entry")) return true;

    var target = findTarget();
    if (!target) return false;

    target.style.gap = "10px";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "group/ai flex-none flex items-center justify-center gap-1.5 pl-3 pr-3.5 h-9 rounded-xl shadow-sm bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/30 hover:ring-gray-600/30 dark:ring-gray-600/30 dark:hover:ring-gray-500/30";
    btn.id = "assistant-entry";
    btn.setAttribute("aria-label", "Toggle assistant panel");
    btn.setAttribute("data-state", "closed");
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0 text-gray-700 group-hover/ai:text-gray-800 dark:text-gray-400 dark:group-hover/ai:text-gray-200"><path d="M5.65799 2.99L4.39499 2.569L3.97399 1.306C3.83699 0.898 3.16199 0.898 3.02499 1.306L2.60399 2.569L1.34099 2.99C1.13699 3.058 0.998993 3.249 0.998993 3.464C0.998993 3.679 1.13699 3.87 1.34099 3.938L2.60399 4.359L3.02499 5.622C3.09299 5.826 3.28499 5.964 3.49999 5.964C3.71499 5.964 3.90599 5.826 3.97499 5.622L4.39599 4.359L5.65899 3.938C5.86299 3.87 6.00099 3.679 6.00099 3.464C6.00099 3.249 5.86199 3.058 5.65799 2.99Z" fill="currentColor" stroke="none"></path><path d="M9.5 2.75L11.412 7.587L16.25 9.5L11.412 11.413L9.5 16.25L7.587 11.413L2.75 9.5L7.587 7.587L9.5 2.75Z" stroke="currentColor" width="1.5" linecap="round" linejoin="round"></path></svg><span class="text-sm text-gray-500 dark:text-white/50 whitespace-nowrap">Ask AI</span>';

    btn.addEventListener("click", togglePanel);
    target.appendChild(btn);
    return true;
  }

  // --- Persistent sentinel: re-inject button after client-side nav re-renders navbar ---
  var sentinel = new MutationObserver(function () {
    if (!document.getElementById("assistant-entry")) {
      injectButton();
    }
  });
  sentinel.observe(document.body, { childList: true, subtree: true });

  // --- Patch history to update page-url and re-inject button on route changes ---
  function patchHistory(method) {
    var original = history[method];
    history[method] = function () {
      original.apply(this, arguments);
      setTimeout(function () {
        injectButton();
        updateIframePageUrl();
      }, 0);
    };
  }
  patchHistory("pushState");
  patchHistory("replaceState");
  window.addEventListener("popstate", function () {
    setTimeout(function () {
      injectButton();
      updateIframePageUrl();
    }, 0);
  });

  // --- Initial injection ---
  injectButton();
})();
