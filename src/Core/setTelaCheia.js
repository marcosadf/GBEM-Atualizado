const setTelaCheia = () => {
	if(vGeral.telaCheia){
		vGeral.telaCheia = false;
		renderAll();
	}
	else{
		vGeral.telaCheia = true;
		renderAll();
	}
}