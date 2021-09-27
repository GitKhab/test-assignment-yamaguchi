const state = () => ({
  position: 'center'
})

const mutations = {
  setPositionTop(state) {
    state.position = 'top'
  },

  setPositionBottom(state) {
    state.position = 'bottom'
  }
}

const actions = {
  liftTable({ commit }) {
    if (state.position !== 'top') {
      commit('setPositionTop')
    }
  },

  lowerTable({ commit }) {
    if (state.position !== 'bottom') {
      commit('setPositionBottom')
    }
  }
}

export default {
  state,
  mutations,
  actions
}
