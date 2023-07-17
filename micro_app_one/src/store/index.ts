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
    getAppDataFromLocalStorage(context) {
      const appData = JSON.parse(localStorage.getItem('appData') || '{}');

      if (appData.orgId) {
        context.commit('setOrgId', appData.orgId);
      }
    },
    writeMicroAppDataToLocalStorage(context) {
      localStorage.setItem(
        'microAppData',
        JSON.stringify({
          randomValue: context.state.randomValue,
        }),
      );
    },
    getMicroAppDataFromLocalStorage(context) {
      const appData = JSON.parse(localStorage.getItem('microAppData') || '{}');

      if (appData.randomValue) {
        context.commit('setRandomValue', appData.randomValue);
      }
    },
  },
  modules: {},
});

export default store;
