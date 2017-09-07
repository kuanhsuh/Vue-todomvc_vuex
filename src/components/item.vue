<template>
  <ul>
    <li v-for="todo in todos">
      {{todo.id}}-{{todo.text}} <button @click="deleteTodo(todo)">x</button>
    </li>
  </ul>
</template>

<script>
import {mapActions} from 'vuex';

  export default {
    name: 'item',
    computed: {
      todos () {
        return this.$store.state.todos
      }
    },
    methods: {
      deleteTodo (todo) {
        console.log('component deleteTodo')
        this.$store.dispatch('deleteTodo', todo)
      }
    }
  }
</script>
