<template>
  <div class="border p-4">
    <div class="flex flex-wrap">
      <ItemCard
          v-for="item in availableItems"
          :key="item.id"
          :item="item"
          :isSelected="selectedAvailableItem?.id === item.id"
          :onSelect="() => itemStore.selectAvailableItem(item)"
      />
    </div>
  </div>
</template>

<script setup>
import { useItemsStore } from '@/stores/items.js'
import ItemCard from './ItemCard.vue'
import {storeToRefs} from "pinia";

const itemStore = useItemsStore()
const {selectedAvailableItem,availableItems}=storeToRefs(itemStore)
</script>
