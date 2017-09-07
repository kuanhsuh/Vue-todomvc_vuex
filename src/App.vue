<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>TodoMVC with Vuex</h1>
    <input type="text" v-model="inputTodo">{{inputTodo}}
    <button @click="addTodo">Add Todo</button>
    <item></item>
  </div>
</template>

<script>
import item from './components/item.vue'

export default {
  name: 'app',
  components: {
    'item': item,
  },
  data () {
    return {
      inputTodo: ''
    }
  },
  created() {
      // console.log(this.$store.state.todos)
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.inputTodo)
      this.inputTodo=''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
