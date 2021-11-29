<!-- @format -->

<template>
  <div class="pos-relative searchApp__container">
    <input
      v-model="searchTerm"
      class="searchApp__input"
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
  props: {},
  data() {
    return {
      searchTerm: "statista",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-relative {
  position: relative;
}

.searchApp__input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  padding: 0 70px 0 30px;
  border-radius: 27.5px;
  border: 1px solid #0b85e5;
  font-size: 15px;
}

.searchApp__container {
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;
  max-width: 746px;
  margin: auto;
}

.button--primary {
  border-color: #0077d5;
  background-color: #0077d5;
  color: #fff;
  position: absolute;
  margin: 0;
  right: 0;
  top: 0;
}

.searchApp__submitButton {
  position: absolute;
  margin: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 0px 0 0 -202px;
  padding: 0 30px;
  border-radius: 27.5px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  vertical-align: middle;
}
</style>
