require('../common/common');

$(document).ready(function () {
    var result = window.location.hash.slice(1)
    
    if (result === 'fail') {
        $('#modalFail').modal('toggle')
    } else if (result === 'success') {
        $('#modalSuccess').modal('toggle')
    }
})