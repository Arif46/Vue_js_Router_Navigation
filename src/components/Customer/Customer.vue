<template>
   <div>
       <h2>this is customer page</h2>
       <p>LoadedId:{{loadedId}}</p>
        <button  class="btn btn-success" @click="navigationToHome">Go to Home page</button>
   </div>
 
  
</template>
<script>
   //navigation click korle home page chole jabe
 export default{
        data(){
             return {
                 loadedId:this.$route.params.id
             }
        },
        watch: {
            '$route'(to){
                this.loadedId = to.params.id;
            }
        },
       methods: {
           navigationToHome(){
               this.$router.push('/')
           }
           }

     }

</script>