<template>
  <h1>Lista de pokemones</h1>
  <p v-for="(pokemon, index) in arrayData" :key="index">
  {{pokemon.name}}</p>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const arrayData= ref([])
        const fetchData= async () =>{
            try{
                const res = await fetch('api.json')
                //consumiendo la api con una url
                //const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                arrayData.value= await res.json()

            }catch(error){
                console.log(error)
            }
        }
        fetchData()
        return{arrayData}
    }

}
</script>

<style>

</style>