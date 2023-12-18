export const state = () => ({
    cart:[]
  })
  
  export const getters = {
    getCart(state) {
      return state.cart
    }
  }
  
  export const mutations = {
    add(state,value) {
      state.cart = [...state.cart,value]
    },
    remove(state,value){
        state.cart = state.cart.filter(cart => cart._id != value.id)
    },
    change(state,value){
      state.cart = value
    }
  }