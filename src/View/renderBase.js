const renderBase = (elemBase) => {
	if($('#baseGame')){
		$('#baseGame').remove();
	} 
	let ret = calculoProporcao(elemBase);
	console.log("base");
	let baseGame = $("<div />", {
	  id: "baseGame",
	  style: 
		  `display: inline-block;
		  vertical-align: top;
		  padding: 0px;
		  margin: ${elemBase.telaCheia == true ? '0 auto' : '0px 0px 0px 0px'};
		  width: ${ret.bLargura + 'px'};
		  height: ${ret.bAltura + 'px'};
		  background-color: #DCDCDC;`
	});
	console.log(baseGame.attr('style'));
	$("#container").append(baseGame);
}
