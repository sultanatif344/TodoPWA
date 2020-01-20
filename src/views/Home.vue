<template>
  <div class="home">
      <Header/>
     <Addtodo/>
    <DisplayTodos />
  </div>
</template>

<script>

import DisplayTodos from '../components/DisplayTodos'
import Addtodo from '../components/Addtodo'
import Header from '../components/Header'
export default {
  name: 'home',
  components: {
     DisplayTodos,
     Addtodo,
     Header
  },
data(){
      return{

      }
    }
}
</script>

<style scoped>

</style>

