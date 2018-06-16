function sizeImage(){
	$("#plus").off("click");
	$("#minus").off("click");
	// увеличение
	$("#plus").click(function(event) {
		size=$("#imageFace").css('background-size');
		 $("#imageFace").css('background-size',parseInt(size)+10+'%' );
	});
// уменьшение
	$("#minus").click(function(event) {
		size=$("#imageFace").css('background-size');
		 $("#imageFace").css('background-size',parseInt(size)-10+'%' );
	});
}
function sizeElement(){
		$("#plus").off("click");
    $("#minus").off("click");
		// увеличение
			$("#plus").click(function(event) {
				Swidth=activeElement.css('width');
				 activeElement.css('width',parseInt(Swidth)+20+'px' );
				 Sheight=activeElement.css('height');
				activeElement.css('height',parseInt(Sheight)+10+'px' );
			});
		// уменьшение
			$("#minus").click(function(event) {
				Swidth=activeElement.css('width');
			activeElement.css('width',parseInt(Swidth)-20+'px' );
				 Sheight=activeElement.css('height');
			activeElement.css('height',parseInt(Sheight)-10+'px' );
			});
}
function rotateElement(){
		// поворот
		$("#right").click(function(event) {
		 		rotatedeg+=10;
				activeElement.css('transform',"rotate("+rotatedeg+"deg)");
			});
		// поворот
		$("#left").click(function(event) {
				rotatedeg-=10;
			activeElement.css('transform',"rotate("+rotatedeg+"deg)");
		});
}
function PictureClick(event){
	oldElement=activeElement;
	activeElement=$("#picture");
	activeElement.css('border', '2px dashed');
	if (oldElement.selector!=activeElement.selector && oldElement!=undefined) {
			oldElement.css('border', 'none');
	}
	$("#right").off('click');
	$("#left").off('click');
	sizeImage();
}

// Действия по кнопкам
$(document).keydown(function(event) {
	if (activeElement!=undefined) {
			switch(event.keyCode){
				case 76:
				if (activeElement.selector!="#picture") {
					rotatedeg-=10;
					activeElement.css('transform',"rotate("+rotatedeg+"deg)");
				}
				break;
				case 82:
				if (activeElement.selector!="#picture") {
					rotatedeg+=10;
					activeElement.css('transform',"rotate("+rotatedeg+"deg)");
				}
				break;
				case 37:
					pos=activeElement.css('left');
					activeElement.css('left',parseInt(pos)-10);
				break;
				case 39:
					pos=activeElement.css('left');
					activeElement.css('left',parseInt(pos)+10);
				break;
				case 109:
					if (activeElement.selector=="#picture") {
							size=$("#imageFace").css('background-size');
							$("#imageFace").css('background-size',parseInt(size)-10+'%' );
					}else{
							Swidth=activeElement.css('width');
							activeElement.css('width',parseInt(Swidth)-20+'px' );
							Sheight=activeElement.css('height');
							activeElement.css('height',parseInt(Sheight)-10+'px' );
					}
				break;
				case 107:
					if (activeElement.selector=="#picture") {
							size=$("#imageFace").css('background-size');
							$("#imageFace").css('background-size',parseInt(size)+10+'%' );
					}else{
							Swidth=activeElement.css('width');
							activeElement.css('width',parseInt(Swidth)+20+'px' );
							Sheight=activeElement.css('height');
							activeElement.css('height',parseInt(Sheight)+10+'px' );
					}
				break;
				default:
				console.log(event.keyCode);
				break;
			}
	}

});

$(document).ready(function() {

	$("#menu_1").click(function(event) {
		if (	$("#glasses").css('display')=="none") {
			$("#glasses").css('display', 'block');
		}else{
			$("#glasses").css('display', 'none');
		}
	});

	$("#menu_2").click(function(event) {
		if (	$("#beards").css('display')=="none") {
			$("#beards").css('display', 'block');
		}else{
			$("#beards").css('display', 'none');
		}
	});

	$("#menu_3").click(function(event) {
		if (	$("#hats").css('display')=="none") {
			$("#hats").css('display', 'block');
		}else{
			$("#hats").css('display', 'none');
		}
	});

	$('#save').click(function(event) {

		imagefordownload=$("#imageFace").css('background-image')
		newsrc=imagefordownload.slice(5, -2);
		console.log(newsrc);
		window.open(newsrc, 'asd');

	});

	sizeImage();

		// Загрузка файла
		$("#dropzone").on("dragover", function(event) {
		    event.preventDefault(); 
		    $(this).css('background-color', 'gray');
		});

		$("#dropzone").on("dragleave", function(event) {
		    event.preventDefault();  
		    $(this).css('background-color', 'white');
		});

		$("#dropzone").on("drop", function(event) {
		    event.preventDefault();  
		    $(this).css('background-color', 'white');
		    var image = event.originalEvent.dataTransfer.files[0];
		    // console.log(image);
		    // console.log(image["size"]);
		    // console.log(image["type"]);
		    if (image["size"]>307200){
		    	alert("слишком большой файл");
		    }
		    else if (image["type"]!="image/jpeg"){
		    	alert("файл не того типа");
		    }
		    else{
		    	var formImage = new FormData();
					formImage.append('dropImage', image);
					$.ajax({
						url: "upload.php",
						type: "POST",
						data: formImage,
						contentType:false,
						processData: false,
						success: function(response){
					    $("#imageFace").css({
					    	"background": 'url('+response+') no-repeat center',
					    	"background-size": '100%'
					    });
					    alert("Загрузка успешно завершена")
						}
					});
		    }   
		});


});

var oldElement;
var activeElement;
var rotatedeg=0;
$( function() {
    $( "#glasses_1" ).draggable({ revert: "invalid"});
    $( "#glasses_2" ).draggable({ revert: "invalid"});
    $( "#glasses_3" ).draggable({ revert: "invalid"});
    $( "#beards_1" ).draggable({ revert: "invalid"});
    $( "#beards_2" ).draggable({ revert: "invalid"});
    $( "#beards_3" ).draggable({ revert: "invalid"});
    $( "#beards_4" ).draggable({ revert: "invalid"});
    $( "#hats_1" ).draggable({ revert: "invalid"});
    $( "#hats_2" ).draggable({ revert: "invalid"});
    $( "#hats_3" ).draggable({ revert: "invalid"});
    $( "#hats_4" ).draggable({ revert: "invalid"});
    $( "#imageFace" ).droppable({
    	// при входе
    	drop: function( event, ui ) {
    		oldElement=activeElement;
    		activeElement=ui.draggable;
    		activeElement.css('border', '2px dashed');
    		if (oldElement!=activeElement && oldElement!=undefined) {
     				oldElement.css('border', 'none');
    		}
	    		rotateElement();
		      sizeElement();

    		// КЛИК ПО ЭЛЕМЕНТУ
    		ui.draggable.click(function(event) {
    			oldElement=activeElement;
    			activeElement=ui.draggable;
    			activeElement.css('border', '2px dashed');
    			if (oldElement!=activeElement && oldElement!=undefined) {
     				oldElement.css('border', 'none');
    			}
    				rotateElement();
    				sizeElement();
    		});

    		// КЛИК ПО ГЛАВНОМУ
    		$("#picture").click(PictureClick);

        },

        // при выходе
      out: function( event, ui ) {
      	ui.draggable.draggable({ revert: false });
      	
	      ui.draggable.on( "dragstop", function( event, ui ) {
	      		PictureClick();
	       		$(this).css({
		      		"top": '0px',
		      		"left": '0px',
		      		"transform": 'rotate(0deg)',
		      		"width": '200px',
		      		"height": '70px',
	      		});
	       		$(this).draggable({ revert: "invalid" });
	       		$(this).off("dragstop");
	      });
      }

    });

  } );