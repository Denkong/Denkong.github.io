	var selectNow='';
	var mas=['q','w','e','r','t','y'];
	var CountTower=3;
	var width=130;
	var bottom=0;

	function HanoiClickEvent(){
	 $('.hanoi').click(function() {
	 	parent=$(this).parent();
	 	if ($(this).attr('class') == parent.find('div:last()').attr('class')) {
	 		if (selectNow!='') {selectNow.css('border', 'none');};
	 		$(this).css('border', '1px solid green');
	 		selectNow=$(this);
	 	}
	 });
	}

	function addHanoi(Count){
		for (var i = 0; i < Count; i++) {
				$(".tower.q").append('<div class="hanoi '+mas[i]+'"></div>');
				$(".hanoi."+mas[i]).css({
					width: width+'px',
					bottom:bottom+'px'
				});
				width-=20;
				bottom+=15;
			}
	}

	function TowerClickEvent(){
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
			// win
			if($(this).attr('class')=='tower e' && KolTower+1==CountTower){
				alert('победа');
			};
		 	
		 }

		 });
	}




$(document).ready(function() {

	$('#Count').change(function(event) {
			$(".tower.q").empty();
			$(".tower.w").empty();
			$(".tower.e").empty();
		CountTower=$('#Count').val();
		width=130;
		bottom=0;
		selectNow='';
		addHanoi(CountTower);
		HanoiClickEvent();
		TowerClickEvent();
	});

addHanoi(CountTower);
HanoiClickEvent();
TowerClickEvent();


});