export const state = () => ({
    isLoggedIn:false
  })
  
  export const getters = {
    getCounter(state) {
      return state.isLoggedIn
    }
  }
  
  export const mutations = {
    change(state,value) {
      state.isLoggedIn = value
    },
  }