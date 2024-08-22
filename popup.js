document.addEventListener('DOMContentLoaded', () => {
    const blockAdsCheckbox = document.getElementById('blockAds');
    const blockCookiesCheckbox = document.getElementById('blockCookies');
    const saveButton = document.getElementById('saveSettings');

    chrome.storage.sync.get(['blockAds', 'blockCookies'], (result) => {
        blockAdsCheckbox.checked = result.blockAds !== false;
        blockCookiesCheckbox.checked = result.blockCookies !== false;
    });

    saveButton.addEventListener('click', () => {
        chrome.storage.sync.set({
            blockAds: blockAdsCheckbox.checked,
            blockCookies: blockCookiesCheckbox.checked
        }, () => {
            alert('Settings saved');
        });
    });
});
