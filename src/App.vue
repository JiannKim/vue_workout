<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" width="70" />
    <Options />
    <Date />
  </div>
</template>

<script>
import Options from "./components/Options";
import Date from "./components/Date";

export default {
  name: "App",
  components: {
    Options,
    Date,
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
