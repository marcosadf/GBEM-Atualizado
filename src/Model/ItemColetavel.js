class ItemColetavel{
	constructor(){
		this.posicao;
		this.sprite;
		this.tempoRend;
		this.pontos;
		this.gatilhoQuest;
		this.criado;
	}
	
	reset(){
		this.posicao;
		this.sprite;
		this.tempoRend;
		this.pontos;
		this.gatilhoQuest;
	}
	
	gerarPosicao(mapa, cobra, itens){
		do{
			this.posicao.x = parseInt(Math.random() * mapa.largura);
			this.posicao.y = parseInt(Math.random() * mapa.altura);
			
			let condicional = false;
			for(let i = 0; i < itens.length; i++){
				if(this.posicao.x == itens[i].x && this.posicao.y == itens[i].y){
					condicional = true;
				}
			}
			if(condicional){
				for(let i = 0; i < cobra.length; i++){
					if(this.posicao.x == cobra[i].x && this.posicao.y == cobra[i].y){
						condicional = true;
					}
				}
			}
		}while(condicional);
	}
}