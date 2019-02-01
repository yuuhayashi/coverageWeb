// ===================================================================
var center_lon = 140.241;   // 中心の経度（霞ヶ浦）
var center_lat = 36.131;    // 中心の緯度（霞ヶ浦）

var initZoom = 11; // ズームの初期値
var MinZoom  = 6;   // ズームの最小値（最も広い範囲）
var MaxZoom  = 17;  // ズームの最大値（最も狭い範囲）

var initPrecision = 8; // 座標表示の小数点以下の桁数の初期値
// *******************************************************************

// 表示用の view 変数の定義。
const view = new ol.View({
    center: ol.proj.fromLonLat([center_lon, center_lat]),
    zoom: initZoom,
    maxZoom: MaxZoom,
    minZoom: MinZoom
});

const ort = new ol.layer.Tile({
    source: new ol.source.OSM(),
    title: "OpenStreetMap",
    visible: true
});
/*
grayOsmLayer.on('postcompose', function(event) {
    grayscale(event.context);
});
*/

const police4z = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: "https://yuuhayashi.github.io/coverageWeb/tiles/tilePolice4z/{z}/{x}/{y}.pbf"
    }),
    title: "Police 0: 未入力",
    visible: true,
    opacity: 1,
    style: function(feature){
        return [
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({color: "#ff0000"})
                })
            })
        ];
    }
});

const police4 = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: "https://yuuhayashi.github.io/coverageWeb/tiles/tilePolice4/{z}/{x}/{y}.pbf"
    }),
    title: "Police 1: 入力済み",
    visible: true,
    opacity: 1,
    style: function(feature){
        return [
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({color: "#00ff00"})
                })
            })
        ];
    }
});

var strokestyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'rgba(53, 175, 109, 0.7)',
        width:  4
    })
});

const mapillary = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        attributions: '© Mapillary',
        format: new ol.format.MVT(),
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 22}),
        tilePixelRatio: 16,
        opacity: 0.7,
        url: 'https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'
    }),
    title: "Mapillary",
    visible: true,
    style: strokestyle
});

const map = new ol.Map({
    target: "map",
    controls: ol.control.defaults().extend([new ol.control.ScaleLine()]),
    view: view,
    layers: [ort, police4, police4z, mapillary]
});
