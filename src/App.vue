<template>
  <div id="app">
    <MainLogo />
    <Seats class="seats" />
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
  mounted() {
    var token = process.env.VUE_APP_TOKEN;
    console.log(token);
    var data = JSON.stringify({
      TOKEN: "28c19520-f068-472a-a3c9-b76474af4788",
      seat: "ithelp",
      user: ""
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:3000/seats");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "*/*");

    xhr.send(data);
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
