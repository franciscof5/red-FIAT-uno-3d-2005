/*
 * DynClick
 * Copyright 2003 AgenciaClick - http://www.agenciaclick.com.br
 * interface.spo@agenciaclick.com.br
 * $Date: 2004/02/02 19:43:52 $
 */
 
// Esta função é executada a cada onload em TODAS as páginas
function initDefault(){

	// Menu Geral
	if(isDef('init'))init();
	pI('../../img/br/mn_conheca.gif');
	pI('../../img/br/mn_conheca_on.gif');
	pI('../../img/br/mn_fotos_menu.gif');
	pI('../../img/br/mn_fotos_menu_on.gif');
	pI('../../img/br/mn_historia.gif');
	pI('../../img/br/mn_historia_on.gif');
	pI('../../img/br/mn_apaixonados.gif');
	pI('../../img/br/mn_apaixonados_on.gif');
	pI('../../img/br/mn_opiniao.gif');
	pI('../../img/br/mn_opiniao_on.gif');
	pI('../../img/br/mn_monte.gif');
	pI('../../img/br/mn_monte_on.gif');

	//Sessao Conheça o Novo Milla
	pI('../../img/br/conheca/mn_novo_on.gif');
	pI('../../img/br/conheca//mn_cores_on.gif');
	pI('../../img/br/conheca/mn_acessorios_on.gif');
	pI('../../img/br/conheca//mn_itens_on.gif');
	pI('../../img/br/conheca/mn_ficha_on.gif');
	pI('../../img/br/conheca/mn_novo_off.gif');
	pI('../../img/br/conheca//mn_cores_off.gif');
	pI('../../img/br/conheca/mn_acessorios_off.gif');
	pI('../../img/br/conheca//mn_itens_off.gif');
	pI('../../img/br/conheca/mn_ficha_off.gif');

	//Sessao Fotos
	pI('../../img/br/fotos/mn_fotos_on.gif');
	pI('../../img/br/fotos//mn_360e_on.gif');
	pI('../../img/br/fotos/mn_360i_on.gif');
	pI('../../img/br/fotos//mn_wallpaper_on.gif');
	pI('../../img/br/fotos/mn_webcards_on.gif');
	pI('../../img/br/fotos/mn_campanhas_on.gif');
	pI('../../img/br/fotos/mn_fotos_off.gif');
	pI('../../img/br/fotos//mn_360e_off.gif');
	pI('../../img/br/fotos/mn_360i_off.gif');
	pI('../../img/br/fotos//mn_wallpaper_off.gif');
	pI('../../img/br/fotos/mn_webcards_off.gif');
	pI('../../img/br/fotos/mn_campanhas_off.gif');

	//Sessao Historia
	pI('../../img/br/historia/mn_1984_on.gif');
	pI('../../img/br/historia/mn_1987_on.gif');
	pI('../../img/br/historia/mn_1990_on.gif');
	pI('../../img/br/historia/mn_1991_on.gif');
	pI('../../img/br/historia/mn_1992_on.gif');
	pI('../../img/br/historia/mn_1994_on.gif');
	pI('../../img/br/historia/mn_2001_on.gif');
	pI('../../img/br/historia/mn_2004_on.gif');
	pI('../../img/br/historia/mn_1984_off.gif');
	pI('../../img/br/historia/mn_1987_off.gif');
	pI('../../img/br/historia/mn_1990_off.gif');
	pI('../../img/br/historia/mn_1991_off.gif');
	pI('../../img/br/historia/mn_1992_off.gif');
	pI('../../img/br/historia/mn_1994_off.gif');
	pI('../../img/br/historia/mn_2001_off.gif');
	pI('../../img/br/historia/mn_2004_off.gif');
	

	//Sessao apaixonados
	pI('../../img/br/apaixonados/mn_historias_on.gif');
	pI('../../img/br/apaixonados/mn_envie_on.gif');
	pI('../../img/br/apaixonados/mn_historias_off.gif');
	pI('../../img/br/apaixonados/mn_envie_off.gif');

	
	//Sessao Opiniao
	pI('../../img/br/opiniao/mn_carro_on.gif');
	pI('../../img/br/opiniao//mn_site_on.gif');
	pI('../../img/br/opiniao/mn_imprensa_on.gif');
	pI('../../img/br/opiniao/mn_carro_off.gif');
	pI('../../img/br/opiniao/mn_site_off.gif');
	pI('../../img/br/opiniao/mn_imprensa_off.gif');

	if (nav.getSection(0) == 'opiniao') initMenuOpiniao();

}

// Instancia objetos DL do submenu
function initMenuOpiniao() {
	carroMnSupSubItensDL = new DL('carroMnSupSubItensDiv');
	siteMnSupSubItensDL = new DL('siteMnSupSubItensDiv');
}

onload=initDefault;
window.defaultStatus="Fiat Novo Mille Fire";
