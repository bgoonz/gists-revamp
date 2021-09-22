<?php

function rkv_url_spamcheck( $approved , $commentdata ) {

	$author_url			= $commentdata['comment_author_url'];
	$author_url_length	= strlen($author_url);

	if ($author_url_length > 50 )
		$approved = 'spam';

	return $approved;
}

add_filter( 'pre_comment_approved', 'rkv_url_spamcheck', 99, 2 );
