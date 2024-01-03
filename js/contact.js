
// the map
let map, infoWindow, geocoder, marker;

function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.397, lng: 31.644 },
    zoom: 6,
 });
 infoWindow = new google.maps.InfoWindow();
 geocoder = new google.maps.Geocoder();

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);

        marker = new google.maps.Marker({ position: pos, map: map });

      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
 } else {
    handleLocationError(false, infoWindow, map.getCenter());
 }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
 infoWindow.setPosition(pos);
 infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
 );
 infoWindow.open(map);
}
