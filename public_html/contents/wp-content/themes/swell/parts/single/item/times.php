<?php
if ( ! defined( 'ABSPATH' ) ) exit;

$date_timestamp     = $variable['date_timestamp'] ?? null;
$modified_timestamp = $variable['modified_timestamp'] ?? null;

// 両方表示する設定の時、公開日＝更新日であれば更新日は表示しない。
if ( ( $date_timestamp && $modified_timestamp ) && ( $date_timestamp >= $modified_timestamp ) ) {
	$modified = null;
}

$date_format = get_option( 'date_format' );
?>
<div class="p-articleMetas__times c-postTimes u-thin">
	<?php if ( $date_timestamp ) : ?>
		<span class="c-postTimes__posted icon-posted" aria-label="<?=esc_attr__( '公開日', 'swell' )?>"><?=esc_html( wp_date( $date_format, $date_timestamp ) )?></span>
	<?php endif; ?>
	<?php if ( $modified_timestamp ) : ?>
		<time class="c-postTimes__modified icon-modified" datetime="<?=esc_attr( wp_date( 'Y-m-d', $modified_timestamp ) )?>" aria-label="<?=esc_attr__( '更新日', 'swell' )?>"><?=esc_html( wp_date( $date_format, $modified_timestamp ) )?></time>
	<?php endif; ?>
</div>
