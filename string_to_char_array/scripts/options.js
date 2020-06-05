var options = {
    spaces: false
}

function loadOption(checkbox, option, func) {
    checkbox.addEventListener("click", function() {
        options[option] = checkbox.checked;
        if(func) func(option);
    })
}

var spaces = document.getElementsByClassName("spaces")[0];
var cases = [
    "toLowerCase",
    "toUpperCase",
    "toReverseCase"
]

loadOption(spaces, "spaces")
for(var c in cases) {
    loadOption(document.getElementsByClassName(cases[c])[0], cases[c], function(option) {
        for(var c_ in cases) {
            if(option == cases[c_]) continue;
            options[cases[c_]] = false;
            document.getElementsByClassName(cases[c_])[0].checked = false;
        }
    })
}
