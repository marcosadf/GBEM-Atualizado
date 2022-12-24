const ordenaRanking = (ranking, ordem) => {
	if(!ranking){
		return [];
	}
	var novoRanking = ranking;
	
	if(ordem == 1){	
		novoRanking.sort((a, b) =>{
			if(a.nome > b.nome) return 1;
			if(a.nome < b.nome) return -1;
			return 0;
		});		
	}
	if(ordem == -1){	
		novoRanking.sort((a, b) =>{
			if(a.nome < b.nome) return 1;
			if(a.nome > b.nome) return -1;
			return 0;
		});		
	}
	if(ordem == 2){	
		novoRanking.sort((a, b) =>{
			if(a.pontuacao > b.pontuacao) return 1;
			if(a.pontuacao < b.pontuacao) return -1;
			return 0;
		});		
	}
	if(ordem == -2){	
		novoRanking.sort((a, b) =>{
			if(a.pontuacao < b.pontuacao) return 1;
			if(a.pontuacao > b.pontuacao) return -1;
			return 0;
		});		
	}
	return novoRanking;
}