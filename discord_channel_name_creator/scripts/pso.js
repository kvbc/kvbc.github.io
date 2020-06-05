const prefixes = ["╭┫" , "╰┫" , "『・" , "╭┈‧" , "╰┈" , "｡･˚✧" , "┆‧₊˚" , "┆꒱" , "│─➤"];
const suffixes = ["┣─❥" , "・』" , "・₊˚" , "﹆⸝⸝" , "⋆｡˚" , "ˎˊ-"];
const other = ["～" , "⋱⋰"];

function createButton(type, text) {
    var button = document.createElement("button");
    button.className = "prefix_suffix_other";
    button.type = "button";
    button.innerHTML = text;
    button.onclick = function() {
        var cname_textarea = document.getElementsByClassName("cname-textarea")[0];
        var value = cname_textarea.value;
        var alpha = getFirstAlpha(value);
        if(type == "prefix" || type == "other") {
            var excluded = value.substr(alpha);
            cname_textarea.value = value.substr(0,alpha) + text + excluded;
        } else {
            cname_textarea.value += text;
        }
    }
    document.getElementById(type + "-container").appendChild(button);
}

for(const p in prefixes)
    createButton("prefix", prefixes[p]);
for(const s in suffixes)
    createButton("suffix", suffixes[s]);
for(const o in other)
    createButton("other", other[o]);
