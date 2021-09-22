<?php
/*
Template Name: Comment Graph
*/
?>
<!DOCTYPE html>
<html>
  
<head>
  <meta charset=utf-8>
  <title>Comment Graph</title>

  <style>
    #chart { margin: 0 auto; padding: 100px 0; height: 400px; position: relative; text-align: center; }
    #chart > a { 
      width: 1px;
      /* Fallback color */
      background: orange;  
      /* Way cooler gradient */
      background: -webkit-linear-gradient(top, hsl(27, 95%, 45%), hsl(27, 95%, 65%), hsl(27, 95%, 45%));
      background: -moz-linear-gradient(top, hsl(27, 95%, 45%), hsl(27, 95%, 65%), hsl(27, 95%, 45%));
      background: -ms-linear-gradient(top, hsl(27, 95%, 45%), hsl(27, 95%, 65%), hsl(27, 95%, 45%));
      background: -o-linear-gradient(top, hsl(27, 95%, 45%), hsl(27, 95%, 65%), hsl(27, 95%, 45%));
      background: linear-gradient(top, hsl(27, 95%, 45%), hsl(27, 95%, 65%), hsl(27, 95%, 45%));
      display: inline-block; 
      vertical-align: bottom; 
      text-decoration: none;
      
    }
    #chart > a:hover {
      background: black;
    }
    #chart span {
      width: 50px;
      background: black;
      color: white;
      text-align: center;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -30px;
      opacity: 0;
      z-index: 1;
    }
    #chart > a:hover > span {
      opacity: 1;
    }
    #chart strong {
      padding: 10px; 
    }
  </style>

</head>

<body>

  <?php 
    $i = 1; 
    
    $query = "SELECT comment_count FROM " . $wpdb->posts . " WHERE post_type = 'post' && post_status = 'publish' ORDER BY comment_count DESC LIMIT 1";
    $results = $wpdb->get_results($query);
    $maxComments = $results[0]->comment_count;
    
    query_posts('posts_per_page=-1&order=ASC'); 
  ?>
  
  <div id="chart">

  <?php
    
    while (have_posts() ) : the_post();
    
      // Echo the first year post published
      if ($i == 1) { 
        echo "<strong>";
        the_date("Y");
        echo "</strong>";
        // prevent from outputting next iteration
        $i = 0;
      }
    
      $numComments = get_comments_number();
      $heightPercentage = (($numComments / $maxComments) * 100);
      
      echo "<a href='";
      echo get_permalink();
      echo "' style='height: $heightPercentage%;'>";
      echo "<span>$numComments</span>";
      echo "</a>";
    	    	
    endwhile;
    
    // Echo the last year post published
    echo "<strong>";
    the_date("Y");
    echo "</strong>";
    
  ?>
    
  </div>
  
</body>
  
</html>