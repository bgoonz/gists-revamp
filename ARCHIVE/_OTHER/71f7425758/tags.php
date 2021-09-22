<?php

class CTF_Register_Taxonomies {

    /**
     * Initialize the class
     */
    public function __construct() {
        add_action('init', array( $this, 'tags_support_all') );
        add_action('pre_get_posts', array( $this, 'tags_support_query') );
    }

    public function tags_support_all() {
        register_taxonomy_for_object_type('post_tag', 'page');
    }

    // ensure all tags are included in queries
    public function tags_support_query($wp_query) {
        if ($wp_query->get('tag')) $wp_query->set('post_type', 'any');
    }

}
