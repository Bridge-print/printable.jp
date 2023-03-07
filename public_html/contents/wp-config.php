<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * データベース設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** データベース設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'xs692354_wp1' );

/** データベースのユーザー名 */
define( 'DB_USER', 'xs692354_wp1' );

/** データベースのパスワード */
define( 'DB_PASSWORD', 'qgi4a516bd' );

/** データベースのホスト名 */
define( 'DB_HOST', 'localhost' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zR?~Fy? g=4.( YhJUb883h!uhm0$(n:lcEZud&h,2HDbT#5jTclDcsi|%YBn#Ht' );
define( 'SECURE_AUTH_KEY',  '7Z?(F_1B#=!m2O[A7NxFDy{>P4hsmYUZcQ8wf9gs4kamh+b_eKqX+qpbVolGvXG`' );
define( 'LOGGED_IN_KEY',    'bxOPySxWW0brwxw~9w>5.[X|rU6C;c fWyww1LJttS@|&ge9DNa,yg|7*cj[)b}r' );
define( 'NONCE_KEY',        '&H5v?#Pws)3tBNMJj,P31R!_WP,^T)dEL-q&[[nE+!-G_,d }!!@B[>8r64r7-^K' );
define( 'AUTH_SALT',        'TnO2y[b8n&>g1^0+O0w<frPXLW,0mp[ S55Om:,$ zB}fXWG$5G.A,1FQCR&Izbe' );
define( 'SECURE_AUTH_SALT', '@=DiW=i|c78a5~G]N8<X6|G^NZ/>}?PBvkv>G^9LUs`cz~BS0E&2+@uhi02Z/4@1' );
define( 'LOGGED_IN_SALT',   'c[;7uakg4^Rgf[>tRvUjz$t&1TA[WQ}}FIo3K3):Fxe&_xb3D*)*<&!ZC*1GX}r!' );
define( 'NONCE_SALT',       'sFHXPx^0;hiMSu#~Ul>*]rU;;W/U)|)TL./m*#XhW )iVu0KHF_7<U3(Bov%Z{6A' );
define( 'WP_CACHE_KEY_SALT','-+2Gqy~z6`v?V_|5)YXUX`I3*Ybi@Kc&U_p+!Sol |j?/ /}Bd}3N#>Xt)xY~C6F' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* カスタム値は、この行と「編集が必要なのはここまでです」の行の間に追加してください。 */



/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
