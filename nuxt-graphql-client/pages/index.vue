<template>
  <ul v-if="characters">
    <li v-for="character in characters.results" :key="character.id">
      {{ character.name }}      
    </li>
  </ul>
</template>
<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    characters: gql`
      query getCharacters {
        characters {
          results {
            id
            name
          }
        }
      }
    `

  }
}
</script>