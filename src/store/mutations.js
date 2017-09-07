export const state = {
  todos: [
    {
      id: 1,
      text: "learn vue"
    },
    {
      id: 2,
      text: "learn css"
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
  editTodo (state, payload) {
    payload.todo.text = payload.value
  },
  deleteTodo (state, payload) {
    state.todos.splice(state.todos.indexOf(payload), 1)
  }
}

export const actions = {
  addTodo (context, payload) {
    context.commit('addTodo', payload)
  },
  deleteTodo (context, payload) {
    context.commit('deleteTodo', payload)
  },
  editTodo (context, payload) {
    context.commit('editTodo', payload)
  }
}