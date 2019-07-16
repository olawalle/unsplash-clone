import Vue from 'vue';
import Vuex from 'vuex';

import * as constants from './constants'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictureData: [],
    loading: false,
    hasSearched: false
  },
  mutations: {
    [constants.SAVE_PICTURE_DATA] (state, data) {
      state.pictureData = data
    },
    [constants.LOADING_STATUS] (state, data) {
      state.loading = data
    },
    [constants.HAS_SEARCHED] (state, data) {
      state.loading = data
    }
  },
  actions: {

  },
  getters: {
    getPictures: (state) => {
      return state.pictureData
    },
    loadingStatus: (state) => {
      return state.loading
    }
  }
});
