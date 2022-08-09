<template>
  <div class="about">
    <!--Paso 3: Agregar la nueva etiqueta -->
    <!--Paso 4: Enviar los datos al otro componente con :contador="contador-->
    <!--Paso 5: llamar a los props en el componente titulo.vue-->
    <Titulo :contador="contador" :color="color"/>
    <h1 :style="{'color': color }">contador: {{contador}}</h1>
    <!--<button @click="aumentar">+</button>-->
    <!--<button @click="disminuir">-</button>-->
    <BtnC :textoBoton="'Aumentar'" @accion="aumentar"></BtnC>
    <BtnC :textoBoton="'Disminuir'" @accion="disminuir"></BtnC>
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
//paso 1: importar el componente
import Titulo from '@/components/Titulo.vue';
import BtnC from '@/components/BtnC.vue';
export default {
  //paso 2: crear el componente 
  components:{
    Titulo,
    BtnC
},

  setup(){
    const contador = ref(0);
    const texto = ref('')
    const aumentar = () =>{
      contador.value ++
    }
    const disminuir = () =>{
      contador.value --
    }
    const color = computed(()=>{
      if(contador.value < 0){
        return 'red'
      }else{
        return 'blue'
      }
    })
    return{contador, aumentar, disminuir, color, texto}
  }
}
</script>
