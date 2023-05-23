const express = require('express')
const WooCommerce = require('./config');
const woocommerce = require('./config');

const app = express()

app.use( express.json())




app.get('/productos', (req, res) => {
    
 
    woocommerce.get('products').then( result => res.json(result.data))
 
    // WooCommerce.get('products', (err, data, response) => {
    //     if (err) {
    //         res.status(500).json(err);
    //     } else {
    //       console.log('entra');
    //     console.log(response);
    //     res.json(JSON.parse(response));
    //   }
    // });
  });

  app.post('/algos', (req, res)=> {
    console.log(req.body);
    res.send('ok')
  })


app.listen( 4000 , ()=> {
    console.log( ' listening on http://localhost:3000')
})