const renderMenu = () => {
	if($('#menuGame')){
		$('#menuGame').remove()
	}
	let menuGame = $("<div />",{
		id: "menuGame",
		'class': "menuGame"
	});
	let menuUl = $('<ul />', {style: "margin: 0px; padding: 0px;"});
	
	for(var i = 1; i < 6; i++){
		let menuLi = $('<li />',{id: "menuBt-" + i, style: `
				margin: 0px;
				padding: 0px;
				width: ${($('#baseGame').width() * 0.20) * 0.999 +'px'}; 
				height: ${($('#baseGame').width() * 0.05) +'px'};
				line-height: ${($('#baseGame').height() * 0.05) +'px'};
				font-size: ${($('#baseGame').height() * 0.03) +'px'};`
		});
		menuLi.html(i == 1 ? "Novo Jogo": (i == 2 ? "Novo Jogador": (i == 3 ? "Ajuda": (i == 4 ? "Som": "Tela Cheia"))));
		menuUl.append(menuLi);
	}
	menuGame.append(menuUl);
	$('#baseGame').append(menuGame);
}
