<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" width="70" />
    <!-- <select> -->
    <!-- <option selected>모든 국가</option> -->
    <Options />
    <!-- </select> -->
  </div>
</template>

<script>
import Options from "./components/Options";

export default {
  name: "App",
  components: {
    Options,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
