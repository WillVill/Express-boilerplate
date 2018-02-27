var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://khepera.com',
  consumerKey: 'ck_d2cca4f15cdcf4c338543d69725d41e48a62e45c',
  consumerSecret: 'cs_d11a9e9746261a26e33eeb1e842f8ccb21c90456',
  wpAPI: true,
  version: 'wc/v1'
});

export default WooCommerce;
