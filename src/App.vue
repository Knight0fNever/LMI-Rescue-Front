<template>
  <div id="app">
    <MainLogo/>
    <Seats class="seats"/>
  </div>
</template>

<script>
import MainLogo from "./components/MainLogo";
import Seats from "./components/Seats";

export default {
  name: "app",
  components: {
    MainLogo,
    Seats
  },
  data: function () {
    return {
      seats: []
    }
  },
  mounted() {
    this.$store.commit('loadSeats');
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.seats {
  margin-top: 5em;
}
</style>
