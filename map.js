// map.js
var initialLocation = new naver.maps.LatLng(37.502804, 127.040618);
var map = new naver.maps.Map('map', {
    center: initialLocation,
    zoom: 17
});

var marker = new naver.maps.Marker({
    position: initialLocation,
    map: map
});
