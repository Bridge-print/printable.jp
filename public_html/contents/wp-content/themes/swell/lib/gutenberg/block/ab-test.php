<?php
namespace SWELL_Theme\Block;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * ABテストブロック
 */
$asset = include T_DIRE . '/build/blocks/ab-test/index.asset.php';
wp_register_script(
	'swell-block/ab-test',
	T_DIRE_URI . '/build/blocks/ab-test/index.js',
	array_merge( $asset['dependencies'], [ 'swell_blocks' ] ),
	SWELL_VERSION,
	true
);

register_block_type_from_metadata( T_DIRE . '/src/gutenberg/blocks/ab-test', [
	'editor_script'   => 'swell-block/ab-test',
	'render_callback' => __NAMESPACE__ . '\cb_ab_test',
] );

function cb_ab_test( $attrs, $content, $block ) {

	$flag_num = rand( 1, 100 ); // phpcs:ignore WordPress.WP.AlternativeFunctions.rand_rand
	$rate_A   = $attrs['rate'] ?? 50; // 0 ~ 100
	$show_A   = $rate_A >= $flag_num;

	// AとBのブロックがちゃんとあるかチェック。なければ1つ目のブロック(A) を表示
	if ( count( $block->parsed_block['innerBlocks'] ) < 2 ) {
		$show_A = true;
	}

	if ( $show_A ) {
		// Aを表示
		$blocks = $block->parsed_block['innerBlocks'][0]['innerBlocks'];
	} else {
		// Bを表示
		$blocks = $block->parsed_block['innerBlocks'][1]['innerBlocks'];
	}

	return do_blocks( serialize_blocks( $blocks ) );
}
