import { ref, onMounted } from 'vue'

export function useFetch(url){
    const arrayData= ref([])
    //consultando con el ciclo de vida 
    onMounted(async() => {
        try{
            const res = await fetch(url)
            arrayData.value= await res.json()

        }catch (error){
            console.log(error)
        }
    })
   
    return{arrayData}
}