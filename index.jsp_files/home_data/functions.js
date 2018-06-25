/*
 * DynClick
 * Copyright 2003 AgenciaClick - http://www.agenciaclick.com.br
 * interface.spo@agenciaclick.com.br
 * $Date: 2004/02/02 19:43:52 $
 */

// Coloque aqui as funções específicas deste projeto
// Controla o mouseover so menu superior
function mnS(s, mn) {
	if (!isDef(mn + 'MnSupSubItensDL')) return;
	
	if (s) {
		DMhideAllSmn(mn, 0);
		eval(mn + 'MnSupSubItensDL.clearHideTimeout()');
		eval(mn + 'MnSupSubItensDL.sh()');
		eval("cI('" + mn + "', 'mn_" + mn + "_on')");
	} else {
		eval(mn + 'MnSupSubItensDL.setHideTimeout()');
		eval("cI('" + mn + "', 'mn_" + mn + "_off')");
	}
}


/*
 * Esconde todos os submenus
 */
function DMhideAllSmn(mn, l) {
	if (l==0) {
		var mnAr = ['carro','site'];
	}
	for (var i=0; i<mnAr.length; i++) {
		if (mnAr[i]!=mn) {
			eval(mnAr[i] + 'MnSupSubItensDL.clearShowTimeout(); ' + mnAr[i] + 'MnSupSubItensDL.hd()');
		}
	}
}

 
// Timeout DHTML
DLP=DL.prototype;

DLP.hideTimeout=null;
function DLclearHideTimeout(){clearTimeout(this.hideTimeout)};
function DLsetHideTimeout(){clearTimeout(this.hideTimeout);this.hideTimeout=setTimeout(this.obj+'.hd()',500)};
DLP.setHideTimeout=DLsetHideTimeout;
DLP.clearHideTimeout=DLclearHideTimeout;

DLP.showTimeout=null;
function DLclearShowTimeout(){clearTimeout(this.showTimeout)};
function DLsetShowTimeout(){clearTimeout(this.showTimeout);this.showTimeout=setTimeout(this.obj+'.sh()',500)};
DLP.setShowTimeout=DLsetShowTimeout;
DLP.clearShowTimeout=DLclearShowTimeout;


