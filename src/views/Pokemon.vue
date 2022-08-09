<template>
  <h1>Lista de pokemones</h1>
  <p v-for="(pokemon, index) in arrayData" :key="index">
        <router-link :to="`/pokemon/${pokemon.name}`">
         {{pokemon.name}}
  </router-link>
  </p>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        const arrayData= ref([])
        //consultando con el ciclo de vida 
        onMounted(async()=>{
            try{
                const res = await fetch('api.json')
                arrayData.value= await res.json()

            }catch (error){
                console.log(error)
            }
        })
       // const fetchData= async () =>{
       //      try{
       //          const res = await fetch('api.json')
                //consumiendo la api con una url
                //const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
       //          arrayData.value= await res.json()

       //      }catch(error){
        //         console.log(error)
        //     }
      //   }
     //    fetchData()
        return{arrayData}
    }

}
</script>

<style>

</style>