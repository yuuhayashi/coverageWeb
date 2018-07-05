pwd
cd /var/www/html/coverage
curl -O http://192.168.0.26:8080/job/osmCoverage_BusstopGet/lastSuccessfulBuild/artifact/database/coverage.busstopJSON.tgz
ls -l
rm -rf GML_BUSSTOP
tar xzf coverage.busstopJSON.tgz

mkdir -p /var/www/html/coverage/tiles
cd /var/www/html/coverage/tiles
pwd
ls -l
rm -rf tileBus?.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_BusstopTile/lastSuccessfulBuild/artifact/vtile/tileBus0.tgz
ls -l
rm -rf tileBus0
tar xzf tileBus0.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_BusstopTile/lastSuccessfulBuild/artifact/vtile/tileBus1.tgz
ls -l
rm -rf tileBus1
tar xzf tileBus1.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_BusstopTile/lastSuccessfulBuild/artifact/vtile/tileBus2.tgz
ls -l
rm -rf tileBus2
tar xzf tileBus2.tgz

