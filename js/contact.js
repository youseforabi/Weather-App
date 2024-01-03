
// the map
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let userLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        let map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: userLoc,
        });

        let marker = new google.maps.Marker({
          position: userLoc,
          map: map,
        });
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          // Prompt the user to enable location access
          if (confirm("Location access is denied. Do you want to enable it?")) {
            // Redirect to browser's location settings
            window.location.href = "chrome://settings/content/location";
          } else {
            // Handle the case when the user declines to enable location access
            console.error("User denied location access.");
          }
        } else {
          // Handle other types of geolocation errors
          console.error("Error getting user location:", error);
        }
        
        // Display a message indicating location access is not available
        alert("Unable to access your location. Please enable location access in your browser settings.");
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    
    // Display a message indicating geolocation is not supported
    alert("Geolocation is not supported by your browser.");
  }
}
