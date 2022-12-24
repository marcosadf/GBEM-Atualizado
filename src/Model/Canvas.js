class Canvas {
	constructor(canvas) {
		this.largura = canvas.largura;
		this.altura = canvas.altura;
		this.larBorda = canvas.larBorda;
		this.spriteBorda = canvas.spriteBorda;
		this.telaCheia = canvas.telaCheia;
	}
	
	reset(canvas){
		this.largura = canvas.largura;
		this.altura = canvas.altura;
		this.larBorda = canvas.larBorda;
		this.spriteBorda = canvas.spriteBorda;		
		this.telaCheia = canvas.telaCheia;
	}
	
	ajustarTela(documento){
		if (this.telaCheia == true){
			this.telaCheia = false;
			documento.getElementById('body').scrolling = "yes";
		}else{
			this.telaCheia = true;
			documento.getElementById('body').scrolling = "no";
		}
		this.ajustarCanvas(telaCheia);
		if(!telaCheia){
			largura = parseInt(config.larguraInic / config.nQuadrados) * config.nQuadrados;
			altura = parseInt(config.alturaInic / config.nQuadrados) * config.nQuadrados;	
			canvas.width = largura;
			canvas.height = altura;
			tamQuadrado = Math.max(Math.floor(largura/config.nQuadrados),Math.floor(altura/config.nQuadrados));
			divGame.style.position = "relative";
			divGame.style.margin = "0px 0px 0px 0px";
			divGame.style.width = largura * 1.57 +"px";
			divGame.style.height = altura * 1.12 + "px";
			tabelaGame.style.position = "absolute";
			tabelaGame.style.left= "0%";
			tabelaGame.style.marginLeft = "0px";
			tabelaGame.style.top = "0%";
			tabelaGame.style.marginTop = "0px";
		}
		else if(telaCheia){
			WIDTH = window.innerWidth;
			HEIGHT = window.innerHeight; //O "10" serve para ajuste tecnico para evitar a barra de rolagem.
			if(WIDTH >= HEIGHT){
				canvas.width = parseInt(HEIGHT * 0.95 / config.nQuadrados) * config.nQuadrados;
				canvas.height = parseInt(HEIGHT * 0.95 / config.nQuadrados) * config.nQuadrados;
				porCenTelaAment = ((parseInt(HEIGHT / config.nQuadrados) * config.nQuadrados) * 100) / altura;
				cresceBarra = cresceBarra * (porCenTelaAment / 100);
				largura = parseInt(HEIGHT * 0.95 / config.nQuadrados) * config.nQuadrados;
				altura = parseInt(HEIGHT * 0.95 / config.nQuadrados) * config.nQuadrados;
				tamQuadrado = Math.max(Math.floor(largura/config.nQuadrados),Math.floor(altura/config.nQuadrados));
				tabelaGame.style.marginLeft = (WIDTH / 2) - (largura * 1.6 / 2) + "px";
				telaGame.style.marginTop = "100px";
				tabelaGame.style.top = "1%";
			}else if(WIDTH <= HEIGHT){
				canvas.width = parseInt(WIDTH / config.nQuadrados) * config.nQuadrados;
				canvas.height = parseInt(WIDTH / config.nQuadrados) * config.nQuadrados;
				porCenTelaAment = ((parseInt(WIDTH / config.nQuadrados) * config.nQuadrados) * 100) / largura;
				cresceBarra = cresceBarra * (porCenTelaAment / 100);
				largura = parseInt(WIDTH / config.nQuadrados) * config.nQuadrados;
				altura = parseInt(WIDTH / config.nQuadrados) * config.nQuadrados;
				tamQuadrado = Math.max(Math.floor(largura/config.nQuadrados),Math.floor(altura/config.nQuadrados));
				tabelaGame.style.marginTop = 10 + (HEIGHT / 2) - (altura * 1.1 / 2) + "px";
			}
			divGame.style.width = WIDTH + "px";
			divGame.style.height =  HEIGHT + "px";
			divGame.style.position = "absolute"; 
			divGame.style.margin = "-10px -10px -10px -10px";
		}
		telaGame.width = largura + "px";
		telaGame.altura = altura + "px";
		tituloRank.style.border = "1px solid #000";
		painelRank.width = largura / 2 + 'px';
		painelRank.height = altura + 'px';
		painelRank.style.border = "1px solid #000";
		posicaoAtual.style.width = largura / 2 + "px";
		posicaoTop.style.width = largura / 2 + "px";
		posicaoAtual.height = altura * 0.85 / 3 + "px";
		posicaoTop.height = altura * 0.85 / 3 * 2 + "px";
		for (var i = 1; i < 6; i++) {
			tdMenu = document.getElementById('tdMenu'+ i +'');
			tdMenu.width = largura / 5 + 'px';
		}
		for (var i = 1; i < 6; i++) {
			botao = document.getElementById('botao'+ i +'');
			botao.style.fontSize = largura * 1.6 / 65 + 'px';
			botao.style.width = '100%';
			botao.style.height = '100%';
		}
		divUser = document.getElementById('divUser');
		if(divUser){
			tituloRank.width = largura / 2 + "px";
			var tamUserDivL = largura / 2;
			var tamUserDivA = largura / 4;
			var coordUseX = largura / 2 + canvas.getBoundingClientRect().left - tamUserDivL / 2;
			var coordUseY = altura * 0.45;

			divUser.style.left = coordUseX + "px";
			divUser.style.top = coordUseY + "px";
			divUser.style.width = tamUserDivL + "px";
			divUser.style.height = tamUserDivA + "px";
		}
		buraco = {
	        x: parseInt(largura * 0.10 + (tamQuadrado / 2) + tamQuadrado),
	        y: parseInt(altura * 0.10 + (tamQuadrado / 2)), 
	        raio: tamQuadrado + tamQuadrado * 0.1    
	    }
	    dimenPainel = {
			largura: largura * 0.60,
			altura: altura * 0.40
		}
		posicaoPainel = {
			x: (largura - dimenPainel.largura) / 2,
			y: (altura / 2) - (dimenPainel.altura / 2)
		}
	    this.desenha();
	}
}