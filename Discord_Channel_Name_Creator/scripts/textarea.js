var cname = document.getElementsByClassName("cname")[0];
var cname_textarea = document.getElementsByClassName("cname-textarea")[0];
var output = document.getElementsByClassName("output")[0];

cname_textarea.addEventListener("focus", function() {
    cname.style.color="#ffba4a";
})

cname_textarea.addEventListener("focusout", function() {
    cname.style.color="#cccccc";
})
