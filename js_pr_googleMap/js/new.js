function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);
