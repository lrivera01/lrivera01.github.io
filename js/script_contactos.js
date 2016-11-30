
// Tipo de vía
	var arr_tipovia = ["","Autopista","Avenida Calle","Avenida Carrera","Avenida","Bulevard","Calle","Carrera","Cicular","Diagonal","Kilómetro","Pasaje","Paseo","Peatonal","Transversal","Troncal","Variante","Vía"]

	$.each(arr_tipovia,function(val,text){
		$('#tipovia').append($('<option></option>').val(val).html(text));
	});
// End Tipo de vía

// Letra N° 1
	var arr_letra1 = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	$.each(arr_letra1,function(val,text){
		$('#letra1').append($('<option></option>').val(val).html(text));
	});
// End Letra N° 1

// Letra N° 2
	$.each(arr_letra1,function(val,text){
		$('#letra2').append($('<option></option>').val(val).html(text));
	});
// End Letra N° 2

// Orientación 1
	var arr_orientacion1 = ["","SUR","ESTE","NORTE","OESTE"]
	$.each(arr_orientacion1,function(val,text){
		$('#orientacion1').append($('<option></option>').val(val).html(text));
	});
// End Orientación 1

// Letra 3
	$.each(arr_letra1,function(val,text){
		$('#letra3').append($('<option></option>').val(val).html(text));
	});
// Letra 3

// Orientación 2
	$.each(arr_orientacion1,function(val,text){
		$('#orientacion2').append($('<option></option>').val(val).html(text));
	});
// End Orientación 2

// Tipo Complemento
	var arr_Tipo_complemento = ["","Adelante","Administración","Aeropuerto","Agencia","Agrupación","Al Lado","Apartamento",
	"Área","Atrás","Autopista","Avenida","Bloque","Bodega","Boulevard","Camino","Carretera","Casa","Caserio","Cédula","Centro comercial","Ciudadela",
	"Conjunto residencial","Conjunto","Consultorio","Corregimiento","Depósito","Edificio","Entrada","Esquina","Etapa","Finca","Garaje","Glorieta",
	"Hacienda","Hangar","Inspeccion de policía","Inspección Departamental","Inspección Municipial","Interior","Kilómetro","Local","Lote","Manzana",
	"Mezanine","Módulo","Oficina","Paraje","Parcela","Pasaje","Paseo","Penthouse","Piso","Predio","Puente","Puesto","Salón Comunal","Sector","Semi Sótano",
	"Solar","Suite","Super manzana","Terminal","Terraza","Torre","Unidad","Unidad Residencial","Urbanización","Variante","Vereda","Vía","Zona Franca","Zona"]

	$.each(arr_Tipo_complemento,function(val,text){
		$('#tipo_complemento').append($('<option></option>').val(val).html(text));
	});

// End Tipo Complemento

// Dirección completa #direccion
	// btn X
	$(document).ready(function(){
		$('#btn-direccion').click(function(){
			$('#direccion').val('');
		});
	});
// End Dirección completa #direccion

// Btn - Agregar
	var direccionf;

	$(document).ready(function(){
		$('#btn-add').click(function(){
			var item1 = $('#tipovia option:selected').text();
			var item2 = $('#n1').val();
			var item3 = $('#letra1 option:selected').text();
			var item4 = $('#bis option:selected').text();
			var item5 = $('#letra2 option:selected').text();
			var item6 = $('#orientacion1 option:selected').text();
			var item7 = $('#numero2').val();
			var item8 = $('#letra3 option:selected').text();
			var item9 = $('#numero4').val();
			var item10 = $('#orientacion2 option:selected').text();
			var item11 = $('#tipo_complemento option:selected').text();
			var item12 = $('#numero5').val();
			var direccion;
			var vacio ="";

			if(item1 == vacio){
				$('#alert-requerid').removeClass('hidden').addClass('show');
				$('#tipovia').addClass('alert-danger');
			}else{
				direccion = item1;
				$('#direccion').val(direccion);
			};

			if(item2 == vacio){
				$('#alert-requerid').removeClass('hidden').addClass('show');
				$('#n1').addClass('alert-danger');
			}else{
				direccion=direccion+" "+item2;
				$('#direccion').val(direccion);	
			};

			if (item3 !== vacio) {
				direccion=direccion+" "+item3;
				$('#direccion').val(direccion);	
			};

			if (item4 !== vacio) {
				direccion=direccion+" "+item4;
				$('#direccion').val(direccion);	
			};			

			if (item5 !== vacio) {
				direccion=direccion+" "+item5;
				$('#direccion').val(direccion);	
			};

			if (item6 !== vacio) {
				direccion=direccion+" "+item6;
				$('#direccion').val(direccion);	
			};

			if(item7 == vacio){
				$('#alert-requerid').removeClass('hidden').addClass('show');
				$('#numero2').addClass('alert-danger');
			}else{
				direccion=direccion+" # "+item7;
				$('#direccion').val(direccion);	
			};

			if (item8 !== vacio) {
				direccion=direccion+" "+item8;
				$('#direccion').val(direccion);	
			};

			if(item9 == vacio){
				$('#alert-requerid').removeClass('hidden').addClass('show');
				$('#numero4').addClass('alert-danger');
			}else{
				direccion=direccion+" - "+item9;
				$('#direccion').val(direccion);	
			};

			if (item10 !== vacio) {
				direccion=direccion+" "+item10;
				$('#direccion').val(direccion);	
			};

			if (item11 !== vacio) {
				direccion=direccion+" "+item11;
				$('#direccion').val(direccion);	
			};

			if (item12 !== vacio) {
				direccion=direccion+" "+item12;
				$('#direccion').val(direccion);	
			};			

			direccionf=direccion;
		});
	});

	$(document).ready(function() {
	    $('#tipovia').on('click',function(){
	        $(this).removeClass('alert-danger');
	        $('#alert-requerid').removeClass('show').addClass('hidden');
	    });
	    $('#n1').on('focusout',function(){
	    	$(this).removeClass('alert-danger');
	    	$('#alert-requerid').removeClass('show').addClass('hidden');
	    });
	    $('#numero2').on('focusout',function(){
	    	$(this).removeClass('alert-danger');
	    	$('#alert-requerid').removeClass('show').addClass('hidden');
	    });
	    $('#numero4').on('focusout',function(){
	    	$(this).removeClass('alert-danger');
	    	$('#alert-requerid').removeClass('show').addClass('hidden');
	    });
	});  

// End Btn - Agregar

// Btn - envio dirección final
	$(document).ready(function(){
		$('#envio').click(function(){
			$('#direccion_principal').val(direccionf);
			$('#myModalAddress').modal('hide');
		});
	});
// End  Btn - envio dirección final


// data-toggle="tooltip"
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();   
	});
// End data-toggle="tooltip"


$(document).ready(function(){
	$('#modal_dire').click(function(){
		$('#myModalAddress').modal('show');
	});
});


$(document).ready(function(){
	$('#btn_save_contactos').on("click",function(){
		alert('entro');
		$('#div-contactos').hide();
		alert('Div oculto');
	});
});