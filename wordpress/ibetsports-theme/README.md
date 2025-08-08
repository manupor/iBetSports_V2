# IBetSports Theme

A lightweight WordPress theme for ibetsports.ag with:
- Dark, neon-green brand palette
- Sticky header with Login and Join Now buttons
- Accessible, iframe-based Login and Signup modals
- Tawk.to chat widget (auto-loaded in the footer)
- Quickmail login script, preconnected to remote iframes for speed

This theme focuses on your brand and conversion flow. You can extend it with custom page templates for Casino, Sports, Racebook, etc.

## Installation

1. Download the "ibetsports-theme" folder from this project.
2. Upload it to your WordPress site at: wp-content/themes/ibetsports-theme
3. In wp-admin → Appearance → Themes, activate “IBetSports Theme”.

Optional: Set a static homepage (Settings → Reading) and assign menus in Appearance → Menus.

## File Structure

- style.css: Theme metadata and global styles
- functions.php: Theme setup, scripts, and Tawk.to widget
- header.php: Sticky header with brand and auth buttons
- footer.php: Social links and copyright
- index.php: Simple home content with CTA
- assets/js/theme.js: Modal behavior (open/close login/signup), preconnect and accessibility

## Modals

- Signup modal loads https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en
- Login modal loads https://betslip.ibetsports.ag/login

Open actions:
- Header “Login” button
- Header “Join Now!” button
- Home CTA “Join Now” button

Close actions:
- Click the red × button
- Press the Escape key
- Click outside the modal (backdrop)

## Performance

The theme JS adds:
- preconnect and dns-prefetch tags for signup.isppro.net and betslip.ibetsports.com
- This reduces time-to-first-byte for the remote iframes

## Chat

Tawk.to widget is loaded from functions.php in wp_footer and will render a chat button on the site automatically.

## Customization

- Colors: Modify CSS variables at the top of style.css
- Header/Navigation: Edit header.php (add wp_nav_menu if needed)
- Footer: Edit footer.php (add links, compliance text)
- Scripts: Edit assets/js/theme.js to adjust modal behavior or add analytics

## Accessibility

- Modals use role="dialog" and aria-modal="true"
- Focus is moved to the modal on open and restored on close
- Escape key closes the active modal

## Support

If you need help extending this theme with custom templates (casino, sports, banking, promotions), request page templates or shortcodes and I’ll add them.
