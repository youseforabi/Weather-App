
// the map
function initMap() {
    let loc = { lat: 30.249406, lng: 31.361373 };
    let map = new google.maps.Map(
        document.getElementById("map"),
        { zoom: 4, center: loc }
    );
    let marker = new google.maps.Marker({ position: loc, map: map });
}


