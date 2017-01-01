respuesta = function(err, response) {
  if (!err) {
    //console.log(response.json.results);
    console.log(response.json.rows[0].elements[0].duration.value)
  }
}



var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBnMFqnodqpTa-rBL90dhOsBk3iEBMgGnU'
});

var miUbicacion = {lat: -33.338085, lng: -70.549881};
var paradero = {lat: -33.336886, lng: -70.545977};

googleMapsClient.distanceMatrix({
  origins: [miUbicacion],
  destinations: [paradero],
  mode: 'walking'
}, respuesta);



