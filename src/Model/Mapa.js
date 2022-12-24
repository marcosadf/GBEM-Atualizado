class Mapa{
	constructor(mapa){
		this.proporcao = mapa.proporcao;
		this.numQuadrosX = mapa.numQuadrosX;
		this.numQuadrosY = mapa.numQuadrosY;
		this.spriteMapa = mapa.spriteMapa;
	}
	
	reset(mapa){
		this.proporcao = mapa.proporcao;
		this.numQuadrosX = mapa.numQuadrosX;
		this.numQuadrosY = mapa.numQuadrosY;
		this.spriteMapa = mapa.spriteMapa;
	}
}