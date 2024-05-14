
chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      window.open(`https://incidentdatabase.ai/apps/submit/?url=${window.location}`);
    }
  });
});

