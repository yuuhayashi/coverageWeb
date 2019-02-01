var cyberJ = null;     // 地理院地図用の変数

var center_lon = 136.181193333; // 中心の経度（大杉谷，宮川第三発電所）
var center_lat = 34.2329783333; // 中心の緯度（大杉谷，宮川第三発電所）

var kml_url  = "data/map_data1.kml";     // "map_data1.kml"

var initZoom = 15; // ズームの初期値
var MinZoom  = 6;   // ズームの最小値（最も広い範囲）
var MaxZoom  = 21;  // ズームの最大値（最も狭い範囲）

var initPrecision = 8; // 座標表示の小数点以下の桁数の初期値
var initOpacity = 1.0; // 不透明度の初期値
var gMaxOpacity = 1.0; // 不透明度の最大値
var gMinOpacity = 0.0; // 不透明度の最小値
//*******************************************************************                                                                                                                          

function init_map() {
    // 表示用の view 変数の定義
    var view = new ol.View({maxZoom: MaxZoom, minZoom:MinZoom});

    // cyberJ の opacity をいじるために，cyberJ という変数に入れている。
    cyberJ = new ol.layer.Tile({
        opacity: initOpacity,
        source: new ol.source.XYZ({
            attributions: [ new ol.Attribution({ html: "<a href='http://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>" }) ],
            url: "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",  projection: "EPSG:3857"
        })
    });

    // 経路の KML データ
    // v3.11.0 以降の場合は new ol.format.KML() を new ol.format.KML({ showPointNames: false }) とする。
    var kml_vector = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: kml_url,
            format: new ol.format.KML({ showPointNames: false })
        })
    });

    // -------------------------------------------------------------------
    // 地図変数 (map 変数) の定義。地理院地図を表示するように指定している
    var map = new ol.Map({
        target: document.getElementById('map_canvas'),
        layers: [cyberJ, kml_vector],
        view: view,
        renderer: ['canvas', 'dom'],
        controls: ol.control.defaults().extend([new ol.control.ScaleLine()]),
        interactions: ol.interaction.defaults()
    });

    // zoom slider の追加      
    map.addControl(new ol.control.ZoomSlider());

    // 中心の指定。view に対して指定。transform を忘れないこと。
    view.setCenter(ol.proj.transform([center_lon, center_lat], "EPSG:4326", "EPSG:3857"));

    // zoom の指定。view に対して指定する。
    view.setZoom(initZoom);

    // span opacity_control (地理院地図の不透明度) に初期値（実数）を入れる。
    document.getElementById('opacity_control').innerHTML = initOpacity.toFixed(1);

} // 初期化

// -------------------------------------------------------------------
// 地理院地図 (var cyberJ) の opacity(この場合は不透明度) を変える
function changeOpacity(opacity) {
    var newOpacity = (parseFloat(document.getElementById('opacity_control').innerHTML) + opacity).toFixed(1); // 新しい opacity の値を求める
    newOpacity = Math.min(gMaxOpacity, Math.max(gMinOpacity, newOpacity)); // 最大値と最小値の範囲を超えないように
    cyberJ.setOpacity(newOpacity); // 地理院地図の opacity の変更
    document.getElementById('opacity_control').innerHTML = newOpacity.toFixed(1); // opacity の数字の表示書き換え
}

function directSetOpacity(opacity) {
    cyberJ.setOpacity(opacity);
    document.getElementById('opacity_control').innerHTML = opacity.toFixed(1);
}

