require('../common/common');

$(document).ready(function() {

 //    var data = { x: 42, s: "hello, world", d: new Date() },
 //    fileName = "https://www.dropbox.com/s/6qejg0apxxroadt/logo.png?dl=0";
	// var a = document.createElement("a");
	// document.body.appendChild(a);
	    
	// var json = JSON.stringify(data),
	//     blob = new Blob([json], {type: "octet/stream"}),
	//     url = window.URL.createObjectURL(blob);
	// a.href = url;
	// //allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
	// a.download = fileName;
	// a.innerHTML = 'test link';

	$("#download-arrow").on('click', function(e){
		debugger;
        var x=new XMLHttpRequest();
		x.open("GET", "", true);
		x.responseType = 'blob';
		x.onload=function(e){download(x.response, "dlBinAjax.png", "image/png" ); }
		x.send();
    });
});
