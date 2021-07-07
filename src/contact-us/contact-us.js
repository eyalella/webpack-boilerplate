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
    var bytesLimit = 15 * 1024 * 1024; // 15 MB - Change the Number to Change Max Size
    var filesTotalSize = 0

    for (var i = 0; i < files.length; i++) {
        var currFile = files[i];
        fileNames.push(currFile.name);
        filesTotalSize += currFile.size
    }

    if (filesTotalSize > bytesLimit) {
        $("#maxSize-error").show();
        $(e.target).val('')
    } else {
        $("#maxSize-error").hide();
        selDiv.innerHTML = fileNames.join('<br>')
    }
}


function changeValidations() {
    $("#customFile").change(
        function () {
            if ($(this).val().length > 0) {
                $('#subjectTextarea').prop('required', false);
                $('#subjectTextarea').prop('showBullet', false);
                $('#subjectTextarea').prop(
                    'data-parsley-error-message', false);
                $('#subjectTextarea').prop(
                    'data-parsley-validate-if-empty', false);

                $("#textAreaId").hide();
            } else {
                $("#textAreaId").show();
                $('#subjectTextarea').prop('required', true);
                $('#subjectTextarea').prop('showBullet', true);
                $('#subjectTextarea').prop('data-parsley-error-message', true);
                $('#subjectTextarea').prop(
                    'data-parsley-validate-if-empty', true);
            }
        });
}  
$(document).ready(function () {
    var result = window.location.hash.slice(1)
    
    if (result === 'fail') {
        $('#contactModalError').modal('toggle')
    } else if (result === 'success') {
        $('#contactModalSuccess').modal('toggle')
    }

    $('#subjectTextarea').focusin(function() {
        $('#hint').show();
    }).focusout(function () {
        $('#hint').hide();
    });

    // function focusMethod() {
    //     aField = document.getElementByClassName('file-button-text');
    //     setTimeout("aField.focus()", 50);
    // }

    $(".custom-file-input").focusin(function() {
        $(this).next(".file-button-text").addClass("focused");
    }).focusout(function () {
        $(this).next(".file-button-text").removeClass("focused");
    });
})