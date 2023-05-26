<?php 
/**
 * Plugin Name: prueba
 * Description: Una descripción de tu extensión.
 * Version: 1.0.0
 * Author: Tu Nombre
 */
// $salida = shell_exec('node /prueba.js')
// echo $salida

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'http://localhost:4000/algos',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 0,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'POST',
//   CURLOPT_POSTFIELDS =>'{
//     "nombre":"lolo"
// }',
//   CURLOPT_HTTPHEADER => array(
//     'Content-Type: application/json'
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;
// print '<h1>hola</h1>';

// // $woocommerceURL = get_site_url();

// // Obtener las consultas (query)
// $queryString = $_SERVER['REQUEST_URI'];

// // Imprimir la URL de inicio y las consultas
// // echo "URL de inicio de WooCommerce: " . $woocommerceURL . "<br>";
// echo "Consultas: " . $queryString;

// Enqueue el script de mi-plugin.js
function mi_plugin_enqueue_scripts() {
  // wp_enqueue_script('mi-plugin', plugins_url('prueba.js', __FILE__), array('backbone'), '1.0', true);
  wp_enqueue_script('mi-plugin', plugins_url('./react-prueba/src/main.js', __FILE__), array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mi_plugin_enqueue_scripts');



?>