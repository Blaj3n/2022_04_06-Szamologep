window.addEventListener("load", init);
function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelector(elem);
}

function init(){
    var txt = "";
    for (let index = 0; index < 10; index++) {
        txt += "<button>";
        txt += [index];
        txt += "</button>";
    }
    $(".szamok").innerHTML = txt;

    document.querySelector("button").addEventListener("click", szamBeutes);

    function szamBeutes(){
        document.querySelectorAll("button").innerHTML = "1";
    }
}