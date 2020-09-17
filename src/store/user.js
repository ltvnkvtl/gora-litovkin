import firebase from 'firebase/app'

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true
      state.user.uid = payload
    },
    UNSET_USER(state) {
      state.user = {
        isAuthenticated: false,
        uid: null
      }
    }
  },
  actions: {
    async SIGNIN({ commit }, payload) {
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      try {
        await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        commit('SET_PROCESSING', false)
      } catch (e) {
        commit('SET_PROCESSING', false)
        commit('SET_ERROR', e.message)
      }
    },
    async SIGNOUT() {
      await firebase.auth().signOut()
      this.$router.push('/signin')
    },
    STATE_CHANGED({ commit }, payload) {
      if (payload) {
        commit('SET_USER', payload.uid)
      } else {
        commit('UNSET_USER')
      }
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated
  }
}