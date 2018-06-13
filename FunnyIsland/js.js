$(document).ready(function() {

	$("#Adult").change(function(event) {
			$("#sectionForAdult").empty();
		for (var i = 1;i<=$("#Adult").val(); i++) {
			$("#sectionForAdult").append('<div class="section_container"><div class="section_inner">Adult '+i+'<br><input type="text" name="Abuld'+i+'"><br><input type="checkbox" name="FastPass'+i+'"  id="AdultPass'+i+'"><label for="AdultPass'+i+'">+ Fast Pass >></label></div><div class="ticket" id="ticketForAdult'+i+'"><div class="ticket_name" id="ticketForAdultText'+i+'"></div></div></div>');
		}


		$('#sectionForAdult').on('change','input[type="checkbox"]', function (evt) {
			if($(this).prop("checked")){
						$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket2.png)');
					}else{
							$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket1.png)');
					}
		});

		$('#sectionForAdult').on('keyup','input[type="text"]', function (evt) {
			console.log($(this).val());
				$(this).parent().parent().find('.ticket_name').html($(this).val());
		});

		});
	

	$("#Children").change(function(event) {
		
			$("#sectionForChild").empty();
		for (var i = 1;i<=$("#Children").val(); i++) {
			$("#sectionForChild").append('<div class="section_container"><div class="section_inner">Child '+i+'<br><input type="text"><br><input type="checkbox" id="ChildPass'+i+'"><label for="ChildPass'+i+'">+ Fast Pass >></label></div><div class="ticket"><div class="ticket_name" id="ticketForAdultText'+i+'"></div></div></div>');
		}

		$('#sectionForChild').on('change','input[type="checkbox"]', function (evt) {
			if($(this).prop("checked")){
						$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket2.png)');
					}else{
							$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket1.png)');
					}
		});

		$('#sectionForChild').on('keyup','input[type="text"]', function (evt) {
			console.log($(this).val());
				$(this).parent().parent().find('.ticket_name').html($(this).val());
		});

	});


$("#Senior").change(function(event) {
		
			$("#sectionForSenior").empty();
		for (var i = 1;i<=$("#Senior").val(); i++) {
			$("#sectionForSenior").append('<div class="section_container"><div class="section_inner">Senior '+i+'<br><input type="text"><br><input type="checkbox" id="SeniorPass'+i+'"><label for="SeniorPass'+i+'">+ Fast Pass >></label></div><div class="ticket"><div class="ticket_name" id="ticketForAdultText'+i+'"></div></div></div>');
		}


$('#sectionForSenior').on('change','input[type="checkbox"]', function (evt) {
			if($(this).prop("checked")){
						$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket2.png)');
					}else{
							$(this).parent().parent().find('.ticket').css('background-image', 'url(images/ticket1.png)');
					}
		});

		$('#sectionForSenior').on('keyup','input[type="text"]', function (evt) {
			console.log($(this).val());
				$(this).parent().parent().find('.ticket_name').html($(this).val());
		});
	});

	// map1
$("#Stockholm").hover(function() {
	$(this).css('text-decoration', 'underline');
	i=0;j=0;
	interval=setInterval(function(){
		if (j>=2) {j=2}
		i+=30;
		j+=0.2;
	$("#mapMarkup1").css({
			"transform":"rotate("+i+"deg) scale("+j+")"
		});
	},1000)
}, function() {
	$(this).css('text-decoration', 'none');
	clearInterval(interval);
	$("#mapMarkup1").css({
			"transform":"rotate(0deg) scale(1)"
		});
});
// map2
$("#Gothenburg").hover(function() {
	i=0;j=0;
	interval=setInterval(function(){
		if (j>=2) {j=2}
		i+=30;
		j+=0.2;
	$("#mapMarkup2").css({
			"transform":"rotate("+i+"deg) scale("+j+")"
		});
	},1000)
}, function() {
	clearInterval(interval);
	$("#mapMarkup2").css({
			"transform":"rotate(0deg) scale(1)"
		});
});
// map3
$("#Oslo").hover(function() {
	i=0;j=0;
	interval=setInterval(function(){
		if (j>=2) {j=2}
		i+=30;
		j+=0.2;
	$("#mapMarkup3").css({
			"transform":"rotate("+i+"deg) scale("+j+")"
		});
	},1000)
}, function() {
	clearInterval(interval);
	$("#mapMarkup3").css({
			"transform":"rotate(0deg) scale(1)"
		});
});



$.ajax({
  method: "GET",
  url: "career.php"})
  .done(function( msg ) {
    $("#countjobs").html("We have "+msg.length+" jobs opening")
    for (var i = 0; i < msg.length; i++) {
    	console.log(msg[i]["name"]);
    	$("#careersbox").append('<div class="attrblock"><img src="images/'+msg[i]["image"]+'" alt="" class="attrImg" id="attrImg1"><div class="attrblockname">'+msg[i]["name"]+'</div></div>')
    }
  });

if (localStorage["content"]!=undefined) {
		$('.secretCode').html(localStorage.content);
		$('.secret').fadeOut('', function() {
				$('.secretCode').fadeIn();
		});
	}

$(".secret").click(function(event) {
	if ($('.BLACK').css('height')=="2px"){
			$('.BLACK').css({
				"width": '8px',
				"height": '8px'
			});
			$('.TOMATO').css({
				"width": '8px',
				"height": '8px',
				"top":"-8px",
				"left":"-8px"
			});
			$('.GOLD').css({
				"width": '8px',
				"height": '8px',
				"top":"0px",
				"left":"5x"
			});
			$('.YELLOWGREEN').css({
				"width": '8px',
				"height": '8px',
				"top":"5px",
				"left":"-8px"
			});
			$('.OLIVEDRAB').css({
				"width": '8px',
				"height": '8px',
				"top":"-5px",
				"left":"5px"
			});
			$('.SKYBLUE').css({
				"width": '8px',
				"height": '8px',
				"top":"0px",
				"left":"-7px"
			});
			$('.REBECCAPURPLE').css({
				"width": '8px',
				"height": '8px',
				"top":"-5px",
				"left":"0px"
			});
			$('.CRIMSON').css({
				"width": '8px',
				"height": '8px',
				"top":"3px",
				"left":"5px"
			});
	}
	else if ($('.BLACK').css('height')=="8px"){
			$('.BLACK').css({
				"width": '16px',
				"height": '16px'
			});
			$('.TOMATO').css({
				"width": '16px',
				"height": '16px',
				"top":"-16px",
				"left":"-16px"
			});
			$('.GOLD').css({
				"width": '16px',
				"height": '16px',
				"top":"0px",
				"left":"10x"
			});
			$('.YELLOWGREEN').css({
				"width": '16px',
				"height": '16px',
				"top":"10px",
				"left":"-16px"
			});
			$('.OLIVEDRAB').css({
				"width": '16px',
				"height": '16px',
				"top":"-10px",
				"left":"10px"
			});
			$('.SKYBLUE').css({
				"width": '16px',
				"height": '16px',
				"top":"0px",
				"left":"-14px"
			});
			$('.REBECCAPURPLE').css({
				"width": '16px',
				"height": '16px',
				"top":"-10px",
				"left":"0px"
			});
			$('.CRIMSON').css({
				"width": '16px',
				"height": '16px',
				"top":"6px",
				"left":"10px"
			});
	}
	else if ($('.BLACK').css('height')=="16px"){
		// 65-90 48-57
		// Math.random()*(90-65)+65
		code=[String.fromCharCode(Math.random()*(90-65)+65),String.fromCharCode(Math.random()*(90-65)+65),String.fromCharCode(Math.random()*(90-65)+65),String.fromCharCode(Math.random()*(90-65)+65)]
		$('.secretCode').html("Discount Code: "+code[0]+code[1]+code[2]+code[3] +"<br>Awesome! You found a secret discount code in our website.");
		localStorage.content = $('.secretCode').html();
		$('.secret').fadeOut('', function() {
				$('.secretCode').fadeIn();
		});

	}
});

// Financial 
$.ajax({
  method: "GET",
  url: "stock.php"})
  .done(function( msg ) {
  	date=new Date().getTime();
  	if (localStorage["date"]==undefined) {
  		localStorage.date=date;
  	}
  	if (localStorage["price"]==undefined) {
  		localStorage.price=msg;
  	}
  	if ( date-localStorage.date>=900000) {
	    localStorage.price=msg;
	    localStorage.date=date;
  	}
	  $("#Price").html(localStorage.price);

  });

});
