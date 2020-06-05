var cname_textarea = document.getElementsByClassName("cname-textarea")[0];

function clicked(className) {
    var element = document.getElementsByClassName(className)[0];
    if(element.checked) {
        for(var i=1; i<=3; i++)
            document.getElementsByClassName(`option-${i}`)[0].checked = false;
        var value = cname_textarea.value;
        for(var i=65; i<=122; i++)
            if(i>90 && i<97) continue;
            else {
                var key = String.fromCharCode(i);
                var re = new RegExp(key,'g');
                value = value.replace(re,to[element.id](key))
            }
        cname_textarea.value = value;
    }
}
