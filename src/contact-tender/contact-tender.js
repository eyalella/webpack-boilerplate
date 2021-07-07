require('../common/common');

var selDiv = "";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    document.querySelector('#customFile').addEventListener('change',
        handleFileSelect, false);
    selDiv = document.querySelector("#selectedFiles");

    changeValidations();
}

function handleFileSelect(e) {

    if (!e.target.files)
        return;

    selDiv.innerHTML = "";

    var files = e.target.files;
    var fileNames = []
    for (var i = 0; i < files.length; i++) {
        var currFile = files[i];

        fileNames.push('<div class= "file-name">' + currFile.name + '<button type= "button" style="background: url(../common/images/file-close-x.svg)"/>' + '</div>')
    }

    selDiv.innerHTML = fileNames.join("")
}

$(".custom-file-input").focusin(function() {
    $(this).next(".file-button-text").addClass("focused");
}).focusout(function () {
    $(this).next(".file-button-text").removeClass("focused");
});