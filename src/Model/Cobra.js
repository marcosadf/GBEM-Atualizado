class Cobra{
	constructor(cobra){
		this.corpo = cobra.corpo;
		this.spriteCorpo = cobra.spriteCorpo;
		this.spriteCabeca = cobra.spriteCabeca;
		this.estado = cobra.estado;
	}
	reset(cobra){
		this.corpo = cobra.corpo;
		this.spriteCorpo = cobra.spriteCorpo;
		this.spriteCabeca = cobra.spriteCabeca;
		this.estado = cobra.estado;
	}
	andar(mapa, direcao = 'd', itemComum, itemBonus){
		if(this.estado == 'vivo'){
			if(!(this.corpo[0].x == 0 && direcao == 'e') && !(this.corpo[0].x == mapa.numQuadrosX && direcao == 'd') && !(this.corpo[0].y == 0 && direcao == 'c') && !(this.corpo[0].y == mapa.numQuadrosY && direcao == 'b')){
				
				for(let i = 1; i < this.corpo.length; i++){
					this.corpo[i].x = this.corpo[i-1].x;
					this.corpo[i].y = this.corpo[i-1].y;
					this.corpo[i].posicao = this.corpo[i-1].posicao;
				}
				switch(direcao){
					case 'd':
						this.corpo[0].posicao = direcao;
						this.corpo[0].x += 1;
						break;
					case 'e':
						this.corpo[0].posicao = direcao;
						this.corpo[0].x -= 1;
						break;
					case 'c':
						this.corpo[0].posicao = direcao;
						this.corpo[0].x -= 1;
						break;
					case 'b':
						this.corpo[0].posicao = direcao;
						this.corpo[0].x += 1;
						break;
				}
				
				for(let i = 1; i < this.corpo.length; i++){
					if(this.corpo[0].x == this.corpo[i].x && this.corpo[0].y == this.corpo[i].y){
						return codExec = 2;
					}
				}
				
				if(this.corpo[0].x == itemComum.x && this.corpo[0].y == itemComum.y){
					return codExec = 3;
				}
				else if(this.corpo[0].x == itemBonus.x && this.corpo[0].y == itemBonus.y){
					return codExec = 3;
				}else{
					return codExec = 0;
				}
			}
			else{
				return codExec = 1;
			}
		}else{
			return codExec = 21;
		}
	}
	
	pegarTamanho(){
		return this.corpo.length;
	}
}