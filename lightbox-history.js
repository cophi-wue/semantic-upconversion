(function () {
  let lightboxHistoryEntryActive = false;
  let closingFromHistory = false;

  function addLightboxHistoryEntry() {
    if (lightboxHistoryEntryActive) {
      return;
    }

    window.history.pushState({ lightbox: true }, "", window.location.href);
    lightboxHistoryEntryActive = true;
  }

  function closeLightboxFromHistory() {
    if (!lightboxHistoryEntryActive || !window.lightboxQuarto) {
      return;
    }

    lightboxHistoryEntryActive = false;
    closingFromHistory = true;
    window.lightboxQuarto.close();
  }

  function connectLightboxHistory() {
    if (!window.lightboxQuarto) {
      window.setTimeout(connectLightboxHistory, 0);
      return;
    }

    window.lightboxQuarto.on("open", addLightboxHistoryEntry);
    window.lightboxQuarto.on("close", function () {
      if (closingFromHistory) {
        closingFromHistory = false;
        return;
      }

      if (lightboxHistoryEntryActive) {
        lightboxHistoryEntryActive = false;
        window.history.back();
      }
    });
    window.addEventListener("popstate", closeLightboxFromHistory);
  }

  connectLightboxHistory();
})();