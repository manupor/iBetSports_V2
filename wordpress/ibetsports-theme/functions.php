<?php
/**
 * Theme setup and assets
 */

if (!defined('ABSPATH')) { exit; }

add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form','gallery','caption','style','script']);
  register_nav_menus([
    'primary' => __('Primary Menu', 'ibetsports'),
    'footer'  => __('Footer Menu', 'ibetsports'),
  ]);
});

add_action('wp_enqueue_scripts', function () {
  // Google Font: Poppins
  wp_enqueue_style('ibetsports-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap', [], null);
  // Theme CSS
  wp_enqueue_style('ibetsports-style', get_stylesheet_uri(), [], wp_get_theme()->get('Version'));

  // Quickmail login script (defer)
  wp_enqueue_script('ibetsports-quickmail', 'https://images.betimages.com/Betslip/js/quickmail.login.js', [], null, true);

  // Theme JS
  wp_enqueue_script('ibetsports-theme', get_template_directory_uri() . '/assets/js/theme.js', [], wp_get_theme()->get('Version'), true);
});

// Tawk.to Chat Widget - print late in footer so it’s always visible
add_action('wp_footer', function () {
  ?>
  <script type="text/javascript">
    (function(){
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      var s1=document.createElement("script"), s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/677ab10d49e2fd8dfe02cf01/1igrk77hr';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  </script>
  <?php
}, 99);
