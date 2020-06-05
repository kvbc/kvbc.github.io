var button = document.getElementsByClassName("button")[0];
var string = document.getElementsByClassName("string")[0];
var output = document.getElementsByClassName("output")[0];

button.addEventListener("click", function() {
    var final = "[";
    var value = string.value;
    for(var c in value) {
        var char = String.fromCodePoint(value.codePointAt(c));
        if      (!options.spaces && char==' ') continue;
        if      (options.toLowerCase)          char = char.toLowerCase();
        else if (options.toUpperCase)          char = char.toUpperCase();
        else if (options.toReverseCase)        char = (char == char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
        final += `"${char}"${c==value.length-1 ? "" : ", "}`;
    }
    output.value = final + "]";
})
