# coverageWeb
OpenStreetMap coverage in japan Web server
このリポジトリは OpenStreetMapの日本でのPOI別マッピング状況を示すデータです。
 [http://surveyor.mydns.jp/coverage/](http://surveyor.mydns.jp/coverage/)
 
----------
 
# Webサイト [POI別マッピング状況](https://yuuhayashi.github.io/coverageWeb) について

 * 本家サイトは[http://surveyor.mydns.jp/coverage/](http://surveyor.mydns.jp/coverage/)ですが、`GitHub Pages`でも見ることができます。  
[GitHub版](https://yuuhayashi.github.io/coverageWeb)のほうがおすすめです。

 ![index](https://github.com/yuuhayashi/coverageWeb/raw/master/wiki/img/index.png)

![webpage](https://github.com/yuuhayashi/coverageWeb/raw/master/wiki/img/Screenshot.png)

* 国土数値情報の個々のデータに対してマッピング済みかどうかを色分けして示す Webマップ

* マッピング済みかどうかを色分けしたWebマップの背景に'Mapillary'ルートを表示したもの

* 都道府県別のマッピング率

* PostGIS-table へのアクセス方法

* 集計対象にした OSM tag のリストと スコアリングの簡単な説明


# Contents

[国土交通省国土政策局「国土数値情報」](http://nlftp.mlit.go.jp/ksj/gmlold/index.html)をもとにhayashiが編集・加工したものです。

* 国土交通省国土政策局「国土数値情報」の各POIの位置情報に対して、OpenStreetMapに対応するPOIが存在するかどうかを調べたものです。
* 調査結果はCSVファイルとして出力されます。
* 「国土数値情報」に対するOpenStreetMapのマッピング率を集計して出力しています。（全国／都道府県別）
* データは定期的に更新されます。更新ごとにブランチを作成して過去のマッピング率を記録しておきます。

| 国土数値情報 | OsmTag |
| ----------- | ---------- |
| バス停データ | `highway=bus_stop`<br/>`public_transport=platform` and `bus=yes` |
| 燃料給油所データ;平成２７年版 | `amenity=fuel` |
| 郵便局データ;平成２５年度版 | `amenity = postoffice` |
| 警察署データ（平成24年:2012）<br/>2:警察署<br/>4:交番<br/>5:駐在所<br/>6:派出所 | `amenity = police` |


## フォルダ構成

```
yuuhayashi/osmCoverageWeb
┃
┗━ /coverage
　　　┃
　　　┣━ /GML_BUSSTOP
　　　┃
　　　┣━ /GML_FUEL
　　　┃
　　　┣━ /GML_POLICE
　　　┃
　　　┣━ /GML_POSTOFFICE
　　　┃
　　　┗━ /tiles　　　　　　　　　　　　　// ベクタタイル
　　　　　　┣━ 　　　各POI ＆ レベル別　　　　　　　　　　
　　　　　　┣━ 　　　　　　　０:未マッピング  １:準マッピング済み 2:マッピング済み
　　　　　　┗━ 
```

```
yuuhayashi/osmCoverageWeb
┗━ /coverage
　　　┗━ /GML_*
　　　　　　┣━ P07-15.removed.json.txt   // 廃止データの記録
　　　　　　┣━ coverage.*.csv       　　　// 都道府県別のマッピング率(CSV形式)
　　　　　　┣━ coverage.*.json      　　　// 都道府県別のマッピング率(JSON形式)
　　　　　　┣━ pbfDate.json         　　　// データ日付
　　　　　　┗━ t_*.csv              　　　// 成果物データテーブル
```

## How to build - コンテンツの作成方法

ここでは、これらのコンテンツの作成（生成？）方法の概略を簡単に説明します。  

1. 国土数値情報から目的の`GMLデータ`をダウンロードする

1. ダウンロードした`GMLデータ`の中の XML形式のデータを *ローカルデータベース(HSQLDB)*にインポートする

1. `geofabrik`のサイトから[japan-latest.osm.pbf](http://download.geofabrik.de/asia/japan-latest.osm.pbf)をダウンロード

1. `japan-latest.osm.pbf`を `osm2pgsql` を使って `PostGIS` にインポートする

1. [osmCoverage(自作コマンド)](http://surveyor.mydns.jp/gitbucket/git/yuu/osmCoverage.git)を使って、`GMLデータ`と`japan-latest.osm`とを比較・加工して`PostGIS-GMLデータ`に**マッピング状況**を付加する

1. `tippecanoe`と`mbtiles`を使って、加工された`PostGIS-GMLデータ`から**ベクタタイル**を作成する

1. 生成された**ベクタタイル**と**統計ファイル**を`GitHub-yuuhayashi/osmCoverageWeb`に push する

![処理概要](https://github.com/yuuhayashi/coverageWeb/blob/master/wiki/img/activity.png)


# News

* 2018-08-11 SoTM Japan で発表しました。
  [slide PDF](SoTMjp20180810.pdf)

--------

このGitHubのリポジトリは1.0Gbyteを超える予定です。

1.0Gbyteを超えると、このリポジトリを「`yuuhayashi/osmCoverage2018xx`」へリネームし、「`yuuhayashi/osmCoverage`」を新規に作り直す予定です。
