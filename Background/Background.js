// $(document).ready(function(){

//   function handleUpdated(tabId, changeInfo, tabInfo) {
//     console.log("[Aryan] Change event!")
//     var views = browser.extension.getViews({type: "popup"});
//     var view = views[0];

//     if (changeInfo.url) {
//       $(view).find("#x").html(changeInfo.url);
//     }
//   }

//   browser.tabs.onUpdated.addListener(handleUpdated);

// });