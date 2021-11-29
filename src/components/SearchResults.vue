<!-- @format -->

<template>
  <section class="searchApp__results">
    <div class="panelCard padding-all-20">No Results</div>
  </section>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchApp__results {
  max-width: 600px;
  margin: 20px auto;
}
</style>
