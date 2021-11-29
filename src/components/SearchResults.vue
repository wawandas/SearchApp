<!-- @format -->

<template>
  <section class="searchApp__results">
    <v-card class="mx-auto">
      <v-subheader>total amount of items: ({{ items.length }})</v-subheader>
      <v-list-item v-for="item in items" three-line :key="item.identifier">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
