<!-- @format -->

<template>
  <div class="pos-relative searchApp__container">
    <input
      v-model="searchTerm"
      placeholder="Search for statistics"
      type="text"
    />
    <button
      type="button"
      class="button button--primary searchApp__submitButton"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
