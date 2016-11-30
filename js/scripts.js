
//Departamentos
	var arr=["Elija un departamento","AMAZONAS","ANTIOQUIA","ARAUCA","ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA","ATLÁNTICO","BOGOTÁ, D.C.","BOLÍVAR","BOYACÁ","CALDAS",
		"CAQUETÁ","CASANARE","CAUCA","CESAR","CHOCÓ","CÓRDOBA","GUAINÍA","GUAVIARE","HUILA","LA GUAJIRA","MAGDALENA","META","NARIÑO","NORTE DE SANTANDER","PUTUMAYO",
		"QUINDIO","RISARALDA","SANTANDER","SUCRE","TOLIMA","VALLE DEL CAUCA","VAUPÉS","VICHADA"]

	$.each(arr,function(val,text){
		$('#OptionDepto').append($('<option></option>').val(val).html(text));
	});
//End Departamentos

//Concesionarios
	var arr_concesionarios = ["Elija un concesionario","Jer S.A.","Réditos Empresariales S.A.","Red de Servicios de la Orinoquia y el Caribe S.A.","Red de Servicios de Occidente S.A.",
							"Superservicios de Nariño S.A.","Grupo Empresarial en Línea S.A.","Susuerte S.A.","Red Multiservicios de Colombia S.A.",
							"Alianza Empresarial del Cauca S.A.","Apuestas Unidas S. A.","Red de Servicios de Córdoba S.A.","Apuestas Nacionales de Colombia S.A.",
							"Apuestas del Sur del Departamento de la Guajira Apsurguajira S.A.","Apuestas y Servicios Ganaste S.A.S","Inverapuesta de la Guajira S.A.",
							"Sociedad Empresarial del Meta S.A.","J.J. Pita y Cía. S.A.","Apuestas América S.A.","Apuestas Ochoa S.A.","Apostadores de Risaralda S.A.",
							"Juegos y Apuestas la Perla S.A.","Empresarios de Apuestas Permanentes del Tolima Sociedad Anónima Seapto S.A.","Inversiones del Pacifico S.A.",
							"Redcolsa Red Colombiana de Servicios S.A.","Súper Servicios del Centro del Valle S.A.","Super Servicios del Valle S.A.",
							"Superservicios del Oriente del Valle S.A."]

	$.each(arr_concesionarios,function(val,text){
		$('#OptionConcesionario').append($('<option></option>').val(val).html(text));
	});
//End Concesionarios

//Tipo de documento
	var arr_tipDoc = ["Elija un tipo de comprobante","Consignación","Transferencia electronica","Recibo de caja","Otro"]
	$.each(arr_tipDoc,function(val,text){
		$('#OptionTipoc').append($('<option></option>').val(val).html(text));
	});
//End Tipo de documento

//Entidades financieras
	var arr_bancos = ["Elija una entidad Financiera","Banco de Bogotá","Banco Popular","Banco CorpBanca","Bancolombia","Citibank","Banco GNB Sudameris","BBVA Colombia","Banco de Occidente",
					"BCSC S.A.","Davivienda","Colpatria Red Multibanca","Banagrario","AV Villas","Procredit","Bancamía S.A.","WWB S.A.","Bancoomeva","Finandina",
					"Banco Falabella S.A.","Banco Pichincha S.A.","Coopcentral","Banco Santander","Corficolombiana","Banca de Inversión Bancolombia","JP Morgan",
					"BNP Paribas","ITAÚ BBA Colombia S.A.","Finamérica","Giros y Finanzas","Serfinansa","Tuya","G.M.A.C","Internacional","Coltefinanciera",
					"Leasing Corficolombiana","Leasing Bolívar","Leasing Bancolombia","Leasing Bancoldex","Financiera DANN Regional","C.A. CREDIFINANCIERA S.A. CF", 
					"C.A. CREDIFINANCIERA CF", "C.A. CREDIFINANCIERA S.A.", "C.A. CREDIFINANCIERA","Mi plata","Pagos Internacionales","Credifamilia","OICOLOMBIA ",
					"Ripley Compañía de Financiamiento S.A.","FINANCIERA JURISCOOP C.F.","Bancoldex","Findeter","Finagro","Icetex","Fonade","Fogafin",
					"Fondo Nacional del Ahorro","Fogacoop","Fondo Nacional de Garantías","Caja de Vivienda Militar y de Polícia","Cooperativa Financiera de Antioquia",
					"JFK COOPERATIVA FINANCIERA","Cooperativa Financiera Coofinep","Cooperativa Financiera Cotrafa","Cooperativa Financiera Confiar "]

	$.each(arr_bancos,function(val,text){
		$('#OptionBanco').append($('<option></option>').val(val).html(text));
	});
//End Entidades financieras

//Concepto del pago
	var arr_concepto_pago = ["Elija un concepto de pago","Subtotal de derechos de explotación","Saldo a pagar","Anticipo para el periodo siguiente","Gastos de administración",]
	$.each(arr_concepto_pago,function(val,text){
		$('#OptionConcepto').append($('<option></option>').val(val).html(text));
	});

// Grupo - Contactos
	var arr_grupo_contactos = ["Elija un grupo de clasificación","Concesionarios de Chance","Concedentes de Chance","Loteria","Otro"]

	$.each(arr_grupo_contactos,function(val,text){
		$('#option-grupo').append($('<option></option>').val(val).html(text));
	});
// End grupo - contactos
	
// Cargo OptionCargo
	var arr_cargos = ["Elija un cargo","Analista","Ascesor","Asistente","Asistente Contabilidad","Auxiliar","Contador","Coordinador","Director Contabilidad",
					"Director Técnico de Rentas","Director Tributario Departamental","Gerente","Gobernador","Jefe de rentas","Jefe Unidad de Apuestas y Control de Juegos",
					"Otro","Profesional","Profesional Especializado","Profesional Universitario","Representante legal","Representante legal - Depositario Provisional",
					"Secretaria de Hacienda","Secretario","Secretario de rentas","Secretario del Interior","Técnico","Tesorero"]

	$.each(arr_cargos,function(val,text){
		$('#OptionCargo').append($('<option></option>').val(val).html(text));
	});
// End Cargo

// Municipios
	var arr_municipios = ["Elija un municipio","PEDRAZA","SAN LUIS DE CUBARRAL","PURIFICACIÓN","SANTO TOMÁS","BOSCONIA","EL CERRITO","SANTA FÉ DE ANTIOQUIA","SOPETRÁN","REGIDOR","HOBO","EL MOLINO","CONCEPCIÓN","PUERTO COLOMBIA","SAN BERNARDO","TIMANÁ","EL PEÑOL","ALMEIDA","SAN BENITO","GUADALAJARA DE BUGA","TAURAMENA","MURINDÓ","EL TAMBO","PIAMONTE","HONDA","CUMBITARA","EL ROSARIO","LANDÁZURI","VILLAGARZÓN","PAIPA","GIGANTE","COROZAL","ROLDANILLO","YONDÓ","CÁQUEZA","NÁTAGA","SARDINATA","ENCINO","MORROA","MARIPÍ","VILLA DE SAN DIEGO DE UBATÉ","ÁBREGO","TURBO","PUERTO BOYACÁ","MARMATO","VEGACHÍ","MAGANGUÉ","MANAURE BALCÓN DEL CESAR","LLORÓ","CHACHAGÜÍ","MACARAVITA","CHAPARRAL","PUERTO CAICEDO","TURBANÁ","JAMBALÓ","VILLA RICA","MOMIL","UNIÓN PANAMERICANA","CERRO DE SAN ANTONIO","CASTILLA LA NUEVA","HERRÁN","ANORÍ","SANTA ANA","CÓRDOBA","EL PAUJÍL","CIUDAD BOLÍVAR","PONEDERA","CÓMBITA","LA MONTAÑITA","BARRANCABERMEJA","PALMAS DEL SOCORRO","CAMPOHERMOSO","LA CAPILLA","PUERTO ESCONDIDO","NILO","URUMITA","MARGARITA","SAN BERNARDO DEL VIENTO","SAN PELAYO","LA CALERA","SASAIMA","SOACHA","RIOFRÍO","MITÚ","ALEJANDRÍA","PÁCORA","PUERTO SALGAR","SAN JOSÉ DEL PALMAR","CHARTA","HISPANIA","REPELÓN","EL PEÑÓN","TIBACUY","NUQUÍ","RIOHACHA","SANTACRUZ","LÍBANO","PELAYA","TAMALAMEQUE","TARQUI","REMOLINO","PAPUNAUA","CERINZA","NIMAIMA","YACOPÍ","IPIALES","SANTA ROSA DE OSOS","CURILLO","ATRATO","CIRCASIA","TORO","BELÉN","MACANAL","PAICOL","PUERTO LLERAS","ARANZAZU","SILVANIA","SOCHA","CHIMICHAGUA","DABEIBA","TIBANÁ","MACHETÁ","SALADOBLANCO","SALENTO","SIBUNDOY","TORIBÍO","NEIVA","CAMPOALEGRE","ULLOA","TENZA","LOS ANDES","FIRAVITOBA","TUNUNGUÁ","CARTAGENA DEL CHAIRÁ","CAIMITO","GUACARÍ","ANGELÓPOLIS","EL TARRA","DAGUA","ARJONA","TOTA","PIENDAMÓ","PUERTO TEJADA","SUÁREZ","EL RETÉN","LÉRIDA","CACHIPAY","SAN JUAN DE RIOSECO","CALIMA","ARGELIA","GAMA","JERUSALÉN","OROCUÉ","CAREPA","CORRALES","EL DONCELLO","ANOLAIMA","SIMIJACA","VILLAVIEJA","ORTEGA","CARTAGENA DE INDIAS","EL CARMEN DE BOLÍVAR","FOSCA","SAN CAYETANO","SAN FERNANDO","CHITA","CALARCÁ","ARBOLETES","SAN ANDRÉS DE CUERQUÍA","SAN ESTANISLAO","BARBACOAS","FLORIDABLANCA","MATANZA","PACOA","SUBACHOQUE","MONTERREY","PIOJÓ","SAN JOSÉ DE URÉ","LETICIA","ENTRERRÍOS","LIBORINA","EL ESPINO","SAN GIL","SANTA CATALINA","JORDÁN","YOLOMBÓ","BARANOA","LURUACO","MARQUETALIA","ZAPAYÁN","FUNES","ACHÍ","CUÍTIVA","OTANCHE","CÉRTEGUI","TÁMARA","SALGAR","GACHANTIVÁ","FRANCISCO PIZARRO","MARINILLA","MONIQUIRÁ","EL BANCO","CHITAGÁ","PALMITO","LA UVITA","EL PASO","PUERTO GAITÁN","VILLANUEVA","CRAVO NORTE","SATIVANORTE","BARICHARA","ATACO","SAN JOSÉ","CARMEN DE APICALÁ","ANDALUCÍA","EL CAIRO","MOCOA","SAN SEBASTIÁN DE BUENAVISTA","GÉNOVA","PURÍSIMA DE LA CONCEPCIÓN","PITALITO","ARBOLEDAS","PIEDECUESTA","MONGUÍ","MARSELLA","PUERTO ALEGRÍA","FRONTINO","TUCHÍN","LA LLANADA","CÁCHIRA","FUNDACIÓN","PUERTO CONCORDIA","SAN ANDRÉS DE TUMACO","SILOS","SAN JUAN DE URABÁ","SAN LUIS","BUENAVISTA","MOÑITOS","TÚQUERRES","VIJES","ABRIAQUÍ","PANQUEBA","FÓMEQUE","URRAO","CHIVOR","FLORENCIA","SOLANO","SUESCA","TOCANCIPÁ","PIVIJAY","JENESANO","CAPARRAPÍ","SANDONÁ","SATIVASUR","NORCASIA","LA PAZ","ANCUYÁ","VALLE DE SAN JUAN","EL GUAMO","BALBOA","EL LITORAL DEL SAN JUAN","SAN DIEGO","SAMPUÉS","SAN MARCOS","PALOCABILDO","FORTUL","BUENOS AIRES","TENERIFE","SÁCAMA","LA PRIMAVERA","MACEO","GUATEQUE","ÚMBITA","LA DORADA","CUMARAL","GUATAPÉ","PACHAVITA","SOCOTÁ","AGUSTÍN CODAZZI","GUTIÉRREZ","TENJO","LEBRIJA","FILADELFIA","LORICA","CARCASÍ","SEVILLA","MANAURE","AGUADA","MALAMBO","VILLAPINZÓN","LA PINTADA","RIVERA","CURITÍ","SIMACOTA","EL CARMEN DE ATRATO","EL PLAYÓN","CALDAS","MAICAO","VILLA CARO","BELÉN DE UMBRÍA","EL ROBLE","EBÉJICO","CUCUNUBÁ","CAMPO DE LA CRUZ","BOAVITA","PAYA","EL DORADO","CONTRATACIÓN","EL COLEGIO","SIACHOQUE","ALGECIRAS","SANTIAGO DE TOLÚ","SAN JUAN NEPOMUCENO","CARMEN DE CARUPA","FÚQUENE","BUESACO","SAN VICENTE DE CHUCURÍ","MUTATÁ","NECOCLÍ","VIGÍA DEL FUERTE","BARRANCAS","SAN ANTONIO","GÜICÁN","MANZANARES","VERGARA","TIBÚ","TUTA","LA APARTADA","URIBE","PUERTO LÓPEZ","SAMANÁ","PALERMO","HELICONIA","PUERTO BERRÍO","PENSILVANIA","DIBULLA","RETIRO","PAUNA","ZETAQUIRA","VALLEDUPAR","UNGUÍA","MONTENEGRO","RONDÓN","GIRARDOT","SITIONUEVO","YACUANQUER","CONFINES","SAN CRISTÓBAL","TURBACO","VILLETA","CALIFORNIA","GIRÓN","GALERAS","VENADILLO","PUERTO GUZMÁN","USIACURÍ","PÁEZ","LA MERCED","EL COPEY","BARRANCA DE UPÍA","ALDANA","MELGAR","TOGÜÍ","RESTREPO","ZAPATOCA","HATO COROZAL","GUADALUPE","CURUMANÍ","MAGÜÍ","TOTORÓ","BOJACÁ","PANDI","CLEMENCIA","MILÁN","SAN CARLOS DE GUAROA","OCAMONTE","TUBARÁ","SORACÁ","PARATEBUENO","TAUSA","SAN LUIS DE PALENQUE","SABANALARGA","SUAN","PUERTO PARRA","ABEJORRAL","BELMIRA","JUAN DE ACOSTA","VENTAQUEMADA","MORELIA","GUADUAS","SAN MIGUEL","LA ESTRELLA","TESALIA","TANGUA","SANTA ROSA DE CABAL","HATO","PLANADAS","EL ÁGUILA","PALMAR DE VARELA","SILVIA","EL CARMEN DE CHUCURÍ","ACANDÍ","MOLAGAVITA","AGUAZUL","TÓPAGA","ALBANIA","ALTO BAUDÓ","MEDIO BAUDÓ","EL ZULIA","AMBALEMA","EL CARMEN","CHARALÁ","SARAVENA","MORICHAL","SAN JACINTO DEL CAUCA","GUATAQUÍ","MÁLAGA","PIEDRAS","YUMBO","ARAUCA","TUTAZÁ","GUAITARILLA","CIMITARRA","OICATÁ","TADÓ","BUSBANZÁ","ISTMINA","LABATECA","SAN BENITO ABAD","BELALCÁZAR","MARULANDA","GUAYABETAL","BETANIA","SALDAÑA","FLORIDA","TARAIRA","SOPLAVIENTO","SOLITA","SAPUYES","GRAMALOTE","SOPÓ","SABANAS DE SAN ÁNGEL","FILANDIA","PRADO","ALCALÁ","MANÍ","ANSERMA","RÍO DE ORO","SAN ANTERO","PALMAR","SANTA BÁRBARA","SOGAMOSO","CHÍA","ARIGUANÍ","VÉLEZ","SAN FELIPE","BOLÍVAR","PUERTO LIBERTADOR","PINCHOTE","SAN PEDRO","ROVIRA","MIRITÍ - PARANÁ","BURITICÁ","SANTA ROSA DEL SUR","GUÁTICA","ARMERO GUAYABAL","SANTA ROSALÍA","COCORNÁ","RAGONVALIA","LA CRUZ","CÁCOTA","GUALMATÁN","FLORIÁN","PÁRAMO","CHALÁN","CARTAGO","SAN RAFAEL","TARSO","ARROYOHONDO","CALOTO","ARMENIA","CALAMAR","TALAIGUA NUEVO","CIÉNEGA","VALLE DEL GUAMUEZ","ANAPOIMA","DONMATÍAS","PUEBLO NUEVO","TOPAIPÍ","NUEVA GRANADA","SAN JOSÉ DE MIRANDA","ANDES","CAÑASGORDAS","SAN PABLO DE BORBUR","SAN JOAQUÍN","CHÁMEZA","BETULIA","REMEDIOS","SAN LUIS DE GACENO","CIÉNAGA DE ORO","EL CALVARIO","ANZOÁTEGUI","TULUÁ","SAMACÁ","PAILITAS","PASCA","VIOTÁ","PIJIÑO DEL CARMEN","PEREIRA","QUINCHÍA","SAN ONOFRE","NOBSA","SAN MIGUEL DE SEMA","PULÍ","ZIPACÓN","LA UNIÓN","RIONEGRO","TIMBIQUÍ","COELLO","SAN VICENTE FERRER","MARÍA LA BAJA","TASCO","PACHO","PLATO","RONCESVALLES","PUERTO NARE","CABUYARO","SAN JUAN DE ARAMA","DOSQUEBRADAS","ICONONZO","FUSAGASUGÁ","LA PEÑA","MADRID","QUIBDÓ","VETAS","ENVIGADO","SAN ANDRÉS DE SOTAVENTO","MEDIO SAN JUAN","GIRALDO","ITAGÜÍ","CONCORDIA","SAN PABLO","LA JAGUA DE IBIRICO","ÚTICA","ISNOS","LA CELIA","SAN CARLOS","ALTOS DEL ROSARIO","BERBEO","DUITAMA","CHIMÁ","CHIMA","NARIÑO","SIMITÍ","IZA","SOCORRO","SUAITA","CAMPAMENTO","VIRACACHÁ","PANA PANA","URAMITA","SAN JACINTO","COTORRA","GACHANCIPÁ","GUATAVITA","YOTOCO","PUEBLOVIEJO","CUCUTILLA","CORINTO","MESETAS","LA BELLEZA","SAN JOSÉ DEL GUAVIARE","BOGOTÁ, D.C.","VILLA DE LEYVA","LA VIRGINIA","NATAGAIMA","NOROSÍ","GÜEPSA","TARAPACÁ","EL RETORNO","PALESTINA","LA SIERRA","CHOACHÍ","EL PIÑÓN","CAICEDONIA","LA CEJA","EL TABLÓN DE GÓMEZ","CHINÁCOTA","OCAÑA","SANTA HELENA DEL OPÓN","ILES","CASABIANCA","EL BAGRE","LA ARGENTINA","FLANDES","CISNEROS","GÓMEZ PLATA","SAN MARTÍN DE LOBA","TIBASOSA","EL ROSAL","LOS SANTOS","COYAIMA","PAZ DE ARIPORO","CARURÚ","GUASCA","LA FLORIDA","BUGALAGRANDE","LA GUADALUPE","BETÉITIVA","FUNZA","TURMEQUÉ","ARBELÁEZ","GACHALÁ","ALVARADO","PRADERA","NUNCHÍA","SANTA LUCÍA","CICUCO","SUCRE","LA TOLA","SABANA DE TORRES","DOLORES","GARAGOA","SAN SEBASTIÁN","GARZÓN","HATONUEVO","GUACHUCAL","FREDONIA","NECHÍ","AYAPEL","LENGUAZAQUE","PITAL","TERUEL","SANTA MARTA","EL DOVIO","QUEBRADANEGRA","TOLÚ VIEJO","JAMUNDÍ","SAN MATEO","MANIZALES","SAN ALBERTO","QUIPILE","AGRADO","SAN JERÓNIMO","SABANAGRANDE","RICAURTE","PAMPLONITA","PIJAO","GUACA","LOURDES","PURACÉ","SANTIAGO","TOLEDO","PESCA","VILLA DEL ROSARIO","COLÓN","TRUJILLO","RÍO QUITO","GINEBRA","ITUANGO","JARDÍN","MOTAVITA","FALAN","MURILLO","PUERTO ARICA","SAN VICENTE DEL CAGUÁN","LA GLORIA","LOS CÓRDOBAS","YAGUARÁ","OLAYA HERRERA","ENCISO","SUTAMARCHÁN","CONDOTO","GUAMAL","PAJARITO","CIÉNAGA","PUERRES","SAN CALIXTO","RÍO VIEJO","SANTANDER DE QUILICHAO","ACACÍAS","MALLAMA","SAN LUIS DE SINCÉ","SANTA ISABEL","SALAMINA","PLANETA RICA","GUACAMAYAS","LABRANZAGRANDE","CANALETE","BUENAVENTURA","EL SANTUARIO","PINILLOS","CHINCHINÁ","ÍQUIRA","IMUÉS","QUIMBAYA","VILLAHERMOSA","EL COCUY","LINARES","CARAMANTA","CHIVATÁ","SANTA MARÍA","CHIPAQUE","PROVIDENCIA","VITERBO","ARACATACA","CARACOLÍ","SAN MARTÍN","FUENTE DE ORO","MAPIRIPÁN","CUBARÁ","COGUA","UBAQUE","GALÁN","SONSÓN","TIPACOQUE","POPAYÁN","BAJO BAUDÓ","FRESNO","VILLARRICA","RECETOR","QUÍPAMA","TIMBÍO","SANTO DOMINGO","BARRANCO DE LOBA","RÁQUIRA","AGUA DE DIOS","CABRERA","MEDINA","MOSQUERA","CONSACÁ","MOGOTES","SUTATENZA","LA VEGA","TENA","SAN JUAN DEL CESAR","COLOSO","LA CHORRERA","APARTADÓ","LA MESA","SAN AGUSTÍN","VALENCIA","ALBÁN","CAPITANEJO","MONTEBELLO","HATILLO DE LOBA","CAJICÁ","TABIO","PUERTO ASÍS","EL CARMEN DE VIBORAL","SEGOVIA","MAHATES","TIQUISIO","CHIRIGUANÁ","PUEBLO BELLO","MAJAGUAL","ARAUQUITA","MONTECRISTO","MORALES","LEIVA","PAMPLONA","GUAPOTÁ","SINCELEJO","YARUMAL","MANATÍ","AGUADAS","RÍO IRÓ","OIBA","CAICEDO","SOTAQUIRÁ","SUTATAUSA","BAGADÓ","JURADÓ","CONVENCIÓN","TONA","RIOSUCIO","BARAYA","PUPIALES","PUEBLO RICO","ONZAGA","ZARAGOZA","SIBATÉ","URIBIA","OVEJAS","LA CUMBRE","ALMAGUER","LOS PATIOS","CUNDAY","PORE","PAZ DE RÍO","CHAGUANÍ","ALTAMIRA","SAN ROQUE","ZAMBRANO","SAN JOSÉ DEL FRAGUA","MERCADERES","CHINÚ","TIERRALTA","SESQUILÉ","SANTA BÁRBARA DE PINTO","PUERTO NARIÑO","ANGOSTURA","ANZÁ","BRICEÑO","SAN JOSÉ DE LA MONTAÑA","VALPARAÍSO","NUEVO COLÓN","NEIRA","COROMORO","LA PALMA","SAN JUANITO","TÁMESIS","CHITARAQUE","SANTANA","ROSAS","MIRANDA","MONGUA","SAN JOSÉ DE PARE","CHOCONTÁ","SALAZAR","APÍA","PUERTO RONDÓN","VILLAMARÍA","GUACHENÉ","BAHÍA SOLANO","BOCHALEMA","TEORAMA","VALLE DE SAN JOSÉ","ALPUJARRA","SAN EDUARDO","JESÚS MARÍA","SOATÁ","ANSERMANUEVO","ASTREA","MONTERÍA","CHINAVITA","VILLAGÓMEZ","LOS PALMITOS","MEDELLÍN","SANTA SOFÍA","ORITO","CUMARIBO","PUEBLORRICO","TOCAIMA","SAN SEBASTIÁN DE MARIQUITA","QUETAME","TIBIRITA","EL CHARCO","POTOSÍ","MAPIRIPANA","PEQUE","CEPITÁ","IBAGUÉ","CAJAMARCA","GUARNE","BELTRÁN","UNE","ZIPAQUIRÁ","CUMBAL","OSPINA","EL ENCANTO","BELLO","YALÍ","BELÉN DE LOS ANDAQUÍES","GACHETÁ","SIPÍ","LA PLATA","EL GUACAMAYO","COVEÑAS","PALMIRA","YAVARATÉ","AMAGÁ","SABANETA","VALDIVIA","COPER","CHÍQUIZA","CONTADERO","TELLO","POLICARPA","COPACABANA","CANDELARIA","ARCABUCO","SUAZA","MISTRATÓ","PUERTO LEGUÍZAMO","BARBOSA","VENECIA","CANTAGALLO","CHIQUINQUIRÁ","FACATATIVÁ","PUERTO CARREÑO","CAUCASIA","LEJANÍAS","BUCARAMANGA","GÁMBITA","INÍRIDA","CALDONO","GAMARRA","BOJAYÁ","COLOMBIA","LA JAGUA DEL PILAR","SAN PEDRO DE CARTAGO","LA ESPERANZA","PEÑOL","ELÍAS","PUENTE NACIONAL","CARMEN DEL DARIÉN","SAN FRANCISCO","CERETÉ","MONTELÍBANO","SORA","GUAPÍ","LA PLAYA","ARATOCA","SAN JUAN DE BETULIA","TITIRIBÍ","BOYACÁ","GUACHETÁ","SURATÁ","SAN PEDRO DE URABÁ","COTA","OPORAPA","COVARACHÍA","TAMINANGO","PUERTO WILCHES","BARRANCO MINAS","TINJACÁ","CAJIBÍO","INZÁ","APULO","ACEVEDO","GRANADA","LA MACARENA","SOMONDOCO","CUASPÚD","ROBERTO PAYÁN","LA PEDRERA","OLAYA","ZONA BANANERA","VISTAHERMOSA","ZARZAL","GALAPA","SANTA ROSA","GUARANDA","GÁMEZA","UBALÁ","PASTO","RIOBLANCO","OBANDO","CACAHUAL","SANTA ROSA DE VITERBO","BECERRIL","JUNÍN","BARRANQUILLA","PATÍA","BITUIMA","MEDIO ATRATO","MUTISCUA","PUERTO SANTANDER","GUAVATÁ","VICTORIA","LÓPEZ DE MICAY","HERVEO","VERSALLES","CAROLINA","FONSECA","SAMANIEGO","CHIPATÁ","PUERTO TRIUNFO","RAMIRIQUÍ","AIPE","DURANIA","LA TEBAIDA","SAN ANDRÉS","GIRARDOTA","TOCA","CÚCUTA","CÁCERES","AQUITANIA","AGUACHICA","VIANÍ","CHIVOLO","BUCARASICA","YOPAL","TRINIDAD","AMALFI","PISBA","EL CASTILLO","SANTUARIO","GUAMO","PAIME","SAN LORENZO","PADILLA","SAN ZENÓN","ARBOLEDA","TAME","CHISCAS","MUZO","SUSACÓN","NEMOCÓN","SAN PEDRO DE LOS MILAGROS","SUPÍA","SOTARA","SUPATÁ","DISTRACCIÓN","SAHAGÚN","MANTA","HACARÍ","JERICÓ","POLONUEVO","MOMPÓS","CUCAITA","LA SALINA"]
	$.each(arr_municipios,function(val,text){
		$('#OptionMunicipio').append($('<option></option>').val(val).html(text));
	});
// End Municipios



// Evento botones para llamar formularios
	$(document).ready(function(){
	    $('#btn-de').click(function(){
	        $('#div-de').removeClass('hidden').addClass('show');
	    });
	});
	
	$(document).ready(function(){
	    $('#btn-pago').click(function(){
	        $('#div-pago').removeClass('hidden').addClass('show');
	    });
	});
	
	$(document).ready(function(){
		$('#btn-contrato').click(function(){
			$('#div-contrato').removeClass('hidden').addClass('show');
		});
	});

	$(document).ready(function(){
		$('#btn-pc').click(function(){
			$('#div-premio_caduco').removeClass('hidden').addClass('show');
		});
	});

	$(document).ready(function(){
		$('#btn-contactos').click(function(){
			$('#div-contactos').removeClass('hidden').addClass('show');
		});
	});

// End Evento botones para llamar formularios

// Evento hidden clase= true
	$(document).ready(function(){
		$('#btn-save-pago').click(function(){
			alert('Entro');
			$('#div-pago').remove();
		});
	});
// End Evento hidden clase= true

function mensaje(){
	alert('Mensaje de alerta');
	$('#div-contrato').remove();
};

$(document).ready(function(){
	$('#btn-prueba').click(function(){
		mensaje();
	});
});

$(document).ready(function(){
	$('#btn-contrato-canc').click(function(){
		mensaje();
	});
});


$(document).ready(function(){
	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth()+1; //hoy es 0!
	var yyyy = hoy.getFullYear();

	dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves",
	 "Viernes", "Sabado"); 
	
	var mes;
	switch(mm){
		case 1:
			mes ="enero";
			break;
		case 2:
			mes ="febrero";
			break;
		case 3:
			mes ="marzo";
			break;
		case 4:
			mes ="abril";
			break;
		case 5:
			mes ="mayo";
			break;
		case 6:
			mes ="junio";
			break;
		case 7:
			mes ="junio";
			break;
		case 8:
			mes ="agosto";
			break;
		case 9:
			mes ="septiembre";
			break;
		case 10:
			mes ="octubre";
			break;
		case 11:
			mes ="noviembre";
			break;
		case 12:
			mes ="diciembre";
			break;
	}

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 
	hoy= (dias[hoy.getDay()]) + ' ' + dd + ' de ' + mes +' de '+yyyy;
	$('#fecha-hora').text(hoy);

});

// data-toggle="tooltip"
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();   
	});
// End data-toggle="tooltip"


// Eventos botones-cancelar btn-canc-
	$(document).ready(function(){
		$('#btn-canc-cde').click(function(){
			$('#div-de').removeClass('show').addClass('hidden');
		});
	});
	$(document).ready(function(){
		$('#btn-canc-cpago').click(function(){
			$('#div-pago').removeClass('show').addClass('hidden');
		});
	});
// End Eventos botones-cancelar


// Auntenticación Login Password
	$(document).ready(function(){
		$('#btn-login').click(function(){
			var user = "lrivera";
			var password = "st123";
			var get_user= $('#txt-user').val();
			var get_password= $('#txt-password').val();
			var vacio = "";

			if (get_user === user && get_password === password){
				$('.dropdown').removeClass('hidden');
				$('#dropdown-unlogin').addClass('hidden');
				$('#dropdown-login').removeClass('hidden');	

				$('#n-user').text("Usuario: "+user);

				$('#Modal_login').modal('show');

			}else if(get_user == vacio && get_password == vacio){
				$('#alert-ulogin').removeClass('hidden');
				$('#txt-user').addClass('alert-danger');
				$('#txt-password').addClass('alert-danger');

			}else if(get_user !== user || get_password !== password){
				$('#alert-ulogin').removeClass('hidden');
				$('#txt-user').addClass('alert-danger');
				$('#txt-password').addClass('alert-danger');
			};
		});
	});


	$(document).ready(function(){
		$('#txt-user').on('click',function(){
			$('#txt-user').removeClass('alert-danger');
			$('#alert-ulogin').addClass('hidden');
		})
	});

	$(document).ready(function(){
		$('#txt-user').focusout(function(){
			if ($('#txt-user').val() == "") {
				$('#txt-user').addClass('alert-danger');
			}else{
				$('#txt-user').removeClass('alert-danger');
			};
		});
	});

	$(document).ready(function(){
		$('#txt-password').on('click',function(){
			$('#txt-password').removeClass('alert-danger');
		})
	});

	$(document).ready(function(){
		$('#txt-password').focusout(function(){
			$('#alert-ulogin').addClass('hidden');
			if ($('#txt-password').val() == "") {
				$('#txt-password').addClass('alert-danger');
			}else{
				$('#txt-password').removeClass('alert-danger');
			};
		});
	});


// End Auntenticación Login Password

	
