const renderBase = (elemBase) => {
	if($('#baseGame') == true){
		$('#baseGame').remove();
	} 
	let proporcao = calcElemTelaCheia();
	let baseGame = $("<div />", {
	  id: "baseGame",
	  style: 
		  `display: inline-block;
		  vertical-align: top;
		  padding: 0px;
		  margin: ${elemBase.telacheia == true ? '0 auto' : '0px 0px 0px 0px'};
		  width: ${elemBase.telacheia == true ? proporcao + 'px' : elemBase.largura + 'px'};
		  height: ${elemBase.telacheia == true ? proporcao + 'px' : elemBase.altura  + 'px'};
		  background-color: #ccc;
		  borde: solid 1px #000;`
	});
	$("body").append(baseGame);
}
const renderRank = (elemBase) => {
	if($('#baseRank') == true){
		$('#baseRank').remove();
	} 
	let proporcao = calcElemTelaCheia();
	let baseRank = $("<div />", {
	  id: "baseRank",
	  style: 
		  `
		  display: inline-block;
		  vertical-align: top;
		  padding: 0px;
		  margin: ${elemBase.telacheia == true ? '0 auto' : '0px 0px 0px 0px'};
		  width: ${elemBase.telacheia == true ? (proporcao / 2) + 'px' : (elemBase.largura / 2) + 'px'};
		  height: ${elemBase.telacheia == true ? proporcao + 'px' : elemBase.altura + 'px'};
		  background-color: #DCDCDC;
		  borde: solid 1px #000;`
		 
	});
	
	let tabRank = $("<table />", {
	  id: "tabRank",
	  style: 
		  `width: 100%;
		  border-spacing: 0;
		  `
	});
	let tabRankThead = $("<thead />", {
	  id: "tabRankThead"
	});
	let tabRankTheadTr = $("<tr />", {
	  id: "tabRankTheadTr"
	});
	
	let tabRankTheadThPosi = $("<th />", {
	  id: "tabRankTheadThPosi"
	});
	tabRankTheadThPosi.html("Posição");
	let tabRankTheadThUsua = $("<th />", {
	  id: "tabRankTheadThUsua"
	});
	tabRankTheadThUsua.html("Usuario");
	let tabRankTheadThPont = $("<th />", {
	  id: "tabRankTheadThPont"
	});
	tabRankTheadThPont.html("Pontos");
	
	tabRankTheadTr.append(tabRankTheadThPosi);
	tabRankTheadTr.append(tabRankTheadThUsua);
	tabRankTheadTr.append(tabRankTheadThPont);
	
	tabRankThead.append(tabRankTheadTr);
	
	tabRank.append(tabRankThead);
	
	
	let tabRankTbody = $("<tbody />", {
	  id: "tabRankTbody"

	});
	for(var i = 0; i < 3; i++){
			
		let tabRankTbodyTr = $("<tr />", {
		  id: "tabRankTbodyTr",
		  style: 
			  `background-color: ${i % 2 ? '#DCDCDC': '#B0C4DE'}
			  
			  `
		});
		let tabRankTbodyTdPosi = $("<td />", {
		  id: "tabRankTheadTdPosi"
		});
		let tabRankTbodyTdUsua = $("<td />", {
		  id: "tabRankTheadTdUsua"
		});
		let tabRankTbodyTdPont = $("<td />", {
		  id: "tabRankTheadTdPont"
		})
		tabRankTbodyTdPosi.html(1);
		tabRankTbodyTdUsua.html('Marcos');
		tabRankTbodyTdPont.html(1000);
		tabRankTbodyTr.append(tabRankTbodyTdPosi);
		tabRankTbodyTr.append(tabRankTbodyTdUsua);
		tabRankTbodyTr.append(tabRankTbodyTdPont);
		
		tabRankTbody.append(tabRankTbodyTr);
	}
	
	tabRank.append(tabRankTbody);
	
	baseRank.append(tabRank);
	
	$("body").append(baseRank);
}

const renderMenu = () => {
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
				height: ${($('#baseGame').height() * 0.05) +'px'};
				line-height: ${($('#baseGame').height() * 0.05) +'px'};
				font-size: ${($('#baseGame').height() * 0.03) +'px'};`
		});
		menuLi.html(i == 1 ? "Novo Jogo": (i == 2 ? "Novo Jogador": (i == 3 ? "Ajuda": (i == 4 ? "Som": "Tela Cheia"))));
		menuUl.append(menuLi);
	}
	menuGame.append(menuUl);
	$('#baseGame').append(menuGame);
}

const calcElemTelaCheia = () => {
	let proporcao;
	if(window.innerWidth > window.innerHeight * 1.5){
		proporcao = window.innerHeight;
	}else{
		proporcao = window.innerWidth * 2/3;
	}
	return proporcao * 0.95;
}

renderBase(geral);
renderRank(geral);
renderMenu();
