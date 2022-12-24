class Usuario{
	constructor(usuario){
		this.nome = usuario.nome;
		this.pontuacao = usuario.pontuacao;
		this.posicao = usuario.posicao;
	}
	reset(usuario){
		this.nome = usuario.nome;
		this.pontuacao = usuario.pontuacao;
		this.posicao = usuario.posicao;
	}
}