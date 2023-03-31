<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 公開日・更新日情報
 */
$show_date     = $variable['show_date'] ?? false;
$show_modified = $variable['show_modified'] ?? false;

// タイムスタンプで投稿日と更新日を取得
$the_id             = get_the_ID();
$date_timestamp     = get_post_timestamp( $the_id, 'date' );
$modified_timestamp = get_post_timestamp( $the_id, 'modified' );

// 更新日が公開日より遅い場合だけ表示（ただし、更新日だけ表示の時は更新日をそのまま表示する）
if ( $show_modified && $show_date ) {
	$show_modified = ( $date_timestamp < $modified_timestamp ) ? $show_modified : false;
}

if ( ! $show_date && ! $show_modified ) return;

$date_format = get_option( 'date_format' );

?>
<div class="p-postList__times c-postTimes u-thin">
	<?php if ( $show_date ) : ?>
		<time class="c-postTimes__posted icon-posted" datetime="<?=esc_attr( wp_date( 'Y-m-d', $date_timestamp ) )?>"><?=esc_html( wp_date( $date_format, $date_timestamp ) )?></time>
	<?php endif; ?>
	<?php if ( $show_modified ) : ?>
		<time class="c-postTimes__modified icon-modified" datetime="<?=esc_attr( wp_date( 'Y-m-d', $modified_timestamp ) )?>"><?=esc_html( wp_date( $date_format, $modified_timestamp ) )?></time>
	<?php endif; ?>
</div>
