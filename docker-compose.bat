
REM 2023/03/10
REM printable.jp開発環境構築

CD %~dp0\public_html
mkdir vendor
mkdir var

REM Dockerコンテナ構築
docker-compose up -d
docker start printable_wp_db
docker start printable_web

REM データ生成
TIMEOUT /T 10 /NOBREAK
docker exec -it printable_wp_db /bin/sh -c^
 "mysql -u wordpress -pwordpress -h db < /var/wp_data/wordpress_init.sql"
docker exec -it printable_cube_db /bin/sh -c^
 "mysql -u dbuser -psecret -h cubeDB < /var/cube_data/xs692354_ec1.sql"

REM composer install
docker exec -it printable_web /bin/sh -c "export COMPOSER_PROCESS_TIMEOUT=1200; composer install --no-scripts;"
docker exec -it printable_web /bin/sh -c "bin/console eccube:composer:require-already-installed"

REM Docker再起動
docker restart printable_web
PAUSE;