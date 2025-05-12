<template>
  <div class="border p-4">
    <div class="flex flex-wrap">
      <ItemCard
          v-for="item in userItems"
          :key="item.id"
          :item="item"
          :isSelected="selectedUserItems.some(i => i.id === item.id)"
          :onSelect="() => itemStore.toggleUserItem(item)"
      />
    </div>
  </div>
</template>

<script setup>
import { useItemsStore } from '@/stores/items.js'
import ItemCard from './ItemCard.vue'
import {storeToRefs} from "pinia";

const itemStore = useItemsStore()
const {userItems,selectedUserItems} = storeToRefs(itemStore)
</script>
