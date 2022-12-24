const calculoProporcao = (elemBase) =>{
	var ret = {};
	if(elemBase.telaCheia){
		if(window.innerWidth < elemBase.largura * 1.5 || window.innerWidth < window.innerHeight * 1.55){
			if(window.innerWidth > window.innerHeight){
				if(window.innerWidth > window.innerHeight * 1.45){
					ret.bLargura = window.innerHeight * 0.95;
					ret.bAltura = window.innerHeight;
					ret.rLargura = window.innerHeight / 2;
					ret.rAltura = window.innerHeight;
				}
				else{
					ret.bLargura = window.innerWidth * 2/3;
					ret.bAltura = window.innerWidth  * 2/3 * 1.05;
					ret.rLargura = window.innerWidth / 3;
					ret.rAltura = window.innerWidth * 2/3 * 1.05;
				}
			}
			else{
				if(window.innerWidth * 1.55 < window.innerHeight){					
					ret.bLargura = window.innerWidth;
					ret.bAltura = window.innerWidth * 1.05;
					ret.rLargura = window.innerWidth;
					ret.rAltura = window.innerWidth / 2;
				}else{
					ret.bLargura = window.innerHeight * 0.6452;
					ret.bAltura = window.innerHeight * 0.6774;
					ret.rLargura = window.innerHeight * 0.6452;
					ret.rAltura = window.innerHeight * 0.3226;
				}
			}
		}
		else {
			if(window.innerWidth < window.innerHeight * 1.55){
				ret.bLargura = window.innerWidth * 2/3;
				ret.bAltura = window.innerWidth * 2/3 * 1.05;
				ret.rLargura = window.innerWidth / 3;
				ret.rAltura = window.innerWidth * 2/3 * 1.05;
			}
			else{
				ret.bLargura = window.innerHeight * 0.95;
				ret.bAltura = window.innerHeight;
				ret.rLargura = window.innerHeight / 2;
				ret.rAltura = window.innerHeight;
			}
		}
	}
	else{
		if(window.innerWidth > elemBase.largura * 1.5){
			if(elemBase.altura < window.innerHeight * 1.05){
				ret.bLargura = elemBase.largura * 0.95;
				ret.bAltura = elemBase.altura;
				ret.rLargura = elemBase.largura / 2;
				ret.rAltura = elemBase.altura;
			}
			else{
				if(window.innerWidth * 7/9 > window.innerHeight){
					if(window.innerWidth > window.innerHeight * 1.60){
						ret.bLargura = window.innerHeight * 0.93;
						ret.bAltura = window.innerHeight * 0.98;
						ret.rLargura = window.innerHeight * 0.98 / 2;
						ret.altura = window.innerHeight * 0.98;
					}
					else{
						ret.bLargura = window.innerWidth * 0.98 * 2/3 * 0.95;
						ret.bAltura = window.innerWidth * 0.98 * 2/3;
						ret.largura = window.innerWidth * 0.98 / 3;
						ret.rAltura = window.innerWidth * 0.98 * 2/3;
					}
				}
				else{
					ret.bLargura = window.innerWidth * 0.93;
					ret.bAltura = window.innerWidth * 0.98;
					ret.rLargura = window.innerWidth * 0.98;
					ret.rAltura = window.innerWidth * 0.98 * 3/9;
				}
			}
		}
		else if(window.innerWidth > elemBase.largura && window.innerHeight > elemBase.altura * 1.55){
			ret.bLargura = elemBase.largura;
			ret.bAltura = elemBase.altura * 1.05;
			ret.rLargura = elemBase.largura;
			ret.rAltura = elemBase.altura / 2;
		}
		else{
			if(window.innerWidth * 1.55 > window.innerHeight){
				if(window.innerWidth > window.innerHeight * 1.5){
					ret.bLargura = window.innerHeight;
					ret.bAltura = window.innerHeight;
					ret.rLargura = window.innerHeight / 2;
					ret.rAltura = window.innerHeight;
				}
				else{
					ret.bLargura = window.innerWidth * 2/3 * 0.95;
					ret.bAltura = window.innerWidth* 2/3;
					ret.rLargura = window.innerWidth / 3;
					ret.rAltura = window.innerWidth * 2/3;
				}
			}
			else{
				ret.bLargura = window.innerWidth;
				ret.bAltura = window.innerWidth * 1.05;
				ret.rLargura = window.innerWidth;
				ret.rAltura = window.innerWidth / 2;
			}	
		}
	}
	return ret;
}