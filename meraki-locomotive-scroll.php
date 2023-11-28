<?php
/**
 * Plugin Name:       Locomotive Scroll Plugin
 * Description:       Locomotive Scrolling.
 * Requires at least: 5.8
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            Stephan R
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meraki
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

namespace LocomotiveScroll;

define('LocomotiveScroll\MY_PLUGIN_URL', plugin_dir_url(__FILE__));
define('LocomotiveScroll\MY_PLUGIN_PATH', plugin_dir_path(__FILE__));

require_once(__DIR__ . '/lib/EnqueueScripts.php');   





