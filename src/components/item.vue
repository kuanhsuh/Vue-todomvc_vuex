<template>
  <ul>
    <li v-for="todo in todos">
      {{todo.text}} <button>x</button>
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
    }
  }
</script>
