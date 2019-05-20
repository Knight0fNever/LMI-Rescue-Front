import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seats: []
  },
  mutations: {
    loadSeats(state) {
      var token = process.env.VUE_APP_TOKEN;
      var req = axios
        .get("http://54.67.117.30:3000/seats", {
          headers: { "x-access-token": token }
        })
        .then(function (response) {
          state.seats = response.data;
        });
    }
  },
  actions: {

  }
})
