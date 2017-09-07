<template>
    <li>
      {{todo.id}}-{{todo.text}} <button @click="deleteTodo(todo)">x</button>
      <button @click="toggleUpate">update</button>
      <input type="text" v-model="editInput" v-if="showUpdate">
      <button
        v-if="showUpdate"
        @click="editTodo(todo, editInput)">
          Submit Update
      </button>
    </li>

</template>

<script>
import {mapActions} from 'vuex';

  export default {
    name: 'item',
    props: ['todo'],
    data () {
      return {
        showUpdate: false,
        editInput: ''
      }
    },
    computed: {
      todos () {
        return this.$store.state.todos
      }
    },
    methods: {
      toggleUpate () {
        this.showUpdate = !this.showUpdate
        console.log('toggleUpdate',this.showUpdate)
      },
      deleteTodo (todo) {
        console.log('component deleteTodo')
        this.$store.dispatch('deleteTodo', todo)
      },
      editTodo(todo, value){
        this.$store.dispatch({
          type: 'editTodo',
          todo: todo,
          value: value
        })
        this.showUpdate = false
      }
    }
  }
</script>
