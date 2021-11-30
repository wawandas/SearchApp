<!-- @format -->

<template>
  <section class="searchApp__results">
    total amount of items: ({{ totalAmountItems }})
    <br />
    items per page: ({{ items.length }})
    <ul class="list list--blank">
      <li
        v-for="item in items"
        three-line
        :key="item.identifier"
        data-gtm-contenttype="topic"
        class="list__item list__item--searchContentTypeTopic pos-relative"
      >
        <a
          :href="item.link"
          title="Statistiken und Zahlen zur Corona-Pandemie 2019-2021"
          class="list__itemWrap text--linkReset padding-vertical-15"
          ><i
            class="list__itemIcon list__itemIcon--26 iconSprite iconSprite--topic"
          ></i>
          <div data-gtm="searchResult__position--1 " class="list__itemText">
            <div
              class="h5 text-color--primaryDark margin-bottom-0 text-ellipsis"
            >
              {{ item.title }}
            </div>
            <div class="font-size-s text-ellipsis">
              {{ item.description }}
            </div>
          </div></a
        >
      </li>
    </ul>
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
    totalAmountItems: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
