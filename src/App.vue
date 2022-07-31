<template>
  <el-input v-model="input" placeholder="Please input" /> 
  <el-button @click="alertFunction">Default</el-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import apiClient from './core/apiclient.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const input = ref('')
    function alertFunction() {
      console.log(input.value);
    }

        onMounted(async () => {
                       const response = await apiClient.get("Function1", { name: "Faisal" });
            Promise.resolve(response.data).then((value) => {
              console.log(value);
              // expected output: 123
            });
        });

    return{input, alertFunction}  
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
