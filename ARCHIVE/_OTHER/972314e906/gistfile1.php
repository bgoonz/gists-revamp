<?php

// returns boolean
function is_custom_post_type( $type = '' ) {
  
  // access to currently queried post
	global $post;
	
	// get the current post type
	$post_type = get_post_type( $post );
	
	// all post types that aren't custom
	$types = array("post", "page", "revision", "attachment");
	
	// check if current post type is custom
	if ( $type == '' && in_array($type, $types)) {
	        return true;
	// if parameter passed, compare against that
	} else if ( $type == $post_type ) {
	        return true;
	} else {
	        return false;
	}

}

?>