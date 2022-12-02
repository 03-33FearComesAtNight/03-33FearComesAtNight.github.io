function iniciarMap(){
    var coord = {lat:21.4254651 ,lng: -104.8951780};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}