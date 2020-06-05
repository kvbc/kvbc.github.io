function isAlpha(char) {
    char = toAlpha(char);
    return char.toLowerCase() != char.toUpperCase();
}

function getFirstAlpha(str) {
    for(var char in str)
        if(isAlpha(String.fromCodePoint(str.codePointAt(char))))
            return char;
    return 0;
}
