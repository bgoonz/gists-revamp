  function myprefix_kses_allowed_tags($input){
    return array_merge( $input, array(
          // paragraphs
          'p' => array(
            'style'     => array()
          ),
          'span' => array(
            'style'     => array()
          ),
          'div' => array(
            'style'     => array()
          ),

          // Links
          'a' => array(
            'href'     => array(),
            'title'    => array(),
            'rel'      => array()
          ),

          // Quotes
          'blockquote'   => array(
          'cite'     => array()
          ),

          // Code
          'code'         => array(),
          'pre'          => array(),

          // Formatting
          'em'           => array(),
          'strong'       => array(),
          'del'          => array(
            'datetime' => true
          ),

          // Lists
          'ul'           => array(),
          'ol'           => array(
            'start'    => true
          ),
          'li'           => array(),

          // Images
          'img'          => array(
            'src'      => true,
            'border'   => true,
            'alt'      => true,
            'height'   => true,
            'width'    => true,
          )
     ));
  }
  add_filter('bbp_kses_allowed_tags', 'myprefix_kses_allowed_tags', 999, 1);
