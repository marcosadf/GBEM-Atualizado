const renderRank = (elemBase, vetUsuarios, ordemAtual) => {
	if($('#baseRank')){
		$('#baseRank').remove();
	} 
	let proporcao = calculoProporcao(elemBase);
	let baseRank = $("<div />", {
	  id: "baseRank",
	  style: 
		  `
		  display: inline-block;
		  vertical-align: top;
		  padding: 0px;
		  margin: ${elemBase.telacheia == true ? '0 auto' : '0px 0px 0px 0px'};
		  width: ${proporcao.rLargura + 'px'};
		  height: ${proporcao.rAltura + 'px'};
		  background-color: #ccc;`
		 
	});
	let tabRank = $("<table />", {
	  id: "tabRank",
	  style: 
		  `width: 100%;
		  border: solid 1px #3f3f3f;
		  border-spacing: 0;
		  `
	});
	let tabRankThead = $("<thead />", {
	  id: "tabRankThead"
	});
	let tabRankTheadTr = $("<tr />", {
	  "class": "tabRankTr"
	});
	
	let tabRankTheadThPosi = $("<th />", {
	  "class": "tabRankTheadTh",
	  style:`
			font-size: ${($('#baseGame').height() * 0.03) +'px'};
			height: ${($('#baseGame').width() * 0.05) - 1 +'px'};
			`
	});
	tabRankTheadThPosi.html("Posição");
	let tabRankTheadThUsua = $("<th />", {
	  "class": "tabRankTheadTh",
	  style:`
			width: 50%;
			font-size: ${($('#baseGame').height() * 0.03) +'px'};
	  `
	});
	tabRankTheadThUsua.html("Usuario");
	tabRankTheadThUsua.click(function(){
			console.log(ordemAtual);
            renderRank(elemBase, ordenaRanking(vetUsuarios, (ordemAtual != 1? 1: -1)), (ordemAtual != 1? 1: -1));
        });
	let tabRankTheadThPont = $("<th />", {
	  "class": "tabRankTheadTh",
	  style:`
			font-size: ${($('#baseGame').height() * 0.03) +'px'};
	  `
	});
	tabRankTheadThPont.html("Pontos");
	tabRankTheadThPont.click(function(){
            renderRank(elemBase, ordenaRanking(vetUsuarios, (ordemAtual != 2? 2: -2)), (ordemAtual != 2? 2: -2));      
        });
	
	tabRankTheadTr.append(tabRankTheadThPosi);
	tabRankTheadTr.append(tabRankTheadThUsua);
	tabRankTheadTr.append(tabRankTheadThPont);
	
	tabRankThead.append(tabRankTheadTr);
	
	tabRank.append(tabRankThead);
	
	
	let tabRankTbody = $("<tbody />", {
	  id: "tabRankTbody"

	});
	for(var i = 0; i < vetUsuarios.length; i++){
			
		let tabRankTbodyTr = $("<tr />", {
		  "class": "tabRankTr",
		  style: 
			  `background-color: ${i % 2 ? '#DCDCDC': '#B0C4DE'}  
			  `
		});
		let tabRankTbodyTdPosi = $("<td />", {
		  "class": "tabRankTd",
		  style:`
				font-size: ${($('#baseGame').height() * 0.03) +'px'};
		  `
		});
		let tabRankTbodyTdUsua = $("<td />", {
		  "class": "tabRankTd",
		  style:`
				font-size: ${($('#baseGame').height() * 0.03) +'px'};
				`
		});
		let tabRankTbodyTdPont = $("<td />", {
		  "class": "tabRankTd",
			style:`
				font-size: ${($('#baseGame').height() * 0.03) +'px'};
				`
		})
		tabRankTbodyTdPosi.html(vetUsuarios[i].posicao);
		tabRankTbodyTdUsua.html(vetUsuarios[i].nome);
		tabRankTbodyTdPont.html(vetUsuarios[i].pontuacao);
		tabRankTbodyTr.append(tabRankTbodyTdPosi);
		tabRankTbodyTr.append(tabRankTbodyTdUsua);
		tabRankTbodyTr.append(tabRankTbodyTdPont);
		
		tabRankTbody.append(tabRankTbodyTr);
	}
	
	tabRank.append(tabRankTbody);
	
	baseRank.append(tabRank);
	
	$("#container").append(baseRank);
}
