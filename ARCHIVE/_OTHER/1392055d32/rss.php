<?php 
/* 
Template Name: RSS Videos
*/

$posts = query_posts('showposts=-1&post_type=page&post_status=publish&post_parent=1283');

header('Content-Type: '.feed_content_type('rss-http').'; charset='.get_option('blog_charset'), true);
echo '<?xml version="1.0" encoding="'.get_option('blog_charset').'"?'.'>';
?>

<rss version="2.0" 
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	<?php do_action('rss2_ns'); ?>
>

	<channel>
	
    	<title>CSS-Tricks Screencasts</title>
    	
    	<atom:link href="<?php self_link(); ?>" rel="self" type="application/rss+xml" />

    	<link>http://css-tricks.com/video-screencasts/</link>
    	
    	<language>en-us</language>
    	<copyright>&#xA9;2008 CSS-Tricks</copyright>
    	
    	<itunes:subtitle>Tips, Tricks, and Tutorials on CSS</itunes:subtitle>
    
    	<itunes:author>CSS-Tricks</itunes:author>
    	
    	<itunes:summary>CSS-Tricks Screencasts is focused on showing you tips, tricks, techniques about web design.</itunes:summary>
    	
    	<description>CSS-Tricks Screencasts is focused on showing you tips, tricks, techniques about web design. Code samples can be extremely helpful, but sometimes it is even more helpful to watch someone as they code. In CSS-Tricks Screencasts will show you real live CSS and HTML code being written and tested right on the screen. Topics will vary but will always center around design and usability.</description>
    	
    	<itunes:owner>
    		<itunes:name>Chris Coyier</itunes:name>
    	
    		<itunes:email>chriscoyier@gmail.com</itunes:email>
    	</itunes:owner>
    	
    	<itunes:image href="http://css-tricks.com/videos/images/rss-image2.jpg" />
    	
    	<itunes:category text="Technology"></itunes:category>
    	
    	<itunes:explicit>no</itunes:explicit>
    
        <?php while (have_posts()) : the_post(); ?>
        
        	<item>
        
            <title><?php the_title_rss(); ?></title>
        		
        		<link><?php the_permalink_rss(); ?></link>
        		
        		<guid><?php the_permalink_rss(); ?></guid>
        		
        		<itunes:author>CSS-Tricks</itunes:author>
        
        		<itunes:subtitle><?php the_title_rss(); ?></itunes:subtitle>
        
        		<itunes:summary><?php echo htmlspecialchars( get_the_excerpt() ); ?></itunes:summary>
                
            <enclosure url="<?php echo get_post_meta($post->ID, 'high_qual_version', true); ?>" length="<?php echo get_post_meta($post->ID, 'byte_size', true); ?>" type="video/mpeg"/>
        		
        		<pubDate><?php echo mysql2date('D, d M Y H:i:s +0000', get_post_time('Y-m-d H:i:s', true), false); ?></pubDate>
        		
        		<itunes:duration><?php echo get_post_meta($post->ID, 'running_time', true); ?></itunes:duration>
        
        		<itunes:keywords>css, web design, html, tutorial</itunes:keywords>
        
        	</item>
        	
        <?php endwhile; ?>
    
    </channel>
    
</rss>