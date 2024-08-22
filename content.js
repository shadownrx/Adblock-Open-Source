const cookieSelectors = [
    ".cookie-banner",
    ".cookie-consent",
    "#cookie-popup",
    ".cookie-notice"
];

window.addEventListener('load', () => {
    chrome.storage.sync.get(['blockCookies'], (result) => {
        if (result.blockCookies !== false) {
            cookieSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.remove());
            });
        }
    });
});
