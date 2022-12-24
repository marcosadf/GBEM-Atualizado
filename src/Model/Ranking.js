class Ranking{
	constructor(ranking){
		this.usuarios = ranking.usuarios;
	}
	reset(ranking){
		this.usuarios = ranking.usuarios;
	}
	
	
	addUsuario(usuario){
		this.usuarios.add(usuario);
	}
	
	ordenarRanking(){
		pessoas.sort(function(a,b) {
			return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
		});
	}
}