let map;

navigator.geolocation.getCurrentPosition(function(position) {
   let pos = {
     lat: position.coords.latitude,
     lng: position.coords.longitude
   };
   let positionUser =  Object.values(pos);
  let latitude = positionUser[0];
  let longitude = positionUser[1];
  initialize(latitude,longitude)

  })
   


function initialize(lati,longi) {
 
 console.log(longi)
 let  pyrmont = new google.maps.LatLng(lati,longi);

 map = new google.maps.Map(document.getElementById('map'), {
   center: pyrmont,
   zoom: 15
 });



let request = {
  location : center,
  radius: 500,
  types: ['restautant']

}

let service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);

}

const callback = (results, status) => {
  if(status === google.maps.places.PlacesServiceStatus.OK){
    for(i=0; i<results.length; i++){
      createMarker(results[i]);
      console.log(results[i]);
    }
  }
}

const createMarker = (place) => {
  let placeLoc = place.geometry.location;
  let market = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name
   
 });
}

const printRestaurant =(result)=>{
  let photos= result.photos;
}

