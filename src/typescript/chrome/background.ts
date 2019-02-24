import "chrome"

chrome.runtime.onInstalled.addListener(() => {
  let tabId: number | undefined;

  chrome.tabs.onRemoved.addListener((id) => {
    if (id === tabId) {
      tabId = undefined
    }
  });

  // create a new tab or make already created tab active
  chrome.browserAction.onClicked.addListener(() => {
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
