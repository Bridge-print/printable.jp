
REM 2023/03/10
REM printable.jp�J�����\�z

CD %~dp0\public_html

REM Docker�R���e�i�\�z
docker-compose up -d
docker start printable_wp_db

REM �f�[�^����
TIMEOUT /T 10 /NOBREAK
docker exec -it printable_wp_db /bin/sh -c^
 "mysql -u wordpress -pwordpress -h db < /var/wp_data/wordpress_init.sql"
PAUSE;