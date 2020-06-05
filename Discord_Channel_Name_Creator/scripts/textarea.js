var cname = document.getElementsByClassName("cname")[0];
var cname_textarea = document.getElementsByClassName("cname-textarea")[0];

cname_textarea.addEventListener("focus", function() {
    cname.style.color="#ffba4a";
})

cname_textarea.addEventListener("focusout", function() {
    cname.style.color="#cccccc";
})

cname_textarea.addEventListener("keyup", function(e){
    if(isAlpha(e.key))
        for(var i=1; i<=3; i++) {
            var element = document.getElementsByClassName(`option-${i}`)[0];
            if(element.checked) {
                for(var j=65; j<=122; j++) {
                    if(j<97 && j>90) continue;
                    var key = String.fromCharCode(j);
                    var re = new RegExp(key,'g');
                    cname_textarea.value = cname_textarea.value.replace(re, to[element.id](key));
                }
                break;
            }
        }
})
