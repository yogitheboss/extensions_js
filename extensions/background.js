

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "wikipedia",
        title: "I have been click", 
        contexts: ["selection"], 
    })
    chrome.contextMenus.onClicked.addListener(btnClick)
    async function btnClick(info,tab){
        console.log(tab.index);
        // console.log(info,tab);
       await chrome.tabs.sendMessage(tab.index,info.selectionText)
    }
});




