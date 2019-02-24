import Vue from 'vue';
import Vuex from 'vuex';
import cv from '../cv';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cv: cv
  },
  mutations: {},
  actions: {}
});
