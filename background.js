const blockedDomains = [
    "*://*.doubleclick.net/*",
    "*://*.adsense.com/*",
    "*://*.adservice.google.com/*",
    "*://*.adserver.yahoo.com/*",
    "*://*.googlesyndication.com/*",  // Ejemplo adicional
    "*://*.facebook.com/ads/*",        // Ejemplo adicional
    "*://*.twitter.com/ads/*",
    "*://*.freepik.com/*"          // Ejemplo adicional
];

chrome.runtime.onInstalled.addListener(() => {
    updateRules();
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.blockAds) {
        updateRules();
    }
});

function updateRules() {
    chrome.storage.sync.get(['blockAds'], (result) => {
        if (result.blockAds !== false) {
            chrome.declarativeNetRequest.updateDynamicRules({
                addRules: blockedDomains.map((domain, index) => ({
                    id: index + 1,
                    priority: 1,
                    action: { type: "block" },
                    condition: {
                        urlFilter: domain,
                        excludedDomains: ["youtube.com"],
                        resourceTypes: ["script", "image", "xmlhttprequest", "sub_frame", "media", "other"]
                    }
                })),
                removeRuleIds: blockedDomains.map((_, index) => index + 1)
            });
        } else {
            chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: blockedDomains.map((_, index) => index + 1)
            });
        }
    });
}
