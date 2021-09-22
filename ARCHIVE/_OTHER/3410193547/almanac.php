<?php
/*
Template Name: Alamanc Group
*/
?>

<?php get_header(); the_post(); ?>
 
<h1 class="almanac-title">Almanac</h1>

<div class="almanac-wrapper">

<?php if (is_page('13706')) { ?>

  <div class="almanac-page left-page">
    <?php wp_list_pages('title_li=&exclude=&child_of=13708&depth=3'); ?>
  </div>

  <div class="almanac-page right-page">
 
    THIS ONE FAILS.
    <?php wp_list_pages('title_li=&exclude=&child_of=13710&depth=3'); ?>

  </div>

<?php } else { ?>

  <ul class="almanac-nav group">
    <?php wp_list_pages('title_li=&exclude=&child_of='.$post->ID.'&depth=3'); ?>
  </ul>

<?php } ?>
  	        			
</div>
	
<?php get_footer(); ?>