	

	var $valde = $("#div-valde");
	var $entrada = $("#div-entrada");
			
			// Movimento do personagem
			$(document).keydown( function(e){
			    switch (e.which) {
				    case 37:
				        $valde.css('left', $valde.offset().left - 10);
				        break;
				    case 38:
				        $valde.css('top', $valde.offset().top - 10);
				        break;
				    case 39:
				        $valde.css('left', $valde.offset().left + 10);
				        break;
				    case 40:
				        $valde.css('top', $valde.offset().top + 10);
				        break;
		   		}

		   	// Colisões com personagem
		   	if ((parseInt($valde.css('left')) == parseInt($entrada.css('left'))) &&
		   		parseInt($valde.css('top')) == (parseInt($entrada.css('top'))+20)) {
		   		$(".msg").show();
		   		$(".msg").html("<p class='titulo'>Oi viadão<br/><a href='proxima.html'>TO THE BATTLE!!!</a></p>");
		   	}else{
		   		$(".msg").hide();
		   	}

			});

			$("#div-valde").click(function(){
				var postop = $(this).css("top");
				var posleft = $(this).css("left");
				$("#posicao").css('background-color', 'blue');
				$("#posicao").html("Minha posicao top e " + postop + "e left " + posleft);

			});

			$("#div-entrada").click(function(){
				var postop = $(this).css("top");
				var posleft = $(this).css("left");
				$("#posicao").css('background-color', 'blue');
				$("#posicao").html("Minha posicao top e " + postop + "e left " + posleft);

			});