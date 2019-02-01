pwd
cd /var/www/html/coverage
curl -O http://192.168.0.26:8080/job/osmCoverage_FuelGet/lastSuccessfulBuild/artifact/database/coverage.fuelJSON.tgz
ls -l
rm -rf GML_FUEL
tar xzf coverage.fuelJSON.tgz

mkdir -p /var/www/html/coverage/tiles
cd /var/www/html/coverage/tiles
pwd
ls -l
rm -rf tileFuel?.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_FuelTile/lastSuccessfulBuild/artifact/vtile/tileFuel0.tgz
ls -l
rm -rf tileFuel0
tar xzf tileFuel0.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_FuelTile/lastSuccessfulBuild/artifact/vtile/tileFuel1.tgz
ls -l
rm -rf tileFuel1
tar xzf tileFuel1.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_FuelTile/lastSuccessfulBuild/artifact/vtile/tileFuel2.tgz
ls -l
rm -rf tileFuel2
tar xzf tileFuel2.tgz

