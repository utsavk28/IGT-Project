this.map = L.map("map", {
  center: [21.0, 78.0], // india coordinates
  zoom: 5,
  zoomControl: true,
  trackResize: true,
});

fetch("http://localhost:8000/boundary")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    L.geoJson(data).addTo(map);
  });

const tiles = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    maxZoom: 16,
  }
);

tiles.addTo(this.map);

// https://leaflet-extras.github.io/leaflet-providers/preview/
