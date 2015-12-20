var ipc = require("ipc");

document.addEventListener("mouseover", function (e) {
  var hoveredEl = e.target;

  if (hoveredEl.tagName !== "A") {
    return;
  }
  /*
  $('.cmsItem').css("border-style","solid");
  $('.cmsItem').css("border-width","1px");
  $('.cmsItem').css("border-color","#f00");*/
  //ipc.sendToHost("mouseover-href", hoveredEl.href +  $('.cmsItem').css("display","block"); );
});



document.addEventListener("DOMContentLoaded", function () {
  var data = {
    "title": document.title,
    "url": window.location.href,
    // need to make my own version, can't rely on Google forever
    // maybe have this URL fetcher hosted on hikar.io?
    "favicon": "https://www.google.com/s2/favicons?domain=" + window.location.href
  };

  ipc.sendToHost("window-data", data);
});