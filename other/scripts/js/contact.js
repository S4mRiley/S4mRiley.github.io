let map;

function initMap()
{
    map = new google.maps.Map(document.getElementById("map"),
    {
        center: { lat: 52.9910398, lng: -1.170996 },
        zoom: 16,
    });
}