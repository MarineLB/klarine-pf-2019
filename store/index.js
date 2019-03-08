import Prismic from 'prismic-javascript'

export const state = () => ({
  homeDocument: null,
  projects: null,
  isLoading: true,
  contentLoaded: false,
  firstLoad: true
})

export const mutations = {
  SET_HOME(state, data) {
    state.homeDocument = data
  },
  SET_PROJECTS(state, data) {
    state.projects = data
  },
  SET_LOADING(state, boolean) {
    state.isLoading = boolean
  },
  CONTENT_LOADED(state, boolean) {
    state.contentLoaded = boolean
    state.firstLoad = false
  }
}

export const actions = {
  // async nuxtServerInit({ commit, dispatch } ) {
  //   await dispatch('getHomeData');
  // },
  async getHomeData({ commit }) {
    await this.$prismic.api
      .query(Prismic.Predicates.at('document.type', 'home'))
      .then(function(response) {
        commit('SET_HOME', response.results)
      })
  }
}
