var debug = {};

var map = L.map('map').setView([36.131, 140.241], 9); // Kasumigaura

//OSMレイヤー追加
var osm = L.tileLayer(
    'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }
);
osm.addTo(map);

var mvtSource0 = new L.TileLayer.MVTSource({
    url: "./tiles/tileBus0/{z}/{x}/{y}.pbf",
    style: function (feature) {
        var style = {};
        style.color = 'rgba(255,0,0,1)';
        style.radius = 5;
        style.selected = {
          radius: 6
        };
        return style;
    }
});
map.addLayer(mvtSource0);

var mvtSource1 = new L.TileLayer.MVTSource({
    url: "./tiles/tileBus1/{z}/{x}/{y}.pbf",
    style: function (feature) {
        var style = {};
        style.color = 'rgba(255,200,0,1)';
        style.radius = 5;
        style.selected = {
          radius: 6
        };
        return style;
    }
});
map.addLayer(mvtSource1);

var mvtSource2 = new L.TileLayer.MVTSource({
    url: "./tiles/tileBus2/{z}/{x}/{y}.pbf",
    style: function (feature) {
        var style = {};
        style.color = 'rgba(0,255,0,1)';
        style.radius = 5;
        style.selected = {
          radius: 6
        };
        return style;
    }
});
map.addLayer(mvtSource2);

//Globals that we can change later.
var fillColor = 'rgba(149,139,255,0.4)';
var strokeColor = 'rgb(20,20,20)';

//Add layer
mvtSource2.addTo(map);
mvtSource1.addTo(map);
mvtSource0.addTo(map);

L.control.scale({imperial:false}).addTo(map);
