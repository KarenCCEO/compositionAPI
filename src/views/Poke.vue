<template>
 <!-- <h1>detalle del pokemon: {{$route.params.nombre}}</h1>-->
 <h1>detalle del pokemon: {{nombre}}</h1>
</template>

<script>
export default {
    props:['nombre'],
    setup(props){
        console.log(props.nombre)

    }

}
</script>

<style>

</style>