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

        fileNames.push(currFile.name)
    }

    selDiv.innerHTML = fileNames.join('<br>')
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


$('.company-name input').keyup(function() {
    if( $(this).val().length === 0 ) {
        ($('.company-number input')).prop('required',false);
        ($('#bulletCompanyNumber')).addClass('d-none');
    } else {
        ($('.company-number input')).prop('required',true);
        ($('#bulletCompanyNumber')).removeClass('d-none');
    }
});

$('.company-number input').keyup(function() {
    if( $(this).val().length === 0 ) {
        ($('.company-name input')).prop('required',false);
        ($('#bulletCompanyName')).addClass('d-none');
    } else {
        ($('.company-name input')).prop('required',true); 
        ($('#bulletCompanyName')).removeClass('d-none');
    }
});

$(".custom-file-input").focusin(function() {
    $(this).next(".file-button-text").addClass("focused");
}).focusout(function () {
    $(this).next(".file-button-text").removeClass("focused");
});
