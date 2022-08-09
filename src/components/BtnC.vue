
<template>
<!--Boton cusando emit directamente -->
<button @click="$emit('accion')">{{textoBoton}}</button>
<!--Boton con setup -->
  <button @click="accionHijo">{{textoBoton}}</button>
</template>

<script>
export default {
    props:['textoBoton'],
    //siempre agregar el props y context
    setup(props, context){
        const accionHijo = () =>{
            context.emit('accion')

        }
        return{accionHijo}
    }

}
</script>

