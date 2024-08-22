const blockedDomains = [
    "*://*.doubleclick.net/*",
    "*://*.adsense.com/*",
    "*://*.adservice.google.com/*",
    "*://*.adserver.yahoo.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return new Promise((resolve) => {
            chrome.storage.sync.get(['blockAds'], (result) => {
                if (result.blockAds !== false && !details.url.includes("youtube.com")) {
                    resolve({ cancel: true });
                } else {
                    resolve({ cancel: false });
                }
            });
        });
    },
    { urls: blockedDomains },
    ["blocking"]
);
