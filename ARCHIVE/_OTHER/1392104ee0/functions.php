	add_action( 'init', 'create_post_type' );
	function create_post_type() {
		register_post_type( 'screenshot',
			array(
				'labels' => array(
					'name' => __( 'Screenshots' ),
					'singular_name' => __( 'Screenshot' ),
					'add_new' => __( 'Add Screenshot' ),
					'add_new_item' => __( 'Add New Screenshot' ),
					'edit_item' => __( 'Edit Screenshot' ),
				),
				'public' => true,
				'has_archive' => true,
				'rewrite' => array('slug' => 'gallery'),
				'supports'		=> array('title', 'editor', 'custom-fields', 'comments'),
				'taxonomies' => array('post_tag', 'category')			
			)
		);
	}