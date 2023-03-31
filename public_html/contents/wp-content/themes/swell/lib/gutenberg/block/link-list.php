<?php
namespace SWELL_Theme\Block\Link_List;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 投稿リストブロック
 */
$asset = include T_DIRE . '/build/blocks/link-list/index.asset.php';
wp_register_script(
	'swell-block/link-list',
	T_DIRE_URI . '/build/blocks/link-list/index.js',
	array_merge( $asset['dependencies'], [ 'swell_blocks' ] ),
	SWELL_VERSION,
	true
);

register_block_type_from_metadata( T_DIRE . '/src/gutenberg/blocks/link-list', [
	'editor_script'   => 'swell-block/link-list',
	'render_callback' => __NAMESPACE__ . '\cb',
] );


function cb( $attrs, $content ) {
	$icon    = $attrs['icon'] ?? '';
	$iconPos = $attrs['iconPos'] ?? 'left';

	if ( $icon ) {
		$icon    = str_replace( 'swl-svg-', '', $icon );
		$content = str_replace(
			'<!-- icon-placeholder -->',
			\SWELL_Theme\SVG::get_svg( $icon, [ 'class' => "swell-block-linkList__icon -{$iconPos}" ] ),
			$content
		);
	} else {
		$content = str_replace( '<!-- icon-placeholder -->', '', $content );
	}

	return $content;
}
