<!-- @format -->

<template>
  <div id="app">
    <SearchBar />
    <SearchResults />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import SearchResults from "./components/SearchResults.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    SearchResults,
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

.searchApp__container {
  max-width: 600px;
  margin: 20px auto;
}
.searchApp__submitButton {
  position: absolute;
  margin: 0;
  right: 0;
  top: 0;
}
.searchApp__results {
  max-width: 600px;
  margin: 20px auto;
}
</style>
