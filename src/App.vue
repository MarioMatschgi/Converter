<template>
  <h1>Converter</h1>
  <TabHeader></TabHeader>
</template>

<script>
import TabHeader from "./components/TabHeader";

export default {
  name: "App",
  components: {
    TabHeader,
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
