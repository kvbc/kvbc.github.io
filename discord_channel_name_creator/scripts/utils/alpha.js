function isAlpha(char) {
    return char.toLowerCase() != char.toUpperCase();
}

function getFirstAlpha(str) {
    for(var char in str)
        if(isAlpha(str[char]))
            return char;
    return 0;
}
