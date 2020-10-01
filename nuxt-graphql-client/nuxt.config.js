export default {
  modules: [
    '@nuxtjs/apollo',
  ],
  components: true,
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql/'  
      }
    }
  }
}