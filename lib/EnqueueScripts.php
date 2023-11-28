<?php

namespace LocomotiveScroll;

class EnqueueScriptsLocomotiveScroll {

    private $plugin_path;

    public function __construct() {
        $this->plugin_path = MY_PLUGIN_URL;
        add_action('wp_enqueue_scripts', array($this, 'addScripts'));
        add_action('wp_enqueue_scripts', array($this, 'addStyles'));
        add_action('enqueue_block_editor_assets', array($this, 'my_custom_gutenberg_scripts'));
    }

    public function addScripts() {
        wp_register_script('my-script-locomotive', $this->plugin_path . 'build/index.js', array('jquery'), '1.0', true);
        wp_enqueue_script('my-script-locomotive');
    }

    public function addStyles() {
        wp_register_style('my-style-locomotive', $this->plugin_path . 'build/index.css', array(), '1.0', 'all');
        wp_enqueue_style('my-style-locomotive');
    }

    function my_custom_gutenberg_scripts() {
        // Script personalizado para el editor de Gutenberg
        wp_enqueue_script('my-gutenberg-scripts-meraki-locomotive-scroll', $this->plugin_path . 'build/editor.js', array('jquery'), '1.0', true);
    }
}

// Instantiate the class to initialize actions and filters
$EnqueueScripts = new EnqueueScriptsLocomotiveScroll();
