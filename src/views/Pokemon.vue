<template>
  <h1>Lista de pokemones</h1>
  <p v-for="(pokemon, index) in arrayData" :key="index">
        <router-link :to="`/pokemon/${pokemon.name}`">
         {{pokemon.name}}
  </router-link>
  </p>
  
</template>

<script>
import{useFetch} from '../hooks/useFetch'

export default {
    
    setup(){
        return {...useFetch('api.json')}
       
    }

}
</script>
