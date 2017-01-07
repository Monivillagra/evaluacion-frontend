// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
// mapa
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: -33.45, lng:-70.6667}
  });
}
// se habilita el selector de vehiculos
$(document).ready(function(){
		$('#origen').change(function(){
  			$('#destino').removeAttr('disabled');
		});
});
$(document).ready(function(){
		$('.opcion').change(function(){
  			$('#btnBuscar').removeAttr('disabled');
		});
});
// mostrar autos al hacer click en boton buscar
function buscar(){
	document.getElementById('info-auto').style.display = 'block';}