  // Custom Comments
  function csstricks_comment($comment, $args, $depth) {

    $GLOBALS['comment'] = $comment; ?>

    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">

      <div class="grid group comment-wrap" id="comment-<?php comment_ID(); ?>">

        <div class="comment-avatar grid-1-5">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="lazyload-gravatar" alt="User Avatar" data-src="<?php echo get_avatar_url(get_comment_author_email($comment_ID), array("size" => 160)); ?>">
        </div>

        <div class="comment-body group grid-4-5">

          <div class="comment-author-wrap vcard">
            <?php

              /* translators: 1: comment author, 2: date and time */
              printf(__('%1$s %2$s', 'csstricks'),

                sprintf('<div class="comment-author">%s</div>', get_comment_author_link()),

                sprintf('<div class="comment-time"><a href="%1$s"><span class="screen-reader">Permalink to comment</span>#</a> <time datetime="%2$s">%3$s</time></div>',
                  esc_url(get_comment_link( $comment->comment_ID )),
                  get_comment_time('c'),
                  /* translators: 1: date, 2: time */
                  sprintf(__('%1$s', 'csstricks'), get_comment_date(), get_comment_time())
                )
              );
            ?>

            <?php edit_comment_link( __('Edit', 'css-tricks' ), '<span class="edit-link">', '</span>'); ?>

          </div><?php # END .comment-author-wrap ?>

          <?php if ( $comment->comment_approved == '0' ) : ?>
            <p class="comment-awaiting-moderation">Your comment is awaiting moderation.</p>
          <?php endif; ?>

          <div class="comment-content">

            <?php comment_text(); ?>

            <div class="reply">
              <?php comment_reply_link( array_merge( $args, array( 'reply_text' => __( 'Reply &darr;', 'twentyeleven' ), 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
            </div><!-- .reply -->

          </div><?php # END div.commenet-content ?>

        </div><?php # END div.commenet-body ?>

      </div><?php # END div.grid ?>

    <?php # phantom </li> ?>

  <?php }