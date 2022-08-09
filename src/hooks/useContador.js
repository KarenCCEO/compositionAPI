//esta logica puede usarse en todos los componentes
import { ref } from '@vue/reactivity';
export function userContador(){
    const contador = ref(0);
    const aumentar = () =>{
        contador.value ++
      }
      const disminuir = () =>{
        contador.value --
      }
      return{contador, aumentar, disminuir}
}