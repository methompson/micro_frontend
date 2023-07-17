import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    randomValue: 0,
    orgId: '',
  },
  getters: {
    randomValue: (state) => `${state.randomValue}`,
  },
  mutations: {
    setRandomValue(state, payload) {
      state.randomValue = payload;
    },
    setOrgId(state, payload) {
      state.orgId = payload;
    },
  },
  actions: {
    setRandomValue(context) {
      context.commit('setRandomValue', Math.random());
      context.dispatch('writeMicroAppDataToLocalStorage');
    },
    getHostDataFromLocalStorage(context) {
      // This action gets data from localStorage from the host application. This allows
      // the host application to set data that the client application can use.
      const appData = JSON.parse(localStorage.getItem('appData') || '{}');

      if (appData.orgId) {
        context.commit('setOrgId', appData.orgId);
      }
    },
    writeMicroAppDataToLocalStorage(context) {
      // We write the micro app data to localStorage so that the host application can
      // pick up where it left off and 'hydrate' the local storage.
      localStorage.setItem(
        'microAppData',
        JSON.stringify({
          randomValue: context.state.randomValue,
        }),
      );
    },
    getMicroAppDataFromLocalStorage(context) {
      // This action gets data from localStorage for the client application.
      const appData = JSON.parse(localStorage.getItem('microAppData') || '{}');

      if (appData.randomValue) {
        context.commit('setRandomValue', appData.randomValue);
      }
    },
  },
  modules: {},
});

export default store;
