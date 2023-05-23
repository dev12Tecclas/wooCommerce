const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default
const cusumerKey = 'ck_9fa85cadf3594e04b86a453aa62cb59707db832e'
const cusumerSecret = 'cs_4be54803d8b027b592892987bf7e618053afa062'




const woocommerce = new WooCommerceRestApi({
    url:'https://woo-creatively-decaffeinated-starfish.wpcomstaging.com/',
    consumerKey: cusumerKey,
    consumerSecret: cusumerSecret,
    version: 'wc/v3' ,
 
})

module.exports = woocommerce
