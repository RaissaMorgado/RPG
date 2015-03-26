		// Returns 1 if objects collide
				function collisionSolver(elem1, elem2) {
				    return comparePositions(getPosition(elem1), getPosition(elem2));
				}

				function getPosition(elem){
				 var pos, width, height;
				    pos = elem.position();
				    width = elem.width();
				    height = elem.height();
				    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
				}

				function comparePositions (p1, p2){
				 var r1, r2;
				    r1 = p1[0] < p2[0] ? p1 : p2;
				    r2 = p1[0] < p2[0] ? p2 : p1;
				    return r1[1] > r2[0] || r1[0] === r2[0];
				}  

	var $valde = $("#div-valde");
	var $zane = $("#div-zane");
	var $hotel = $("#div-hotel");
	var $saida = $("#div-saida");
	var $ann = $("#div-ann");
	var $forest = $("#div-forest");
	var $forest_saida = $("#div-forest_saida");
	var $leos = $("#div-leos");
	
			
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

			   	// Colisões com zane
			   	if ((parseInt($valde.css('left')) == parseInt($zane.css('left'))) &&
			   		parseInt($valde.css('top')) == (parseInt($zane.css('top'))+20)) {
			   		window.location.assign("proxima.html");
			   	}

			   	//console.log('Valde (' + $valde.css('left') + ',' + $valde.css('top') + ') - Hotel (' + $hotel.css('left') + ',' + $hotel.css('top') + ')');
			   	
			   	   // Colisões com hotel-entrada
			   if ((parseInt($valde.css('left')) == parseInt($hotel.css('left'))) &&
			   		parseInt($valde.css('top')) == parseInt($hotel.css('top'))) {

			   			window.location.replace('hotel2.html');
			   			$valde.css('top', parseInt($saida.css('top')) - 20);
			   			
			   		}
			   		// Colisões com hotel-saida
			   if ((parseInt($valde.css('left')) == parseInt($saida.css('left'))) &&
			   		parseInt($valde.css('top')) == parseInt($saida.css('top'))) {
			   			//$valde.css('left') = parseInt($valde.css('left')) - 20
			   			window.location.assign("field3.html");
			   		}
			   		// Colisões com ann
			   	if ((parseInt($valde.css('left')) == (parseInt($ann.css('left'))-20)) &&
			   		parseInt($valde.css('top')) == parseInt($ann.css('top'))) {
			   		window.location.assign("batalhann.html");
			   }
			   	// Colisões com floresta_entrada
			   if ((parseInt($valde.css('left')) == parseInt($forest.css('left'))) &&
			   		parseInt($valde.css('top')) == parseInt($forest.css('top'))) {

			   			window.location.assign("forest.html");
			   		}
			   	// Colisões com floresta_saida
			   if ((parseInt($valde.css('left')) == parseInt($forest_saida.css('left'))) &&
			   		parseInt($valde.css('top')) == parseInt($forest_saida.css('top'))) {

			   			window.location.replace('teste.html');
			   		}
			   	// Colisões com leos
			   	if ((parseInt($valde.css('left')) == (parseInt($leos.css('left'))+20)) &&
			   		parseInt($valde.css('top')) == parseInt($leos.css('top'))) {
			   		$("#msg_leos").show();
			   		$("#msg_leos").html("<p class='titulo'>Morre deabo<br/><a href='proxima.html'>TO THE BATTLE!!!</a></p>");
			   	}else{
			   		$("#msg_leos").hide();
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

