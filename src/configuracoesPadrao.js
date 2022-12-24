const geral = {
	largura: 600,
	altura: 600,
	telaCheia: false,
	enderecoSom: '../audio/trilha1.mp3',
	somAtivo: false,
	somLoop: true,
	logado: true
}
const canvas = {
	largura: 500,
	altura: 500,
	larBorda: 25,
	spriteBorda: 'imagens/borda1.png',
	telaCheia: geral.telaCheia
}
const mapa = {
	proporcao: {
		largura: canvas.largura - (canvas.larBorda * 2), 
		altura: canvas.altura - (canvas.larBorda * 2)
	},
	numQuadrosX: 40,
	numQuadrosY: 40,
	spriteMapa: 'imagens/mapa1.png'
}
const cobra = {
	estado: 'vivo',
	spriteCorpo: 'imagens/corpo1.png',
	spriteCabeca: 'imagens/cabeca1.png',
	corpo: [
		{
			x: 3,
			y: 3,
			posicao: 'd'
		},
		{
			x: 4,
			y: 3,
			posicao: 'd'
		},
		{
			x: 5,
			y: 3,
			posicao: 'd'
		},
		{
			x: 6,
			y: 3,
			posicao: 'd'
		},
	]
}
const itemColetavel = {
	posicao: {
		x: 1,
		y: 1,
	},
	sprite: 'imagens/itemComum.png',
	tempRend: 30,
	ponto: 1,
	gatilhoQuest: false,
	criado: true
}









