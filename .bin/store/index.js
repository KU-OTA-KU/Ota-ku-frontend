// store/index.ts
import { createStore } from "vuex";
import mostAnime from "./modules/mostAnime.js";
import topSlider from "./modules/topSlider.js";

export const state = () => ({});

export const mutations = {};

export const actions = {};

export const getters = {};

export const modules = {
  mostAnime,
  topSlider,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules,
});
