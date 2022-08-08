<template>
  <div class="home">
    <h1>Contador:{{contador}}</h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>



export default {
  data(){
    return{
      contador: 0
    }

  },
  methods:{
    aumentar(){
      this.contador ++
    },
    disminuir(){
      this.contador --
    }
  }
  
}
</script>
