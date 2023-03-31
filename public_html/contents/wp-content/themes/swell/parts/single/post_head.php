<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 投稿ページのタイトル部分
 */
$SETTING            = SWELL_Theme::get_setting();
$the_id             = get_the_ID();
$post_data          = get_post( $the_id );
$date_timestamp     = get_post_timestamp( $the_id, 'date' );
$modified_timestamp = get_post_timestamp( $the_id, 'modified' );

// 公開日 < 更新日かどうか
$is_modified = ( $date_timestamp < $modified_timestamp );

// タイトル横に表示する日付
$title_date = ( $is_modified && 'modified' === $SETTING['title_date_type'] ) ? $modified_timestamp : $date_timestamp;
?>
<div class="p-articleHead c-postTitle">
	<h1 class="c-postTitle__ttl"><?php the_title(); ?></h1>
	<time class="c-postTitle__date u-thin" datetime="<?=esc_attr( wp_date( 'Y-m-d', $title_date ) )?>">
		<span class="__y"><?=esc_html( wp_date( 'Y', $title_date ) )?></span>
		<span class="__md"><?=esc_html( wp_date( 'n/d', $title_date ) )?></span>
	</time>
</div>
<div class="p-articleMetas -top">
	<?php
		SWELL_Theme::get_parts( 'parts/single/item/term_list', [
			'show_cat' => $SETTING['show_meta_cat'],
			'show_tag' => $SETTING['show_meta_tag'],
			'show_tax' => $SETTING['show_meta_tax'],
		] );

		SWELL_Theme::get_parts( 'parts/single/item/times', [
			'date_timestamp'     => $SETTING['show_meta_posted'] ? $date_timestamp : null,
			'modified_timestamp' => $SETTING['show_meta_modified'] ? $modified_timestamp : null,
		] );

		if ( $SETTING['show_meta_author'] ) :
			\SWELL_Theme::pluggable_parts( 'the_post_author', [ 'author_id' => $post_data->post_author ] );
		endif;
	?>
</div>
