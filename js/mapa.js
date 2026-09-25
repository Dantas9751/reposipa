const mapa = L.map("mapa", {
    doubleClickZoom: false,
    zoomControl: false
}).setView([-22.25, -42.9], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(mapa);

L.control.zoom({ position: "bottomright" }).addTo(mapa);
