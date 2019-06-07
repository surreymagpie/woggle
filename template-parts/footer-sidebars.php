<?php
/**
 * Template part for displaying page widgets in footer.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package woggle
 */

if ( is_active_sidebar( 'footer-l' ) || is_active_sidebar( 'footer-c' ) || is_active_sidebar( 'footer-r' )) : ?>
		<div class="footer-widget-area container">

        <?php if ( is_active_sidebar('footer-l') ): ?>
        <aside class="footer-widgets footer-widgets-left">
            <?php dynamic_sidebar( 'footer-l' ); ?>
        </aside>
        <?php endif; ?>

        <?php if ( is_active_sidebar('footer-c') ): ?>
        <aside class="footer-widgets footer-widgets-centre">
            <?php dynamic_sidebar( 'footer-c' ); ?>
        </aside>
        <?php endif; ?>

        <?php if ( is_active_sidebar('footer-r') ): ?>
        <aside class="footer-widgets footer-widgets-right">
            <?php dynamic_sidebar( 'footer-r' ); ?>
        </aside>
        <?php endif; ?>

        </div>
<?php endif; ?>