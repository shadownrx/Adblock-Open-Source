const cookieSelectors = [
    '.cookie-banner',        
    '.cookie-consent',       
    '#cookie-popup',         
    'div[data-testid="cookieBanner"]',
    '.cookie-notification',
    '.cookie-message',
    '.cookie-popup',
    '.cookie-modal',
    '.cookie-wrapper',
    '.consent-banner',
    '.consent-popup',
    '#cookieConsent',
    '#cookieConsentBanner',
    '.privacy-popup',
    '.accept-cookies',
    '.cookie-overlay',
    'aside',
    'span'
];

function removeCookieMessages() {
    cookieSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
    });
}

document.addEventListener('DOMContentLoaded', () => {
    removeCookieMessages();
    setInterval(removeCookieMessages, 1000);

    // Configura el MutationObserver
    const observer = new MutationObserver(() => {
        removeCookieMessages();
    });

    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        console.error('document.body no está disponible para observar.');
    }
});
