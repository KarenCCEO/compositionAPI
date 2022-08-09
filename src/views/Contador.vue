<template>
<h1>Contador: {{contador}}</h1>
<BtnC :textoBoton="'Aumentar'" @accion="aumentar"/>
<BtnC :textoBoton="'Disminuir'" @accion="disminuir"/>
  
</template>

<script>
import BtnC from '@/components/BtnC.vue'
import { userContador } from '@/hooks/useContador'
export default {
    components:{
        BtnC

    },
    setup(){
        return{...userContador()}
    }

}
</script>