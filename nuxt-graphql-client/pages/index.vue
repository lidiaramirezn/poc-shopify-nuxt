<template>
  <ul v-if="products">
    <li v-for="product in products.edges" :key="product.node.id" >
      {{ product.node.title }}
    </li>
  </ul>
</template>
<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    products: gql`
      query Products {
        products(first:20) {
            edges {
                node {
                    id
                    title
                    description
                    variants(first:250) {
                        edges {
                            node {
                                title
                                id
                                priceV2 {
                                    amount
                                    currencyCode
                                }
                            }
                        }
                    }
                }
            }
        }   
      }
    `
  },
  
}
</script>