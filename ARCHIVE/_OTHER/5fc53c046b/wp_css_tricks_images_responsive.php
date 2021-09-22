<?php 



// I could use some help with this.
// It looks SUPER close to working, but at the final moment, it doesn't.

// Example post HTML
// https://gist.github.com/chriscoyier/27954c6e12c96fadeb6f




function wp_css_tricks_images_responsive( $content ) {

  // Whitespace version
  // <figure [^>]+>\s+<img [^>]+>

  // No whitespace version
  // <figure [^>]+><img [^>]+>
   
  // We should probbbbbably do BOTH and do it's normal search also

  $what = preg_match_all( '/<figure [^>]+><img [^>]+>/', $content, $matches );

  // error_log($what);
  // 2 (correctly finds 2) 

  // Bail early if it doesnt' find 
  if ( $what == 0 ) {
    return $content;
  }
  // Doesn't bail, because it finds 2.

  // error_log(print_r($matches, true));
  // Array
  // (
  //     [0] => Array
  //         (
  //             [0] => <figure id='post-201770' class='align-right media-201770'><img src='//css-tricks.com/wp-content/uploads/2015/07/qod.gif' alt='' />
  //             [1] => <figure id='post-200888' class='align-none media-200888'><img src='https://css-tricks.com/wp-content/uploads/2015/07/qod-button.png' alt='Get Another Quote Button' />
  //         )
  // )
  // Correctly creates nested array of matched figures

  // Set up arrays to hold your images and a set of IDs that we'll cache later.
  $selected_images = $attachment_ids = array();

  // Loop through all our matches and process each one to add responsive images.
  foreach( $matches[0] as $match ) {
    // Bail early if a `srcset` already exists or if we can't find a media ID in the class.
    if ( false === strpos( $match, ' srcset=' ) && preg_match( '/media-([0-9]+)/i', $match, $class_id ) &&
      ( $attachment_id = absint( $class_id[1] ) ) ) {

      // Break the image tag out of our pattern.
      preg_match( '/<img [^>]+>/', $match, $image );

      // error_log($image[0]);
      // Correctly finds 2 <img>

      /*
       * If exactly the same image tag is used more than once, overwrite it.
       * All identical tags will be replaced later with 'str_replace()'.
       */
      $selected_images[ $image[0] ] = $attachment_id;
      // Overwrite the ID when the same image is included more than once.
      $attachment_ids[ $attachment_id ] = true;
    }
  }

  if ( count( $attachment_ids ) > 1 ) {
    /*
     * Warm object cache for use with 'get_post_meta()'.
     *
     * To avoid making a database call for each image, a single query
     * warms the object cache with the meta information for all images.
     */
    update_meta_cache( 'post', array_keys( $attachment_ids ) );
  }

  // error_log(print_r($attachment_ids, true));
  // Array
  // (
  //     [201770] => 1
  //     [200888] => 1
  // )

  foreach ( $selected_images as $image => $attachment_id ) {

    // error_log($image);
    // <img>

    // error_log($attachment_id);
    // 201853

      $image_meta = wp_get_attachment_metadata( $attachment_id );

// error_log(print_R($image_meta, TRUE));
//       [28-Feb-2016 15:52:01 UTC] Array
// (
//     [width] => 1163
//     [height] => 627
//     [file] => 2015/07/qod.gif
//     [sizes] => Array
//         (
//             [thumbnail] => Array
//                 (
//                     [file] => qod-150x150.gif
//                     [width] => 150
//                     [height] => 150
//                     [mime-type] => image/gif
//                 )

//             [medium] => Array
//                 (
//                     [file] => qod-300x162.gif
//                     [width] => 300
//                     [height] => 162
//                     [mime-type] => image/gif
//                 )

//             [large] => Array
//                 (
//                     [file] => qod-1024x552.gif
//                     [width] => 1024
//                     [height] => 552
//                     [mime-type] => image/gif
//                 )

//         )

//     [image_meta] => Array
//         (
//             [aperture] => 0
//             [credit] => 
//             [camera] => 
//             [caption] => 
//             [created_timestamp] => 0
//             [copyright] => 
//             [focal_length] => 0
//             [iso] => 0
//             [shutter_speed] => 0
//             [title] => 
//             [orientation] => 0
//         )

// )

    error_log(wp_image_add_srcset_and_sizes( $image, $image_meta, $attachment_id ));
    // <img src='//css-tricks.dev/wp-content/uploads/2016/01/Screen-Shot-2016-01-27-at-11.29.21-AM.png' alt='' />

    /*
        ^^^^
        THAT appears to be the problem.
        It doesn't do anything to the image.
    */

    $content = str_replace( $image, wp_image_add_srcset_and_sizes( $image, $image_meta, $attachment_id ), $content );
  } 

  return $content;
}

add_filter( 'the_content', 'wp_css_tricks_images_responsive' );

?>