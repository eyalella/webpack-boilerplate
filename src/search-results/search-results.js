
var TinyDatePicker = require('tiny-date-picker');
var moment = require('moment');
require('../common/common');
require('jquery-infinite-scroll-helper');

$(document).ready(function() {

	let closeFilterContainer = $('.close-filter-container');

	let width = $(window).width();

  	if (width < 992){
		closeFilterContainer.next().toggleClass('d-none');
		closeFilterContainer.toggleClass('border-none');
		closeFilterContainer.find($('.filter-arrow')).toggleClass('rotate');
	};

	closeFilterContainer.click(function() {
		$(this).next().toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.filters-wrapper').toggleClass('d-none');
		$('.grey-overlay').toggleClass('d-block');
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		$('.facet').toggleClass('padding-top-facet');
	});
	
	let datepicker = $('.datepicker');

	datepicker.each(function() {

		let maxDate = $(this).hasClass('startDate')? Date.now().toString() : null;
		let minDate = $(this).hasClass('endDate') ? Date.now().toString() :null;

		TinyDatePicker(this, {
		  lang: {
		  	months: ['	ינואר','פברואר','מרץ','	אפריל','מאי','יוני','	יולי','אוגוסט','ספטמבר','אוקטובר','	נובמבר','	דצמבר'],
		    days: ['א','ב','ג','ד','ה','ו','ש'],

		  },
		  format: function format(date){
		  	return moment(date).format("DD/MM/YYYY");
		  },
		  mode: 'dp-below',
		  min: minDate,
		  max: maxDate
		});
	});

	$(".close-filter-container").keyup(function(event) {
	    if (event.keyCode === 13) {
	        $(this).click();
	    }
	});

	$('.icheck').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            event.preventDefault();
            return false;
        }
	});

	$("input[data-type='currency']").on({
		keyup: function() {
	      formatCurrency($(this));
	    },
	    blur: function() { 
	      formatCurrency($(this), "blur");
	    }
	});


	function formatNumber(n) {
	  // format number 1000000 to 1,234,567
	  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}


	function formatCurrency(input, blur) {
	  var inputVal = input.val();
	  
	  if (inputVal === "") { 
	  	return; 
	  }
	  
	  var original_len = inputVal.length;

	  var caret_pos = input.prop("selectionStart");
	    
	  if (inputVal.indexOf(".") >= 0) {
	    var decimal_pos = inputVal.indexOf(".");

	    var left_side = inputVal.substring(0, decimal_pos);
	    var right_side = inputVal.substring(decimal_pos);

	    left_side = formatNumber(left_side);

	    right_side = formatNumber(right_side);

	    if (blur === "blur") {
	      right_side += "00";
	    }
	    
	    right_side = right_side.substring(0, 2);

	    inputVal =+ "₪" + left_side + '.' + right_side;

	  } else {
	    inputVal = formatNumber(inputVal);
	    inputVal = "₪" + inputVal;
	    
	    if (blur === "blur") {
	      inputVal;
	    }
	  }


	  input.val(inputVal);
	  
	  var updated_len = inputVal.length;
	  caret_pos = updated_len - original_len + caret_pos;
	  input[0].setSelectionRange(caret_pos, caret_pos);
	}

	$('.show-more-button').click(function() {
		var btn = $(this);
		var moreOptionsContainer = $('.more-options-container');
		var thisMoreOptionsContainer = btn.prev(moreOptionsContainer);
		var numberOfOptions = $('[thisMoreOptionsContainer] > div').length;
		//

		thisMoreOptionsContainer.toggleClass('d-block text-toggle');

    	if(thisMoreOptionsContainer.hasClass('text-toggle')){
        	btn.text('הצג פחות');         
	    } else {
	        btn.text('הצג עוד');
	    }
		if (numberOfOptions.length != 0) {
			
	    }
	});

	

	// $('input[type="text"]').change(function() { 
	// debugger
	// 	$('input[type="text"]').each(function(){
	// 	   if($(this).val()!=""){
	// 	   	$(this).first(".commit-button").removeClass("disabled");
	// 	   } 
	// 	   //else {
	// 	   // 	$(this).next(".commit-button").addClass("disabled");
	// 	   // }
	// 	})
	// });

	   $('input[type="text"]').change(function(e){
	   	let button = $(e.target).parent().parent().siblings(".commit-button");
	      if($(e.target).val()!=""){
		   	button.removeClass("disabled");
		  } else {
		  	button.addClass("disabled");
		  }
	   });
	   
	
	  
	var hasMore=true;
	var container=$('.search-results-content-with-results');
	container.infiniteScrollHelper({
	  loadMore: function(page,done) {
		  if(!hasMore){
			  return;
		  }
		  $.get('ajaxHtml/?s='+$.urlParam('s')+'&text='+$.urlParam('text')+'&page=' + page, function(data) {
			  // parse json data and create new html then append
			 	 var htmlData=$("<div>"+data+"</div>");
				var ajaxData=htmlData.find("#ajaxData");
				var totalResults=ajaxData.find("#totalResults").html();
				var numberOfPages=intParse(ajaxData.find("#numberOfPages").html());
				var currentPage=intParse(ajaxData.find("#currentPage").html());
				var pageSize=ajaxData.find("#pageSize").html();

				if (currentPage + 1 >= numberOfPages) {
				hasMore = false;
				}

				loadResults(htmlData.find("#ajaxResults"));
				done()
		  });
	  },
	  startingPageCount:0,
	  bottomBuffer:500,
	  });
	  function loadResults(htmlResults){
		  container.append(htmlResults);
	  }
	  function buildSearchResults(result){
  
	  }
	  $.urlParam = function(name){
		  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		  if (results==null){
		  return null;
		  }
		  else{
		  return decodeURI(results[1]) || 0;
		  }
	  }

	$('.icheck').change(function() {
		//
	    // Get the checkbox
	    //var checkBox = $('.icheck');
	    // Get the output text
		var filtersItem = $('.deselect-all-filters-wrapper');

		// If the checkbox is checked, display the output text
		if ($(this).prop("checked")){
			filtersItem.removeClass("d-none");
			filtersItem.addClass("d-flex");
		} else {
			filtersItem.removeClass("d-flex");
			filtersItem.addClass("d-none");
		}
	});


	$('.icheck').change(function() {
		
		var $filterOption = $(".icheck");
		var $filtersOptions = $();
		var $this = $(this);
		var $filtersList = $(".filters-list");
		var $deselectAllWrapper = $("deselect-all-filters-wrapper");
		//var currIndex = $filterOption.eq(index);
		
		$filterOption.each(function(index, filtersItemId) {
			var currIndex = $this.eq(index);

			if (currIndex.prop("checked")) {

				var $label = $(".main-label")
				var filtersItemId = currIndex.prop("id");
				var filtersItemName = currIndex.next($label).text();

				// filters list item template ///////////////////////////////////////
				var filtersItemTemplate =

			    `
					<li class="filters-list-item d-flex align-items-center" data-related-checkbox-id="${filtersItemId}" data-type="filters-Item">
							<span>${filtersItemName}</span>
							<button class="deselect-filter-btn" id="deselectFilterBtn"></button>
							<label class="sr-only" for="deselectFilterBtn">deselect filter button</label>
					</li>
			    `

			    $.merge($filtersOptions, $(filtersItemTemplate));
			}

			$filterOption.eq(index);
		});


		$("html").find($filtersList).append($filtersOptions);

		if($filterOption.prop("checked").length != 0){
			
		} else {

		};
	});
});




