function clicked(className) {
    var element = document.getElementsByClassName(className)[0];
    if(element.checked)
        for(var i=1; i<=3; i++)
            if(i == Number(className.substr(7))) continue;
            else
                document.getElementsByClassName(`option-${i}`)[0].checked = false;
}
