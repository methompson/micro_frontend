import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orgId: '',
  },
  getters: {},
  mutations: {
    setOrgId(state, orgId) {
      state.orgId = orgId;
    },
  },
  actions: {
    writeToLocalStorage(context) {
      localStorage.setItem(
        'appData',
        JSON.stringify({
          orgId: context.state.orgId,
        }),
      );
      window.eventBus?.emit('appDataChange');
    },
    setOrgId({ commit, dispatch }, orgId) {
      commit('setOrgId', orgId);
      dispatch('writeToLocalStorage');
    },
  },
  modules: {},
});
