
// the map
function initMap() {
  if (navigator.geolocation) {
    // Ask the user to enable location access
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Get the user's location
        let userLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Create the map centered around the user's location
        let map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: userLoc,
        });

        // Add a marker at the user's location
        let marker = new google.maps.Marker({
          position: userLoc,
          map: map,
        });
      },
      function (error) {
        // Handle the error if location access is denied
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Handle the case when geolocation is not supported
    console.error("Geolocation is not supported by this browser.");
  }
}
