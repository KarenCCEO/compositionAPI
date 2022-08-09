<!--Esto es un componente-->
<template>
<h1 :style="{'color': color}">Contador: {{signoPesotes}}</h1>

  
</template>

<script>
import {computed} from 'vue'
export default {
    props: ['contador', 'color'],
    //para modificar la informacion reactiva del contador con la api de composicion 
   setup(props){
    console.log(props.contador)
    const signoPesotes = computed (()=>{
        
        
        return '$' + props.contador
    })
    return{signoPesotes}

   }
   
   //computed:{
    //    signoPeso(){
    //        if(this.contador<=0){
    //            return '-$'+ (this.contador*-1)

    //        }else
           
    //        return '$' + this.contador
    //    }
    //}

}
</script>

