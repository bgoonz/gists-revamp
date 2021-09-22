<div class="social-menu">
  
  <h1>Social Media Button Hover Effect</h1>
  
  <ul>
    
    <?php if (get_field('twitter')): ?>
    <li>
      <a href="<?php the_field('twitter'); ?>">
        <span class="link-label">Twitter</span>
      </a>
    </li>
    <?php endif; ?>
    
    <?php if (get_field('Facebook')): ?>
    <li>
      <a href="<?php the_field('Facebook'); ?>">
        <span class="link-label">Facebook</span>
      </a>
    </li>
    <?php endif; ?>
    
    <?php if (get_field('instagram')): ?>
    <li>
      <a href="<?php the_field('instagram'); ?>">
        <span class="link-label">Instagram</span>
      </a>
    </li>
    <?php endif; ?>
    
    <?php if (get_field('youtube')): ?>
    <li>
      <a href="<?php the_field('youtube'); ?>">
        <span class="link-label">YouTube</span>
      </a>
    </li>
    <?php endif; ?>

  </ul>
  
</div>