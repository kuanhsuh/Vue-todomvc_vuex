export const state = {
  todos: [
    {
      id: 1,
      text: "learn vue"
    }
  ]
}

export const mutations = {
  addTodo (state, payload) {
    console.log('mutation addTodo');
    state.todos.push({
      id: state.todos.length+1,
      text: payload
    })
  },
  deleteTodo (state, payload) {
    console.log('mutation deleteTodo')
    state.todos.splice(state.todos.indexOf(payload), 1)
  }
}

  // deleteTodo (state, { todo }) {
  //   state.todos.splice(state.todos.indexOf(todo), 1)
  // },

export const actions = {
  addTodo (context, payload) {
    console.log('action addTodo');
    context.commit('addTodo', payload)
  },
  deleteTodo (context, payload) {
    console.log('action deleteTodo');
    context.commit('deleteTodo', payload)
  }
}