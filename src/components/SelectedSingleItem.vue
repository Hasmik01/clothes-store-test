<template>
  <div class="border p-4 text-center min-h-[80px] flex items-center justify-center">
    <span v-if="selectedAvailableItem">{{ selectedAvailableItem.name }}</span>
    <span v-else class="text-gray-400">SELECTED ITEM</span>
  </div>
</template>

<script setup>
import { useItemsStore } from '@/stores/items.js'
import {storeToRefs} from "pinia";

const itemStore = useItemsStore()
const {selectedAvailableItem}=storeToRefs(itemStore)
</script>
