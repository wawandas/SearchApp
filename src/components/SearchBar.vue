<!-- @format -->

<template>
  <form class="searchbox-wrap">
    <input
      v-model="searchTerm"
      class="search__input"
      type="search"
      autocomplete="off"
      placeholder="Search for statistics"
      required
    />
    <button
      class="search__submit"
      type="submit"
      @click.prevent="() => $emit('submit', searchTerm)"
    >
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: "statista",
    };
  },
};
</script>

<style scoped>
.searchbox-wrap {
  display: block;
  position: relative;
  margin: 32px auto;
  max-width: 300px;
}

.search__input {
  width: 100%;
  background: none;
  border-radius: 16px;
  font-size: 16px;
  border: 1px solid #0b85e5;
  line-height: 36px;
  text-indent: 16px;
  color: #6a7c92;
}

.search__submit {
  background-color: #0077d5;
  font-size: 16px;
  color: #fff;
  position: absolute;
  right: 0;
  line-height: 36px;
  top: 1px;
  padding: 0 16px;
  margin: 0;
  border-radius: 16px;
  border: none;
  cursor: pointer;
}
</style>
