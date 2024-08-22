document.addEventListener('DOMContentLoaded', () => {
    const blockAdsCheckbox = document.getElementById('block-ads-checkbox');
    const blockCookiesCheckbox = document.getElementById('block-cookies-checkbox');
    const saveButton = document.getElementById('save-button');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    
    function updateTheme() {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        themeStylesheet.href = prefersDarkScheme ? 'styles/popup-dark.css' : 'styles/popup.css';
    }

 
    updateTheme();

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeMediaQuery.addEventListener('change', updateTheme);


    chrome.storage.sync.get(['blockAds', 'blockCookies'], (result) => {
        blockAdsCheckbox.checked = result.blockAds !== false;
        blockCookiesCheckbox.checked = result.blockCookies !== false;
    });

 
    saveButton.addEventListener('click', () => {
        chrome.storage.sync.set({
            blockAds: blockAdsCheckbox.checked,
            blockCookies: blockCookiesCheckbox.checked
        }, () => {
            alert('Changes saved!');
        });
    });
});
