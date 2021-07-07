require('../common/common');

$( document ).ready(function() {
	$(".name-td").click(function() {
		$(this).next().toggleClass("d-none");
		$(this).find($(".grey-arrow")).toggleClass("rotate");
	});
});

