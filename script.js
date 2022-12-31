

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Block this site:", details.url)
        return {cancel: true}
    },
    {urls: list_of_blocked_sites},
    ["blocking"]
)
