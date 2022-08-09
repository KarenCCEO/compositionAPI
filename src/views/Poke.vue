<template>

 <!--sin props-> <h1>detalle del pokemon: {{$route.params.nombre}}</h1>-->

 <h1>detalle del pokemon: {{nombre}}</h1>
 <p v-for="(pokemon, index) in arrayData" :key="index">
 {{pokemon.name}}- {{pokemon.url}}
 </p>
</template>

<script>
import { useRoute } from 'vue-router'
import{useFetch} from '../hooks/useFetch'
export default {
    props:['nombre'],
    setup(props){
        console.log(props.nombre)
        const nombreParams= useRoute()
        console.log(nombreParams.params.nombre)
        const {arrayData}=useFetch(`https://pokeapi.co/api/v2/pokemon/${nombreParams}`)
       
        return{arrayData}

    }

}
</script>

<style>

</style>