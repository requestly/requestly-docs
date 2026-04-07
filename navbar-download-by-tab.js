/**
 * Updates the navbar "Download" CTA href when the user selects the
 * "HTTP Interception" docs tab (Mintlify top-level navigation).
 *
 * Edit the URLs below if marketing wants different destinations.
 */
(function () {
  var DEFAULT_DOWNLOAD_HREF = 'https://requestly.com/downloads';
  /** Shown while the HTTP Interception tab is active (browser extension entry for traffic debugging). */
  var HTTP_INTERCEPTION_DOWNLOAD_HREF = 'https://rqst.ly/chrome-store';

  function findDownloadCtaAnchor() {
    var byId = document.getElementById('topbar-cta-button');
    if (byId) {
      if (byId.tagName === 'A') return byId;
      var inner = byId.querySelector && byId.querySelector('a[href]');
      if (inner) return inner;
    }
    var header = document.querySelector('header') || document.getElementById('navbar');
    if (header) {
      var links = header.querySelectorAll('a[href*="requestly.com/downloads"], a[href*="rqst.ly"]');
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        var label = (a.textContent || '').toLowerCase();
        if (label.indexOf('download') !== -1) return a;
      }
    }
    return null;
  }

  function isHttpInterceptionTabActive() {
    var tabs = document.querySelectorAll('.nav-tabs a');
    if (tabs[1].classList.contains("[text-shadow:-0.2px_0_0_currentColor,0.2px_0_0_currentColor]")) return true;
    console.log('tabs[1].classList: ', tabs[1].classList);
    console.log('isHttpInterceptionTabActive: false');
    return false;
  }

  var debounce = false;
  function syncDownloadCta() {
    var anchor = findDownloadCtaAnchor();
    if (!anchor || !anchor.getAttribute) return;

    if (!anchor.getAttribute('data-cta-baseline-href')) {
      var initial = anchor.getAttribute('href') || DEFAULT_DOWNLOAD_HREF;
      anchor.setAttribute('data-cta-baseline-href', initial);
    }

    var baseline = anchor.getAttribute('data-cta-baseline-href') || DEFAULT_DOWNLOAD_HREF;
    var next = isHttpInterceptionTabActive() ? HTTP_INTERCEPTION_DOWNLOAD_HREF : baseline;
    if (anchor.getAttribute('href') !== next) {
      anchor.setAttribute('href', next);
    }
  }

  function scheduleSync() {
    if (debounce) return;
    debounce = true;
    requestAnimationFrame(function () {
      debounce = false;
      syncDownloadCta();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleSync);
  } else {
    scheduleSync();
  }
  window.addEventListener('load', scheduleSync);

  var mo = new MutationObserver(scheduleSync);
  mo.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-active', 'aria-selected', 'href'],
  });

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    if (
      t.closest('header') ||
      t.closest('#navbar') ||
      t.closest('.nav-tabs-item') ||
      t.closest('.mobile-nav-tabs-item') ||
      t.closest('[class*="nav-tabs"]')
    ) {
      setTimeout(scheduleSync, 0);
      setTimeout(scheduleSync, 100);
    }
  }, true);
  console.log('navbar-download-by-tab.js loaded');
})();
