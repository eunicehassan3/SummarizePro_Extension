const btn = document.getElementById("summarize");
btn.addEventListener("click", function() {
    btn.disabled = true;
    btn.innerHTML = "Loading...";
    chrome.tabs.query({currentWindow: true, active: true}), function(tabs){
        var url = tabs[0].url;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
        xhr.onload = function() {
            var text = xhr.responseText;
            const p = document.getElementById("output");
            p.innerHTML = text; // Display the summarized content in the "output" div
            btn.disabled = false;
            btn.innerHTML = "Summarize";
        }
        xhr.send();
    });
});
//const btn = document.getElementById("summarize");
//btn.addEventListener("click", function() {
//    btn.disabled = true;
//    btn.innerHTML = "Loading...";
//    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//        var url = tabs[0].url;
//        var xhr = new XMLHttpRequest();
//        xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
//        xhr.onload = function() {
//            var text = xhr.responseText;
//            const p = document.getElementById("output");
//            btn.disabled = false;
//            btn.innerHTML = "Summarize";
//        }
//        xhr.send();
//    });
//});