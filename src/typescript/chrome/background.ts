import "chrome"

chrome.runtime.onInstalled.addListener(details => {
    let tabId: number | undefined;

    chrome.tabs.onRemoved.addListener((id, info) => {
        if (id === tabId) {
            tabId = undefined
        }
    });

    // create a new tab or make already created tab active
    chrome.browserAction.onClicked.addListener(tabs => {
        let url: string = chrome.extension.getURL('index.html')

        if (!tabId) {
            chrome.tabs.create({ url: url }, tab => {
                tabId = tab.id
            });
        } else {
            chrome.tabs.update(tabId, { active: true })
        }
    });
})


