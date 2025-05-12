<template>
  <div class="border p-4">
    <div class="flex flex-wrap">
      <ItemCard
          v-for="item in selectedUserItems"
          :key="item.id"
          :item="item"
          :isSelected="true"
      />
    </div>
    <p class="mt-2 text-sm">Selected: {{ selectedUserItems.length }} / 6</p>
  </div>
</template>

<script setup>
import { useItemsStore } from '@/stores/items.js'
import ItemCard from './ItemCard.vue'
import {storeToRefs} from "pinia";

const itemStore = useItemsStore()
const {selectedUserItems} = storeToRefs(itemStore)
</script>
