
REM 2023/03/10
REM printable.jp開発環境構築

CD %~dp0\public_html

REM Dockerコンテナ構築
docker-compose up -d
docker start printable_wp_db

REM データ生成
TIMEOUT /T 10 /NOBREAK
docker exec -it printable_wp_db /bin/sh -c^
 "mysql -u wordpress -pwordpress -h db < /var/wp_data/wordpress_init.sql"
PAUSE;