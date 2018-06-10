	var selectNow='';
	var mas=['q','w','e','r','t','y'];
	var CountTower=3;
	var width=130;
	var bottom=0;
$(document).ready(function() {

	$('#Count').change(function(event) {
		console.log($(this).val());
	});

// добавляем в 1 башню
for (var i = 0; i < CountTower; i++) {
	$(".tower.q").append('<div class="hanoi '+mas[i]+'"></div>');
	$(".hanoi."+mas[i]).css({
		width: width+'px',
		bottom:bottom+'px'
	});
	width-=20;
	bottom+=15;

}

// клик по hanoi
 $('.hanoi').click(function() {
 	parent=$(this).parent();
 	if ($(this).attr('class') == parent.find('div:last()').attr('class')) {
 		if (selectNow!='') {selectNow.css('border', 'none');};
 		$(this).css('border', '1px solid green');
 		selectNow=$(this);
 	}
 });

// клик по tower
 $('.tower').click(function(event) {
 if (selectNow!='' &&
   $(this).attr('class')!=parent.attr('class') &&
    (parseInt(selectNow.css('width'))<=parseInt($(this).find('div:last()').css('width')) ||
     !window.$(this).find('div:last()').css('width')))
 {
 	KolTower=$(this).find('div').length;

	selectNow.css('bottom', KolTower*15+'px');
	$(this).append(selectNow);

	selectNow.css('border', 'none');
	selectNow='';
	// условия победы
	if($(this).attr('class')=='tower e' && KolTower==2){
		alert('победа');
	};
 	
 }

 });

});