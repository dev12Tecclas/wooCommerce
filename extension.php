

<?php
/**
 * Plugin Name: theme react
 * Plugin URI: https://www.ejemplo.com/
 * Description: Un complemento que renderiza una aplicación de React en WordPress.
 * Version: 1.0.0
 * Author: teclass
 * Author URI: teclass
 */

// Registra los scripts y estilos necesarios para tu aplicación de React
function mi_id_react () {
  wp_enqueue_script('insertar-id', plugin_dir_url( __FILE__ ) . 'prueba.js', array(), '1.0.0', true );
}

function mi_complemento_enqueue_scripts() {
    // Registra el archivo JavaScript compilado de tu aplicación de React
    wp_enqueue_script( 'mi-complemento-react', plugin_dir_url( __FILE__ ) . './Citas-Mascotas-main/dist/assets/index-8b3377c6.js', array(), '1.0.0', true );

    // Registra los estilos CSS de tu aplicación de React
    wp_enqueue_style( 'mi-complemento-react', plugin_dir_url( __FILE__ ) . './Citas-Mascotas-main/dist/assets/index-1af49059.css', array(), '1.0.0' );
}



add_action( 'wp_enqueue_scripts', 'mi_id_react' );
add_action( 'wp_enqueue_scripts', 'mi_complemento_enqueue_scripts' );
