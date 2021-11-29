<!-- @format -->

<template>
  <v-app>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <SearchBar @submit="onSubmit" :isLoading="isLoading" />
        <SearchResults v-show="items.length" :items="items" />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { getSearchResults } from "./services/index";

export default {
  name: "App",

  components: {
    SearchBar,
    SearchResults,
  },

  data: () => ({
    isLoading: false,
    items: [],
  }),

  methods: {
    async onSubmit(keyword) {
      this.isLoading = true;
      try {
        const {
          data: { items = [] },
        } = await getSearchResults({ keyword });

        this.items = items;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
<style>
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}

.v-application--wrap {
  background-color: #0f2741;
}
</style>
