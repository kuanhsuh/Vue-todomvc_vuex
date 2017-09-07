export const state = {
  todos: [
    {
      text: "learn vue"
    }
  ]
}

export const mutations = {
  addTodo (state, payload) {
    console.log('mutation addTodo');
    state.todos.push({
      text: payload
    })
  }
}

export const actions = {
  addTodo (context, payload) {
    console.log('action addTodo');
    context.commit('addTodo', payload)
  }
}

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
// })