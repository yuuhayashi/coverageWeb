var debug = {};

var map = L.map('map',{
  center: [36.131, 140.241],
  zoom: 11,
  minZoom: 6,
  maxZoom: 16,
  contextmenu: true,
  contextmenuWidth: 180,
  
    contextmenuItems: [{
        text: 'この地点を地図の中央に指定',
        callback: setCenterMap
      },
      {
        text: '取得(地図中央1km範囲)',
        callback: showLatLng
      },
      {
        text: '取得(地図中央3km範囲)',
        callback: showLatLng3
      },
      {
        text: '取得(地図中央5km範囲)',
        callback: showLatLng5
      },
      {
        text: '取得(地図中央10km範囲)',
        callback: showLatLng10
      },
      {
        text: '取得(地図中央20km範囲)',
        callback: showLatLng20
      }]
    });

    function showLatLng (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/fuel?latlng="+ e.latlng +"&km=1";
    }
    function showLatLng3 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/fuel?latlng="+ e.latlng +"&km=3";
    }
    function showLatLng5 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/fuel?latlng="+ e.latlng +"&km=5";
    }
    function showLatLng10 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/fuel?latlng="+ e.latlng +"&km=10";
    }
    function showLatLng20 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/fuel?latlng="+ e.latlng +"&km=20";
    }

    function setCenterMap (e) {
        map.panTo(e.latlng);
    }
    map.locate({setView: true, maxZoom: 16, timeout: 20000});

//OSMレイヤー追加
var osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }
);
osm.addTo(map);

var mvtSource0 = new L.TileLayer.MVTSource({
    url: "https://yuuhayashi.github.io/coverageWeb/tiles/tileFuel0/{z}/{x}/{y}.pbf",
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
    url: "https://yuuhayashi.github.io/coverageWeb/tiles/tileFuel1/{z}/{x}/{y}.pbf",
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
    url: "https://yuuhayashi.github.io/coverageWeb/tiles/tileFuel2/{z}/{x}/{y}.pbf",
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

    // MapCenterCoord
    var options = {
      position: 'bottomleft' // 'topleft', 'topright', 'bottomleft' (default) ,'bottomright'
    }
    L.control.mapCenterCoord(options).addTo(map);
