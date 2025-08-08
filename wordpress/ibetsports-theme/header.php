<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header class="site-header">
      <div class="container">
        <div class="header-bar">
          <a href="<?php echo esc_url(home_url('/')); ?>" class="brand">ibetsports.ag</a>
          <div class="nav-actions">
            <button id="btn-login" class="btn btn-outline">Login</button>
            <button id="btn-signup" class="btn btn-primary">Join Now!</button>
          </div>
        </div>
      </div>
    </header>

     Signup Modal 
    <div id="signup-modal" class="modal-backdrop" aria-hidden="true">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Sign Up">
        <button class="modal-close" data-close="signup" aria-label="Close">×</button>
        <iframe src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en" title="Sign Up"></iframe>
      </div>
    </div>

     Login Modal 
    <div id="login-modal" class="modal-backdrop" aria-hidden="true">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Login">
        <button class="modal-close" data-close="login" aria-label="Close">×</button>
        <iframe src="https://betslip.ibetsports.ag/login" title="Login"></iframe>
      </div>
    </div>

    <main id="content" class="site-content">
