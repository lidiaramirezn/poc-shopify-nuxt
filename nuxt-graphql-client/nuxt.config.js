export default {
  modules: [
    '@nuxtjs/apollo',
  ],
  
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.myshopify.com/api/graphql'  ,
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38'
          },
      },
      }
    }
  }
}