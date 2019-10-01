// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 13,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(55.7753049,37.7435371), // г. Москва, 1-я улица Измайловского Зверинца, д.8.

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: []};

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var neighborhoods = [
    // Main
    {lat: 55.7753049, lng: 37.7435371, title: 'г. Москва, 1-я улица Измайловского Зверинца, д.8.', icon: 'map-pin.png'},
    ];

    var markers = [];

    function drop() {
      for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 1000);
      }
    }

    function addMarkerWithTimeout(marker, timeout) {
      window.setTimeout(function() {
        markers.push(new google.maps.Marker({
          position: new google.maps.LatLng(marker["lat"], marker["lng"]),
          map: map,
          title: marker["title"],
          // icon: {
          //   url: "img/icons/" + marker["icon"]
          // },
          animation: google.maps.Animation.DROP
        }));
      }, timeout);
    }

    drop();
  }