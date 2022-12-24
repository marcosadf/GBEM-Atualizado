var vGeral = geral;
var audio = new Audio(vGeral.enderecoSom);
audio.loop = vGeral.somLoop;
const renderAll = () => {
	renderBase(vGeral);
	renderRank(vGeral, ordenaRanking([
	new Usuario({nome: "Marcos", pontuacao: 35, posicao: 4}),
	new Usuario({nome:"João", pontuacao: 44, posicao: 1}),
	new Usuario({nome:"Maria", pontuacao: 20, posicao: 6}),
	new Usuario({nome:"Juliana", pontuacao: 39, posicao: 3}),
	new Usuario({nome:"Carlos", pontuacao: 27, posicao: 5}),
	new Usuario({nome:"Rafael", pontuacao: 40, posicao: 2})
], 2), 2);
	renderMenu();
	renderCanvas();

	//renderCanvas();
	$( "#menuBt-5" ).click(function() {
		setTelaCheia();
	});
	$('#menuBt-4').click(function () {
		if(vGeral.somAtivo){
			audio.pause();
			vGeral.somAtivo = false;
		}else{
			audio.play();
			vGeral.somAtivo = true;
		}
    });
}
const run = () => {
	renderAll();
	window.addEventListener('resize', function() {
		renderAll();
	});
}
run();