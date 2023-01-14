console.log("hello ");  

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(req,sender,sendResponse){
    console.log(req.txt);
  sendResponse({received:true})
}
