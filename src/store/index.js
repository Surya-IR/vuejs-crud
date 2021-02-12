import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userlist: [
      {"id":1,
      "user": "Surya",
      "pass": "Putra"
      },
      {"id":2,
      "user": "Deni",
      "pass": "Deni"
      },
      {"id":3,
      "user": "Tomi",
      "pass": "Tomi"
      },
      {"id":4,
      "user": "Ricky",
      "pass": "Ricky"
      }
  ]
  },
  mutations: {
    createUser(state, newUser){
      state.userlist.push(newUser)
    },
    deleteUser(state, targetUser){
      for(let i = 0; i <= state.userlist.length-1; i++){
        console.log(targetUser)
        console.log(state.userlist[i].id)
        if(targetUser.id === state.userlist[i].id){
          state.userlist.splice(i, 1)
        }
      }
    }
    
  },
  actions: {
  },
  modules: {
  }
})
