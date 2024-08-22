const adSelectors = [
    'iframe[src*="ads"]',          // Bloquea iframes que cargan anuncios
    'div[class*="ad-"]',           // Bloquea divs con clase relacionada a anuncios
    'script[src*="ads"]',          // Bloquea scripts relacionados con anuncios
    'video[src*="ads"]'            // Bloquea videos que cargan anuncios
];

function removeAds() {
    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
    });
}

// Ejecuta la función en el inicio del documento y luego periódicamente
removeAds();
setInterval(removeAds, 1000);
