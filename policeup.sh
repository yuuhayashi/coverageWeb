pwd
cd /var/www/html/coverage/tiles

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceGet/lastSuccessfulBuild/artifact/database/coverage.policeJSON.tgz
ls -l
rm -rf GML_POLICE
tar xzf coverage.policeJSON.tgz

pwd
ls -l
rm -rf tilePolice?.tgz
rm -rf tilePolice?z.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice2.tgz
ls -l
rm -rf tilePolice2
tar xzf tilePolice2.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice4.tgz
ls -l
rm -rf tilePolice4
tar xzf tilePolice4.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice5.tgz
ls -l
rm -rf tilePolice5
tar xzf tilePolice5.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice6.tgz
ls -l
rm -rf tilePolice6
tar xzf tilePolice6.tgz


curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice2z.tgz
ls -l
rm -rf tilePolice2z
tar xvzf tilePolice2z.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice4z.tgz
ls -l
rm -rf tilePolice4z
tar xzf tilePolice4z.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice5z.tgz
ls -l
rm -rf tilePolice5z
tar xzf tilePolice5z.tgz

curl -O http://192.168.0.26:8080/job/osmCoverage_PoliceTile/lastSuccessfulBuild/artifact/tilePolice6z.tgz
ls -l
rm -rf tilePolice6z
tar xzf tilePolice6z.tgz
