<!-- @format -->

<template>
  <div class="d-flex mt-5">
    <v-text-field
      v-model="searchTerm"
      placeholder="Search for statistics"
      solo
      dense
      required
    ></v-text-field>
    <v-btn
      class="submit-btn"
      depressed
      color="primary"
      :loading="isLoading"
      :disabled="isLoading"
      @click="() => $emit('submit', searchTerm)"
      >Search</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchTerm: "statista",
    };
  },
};
</script>

<style scoped>
.d-flex {
  position: relative;
}

.submit-btn {
  position: absolute;
  top: 1px;
  right: 1px;
}
</style>
