<template>
  <div class="p-4 space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <SelectedUserItems />
      <SelectedSingleItem />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <UserItems />
      <AvailableItems />
    </div>
  </div>
</template>

<script setup>
import SelectedUserItems from '@/components/SelectedUserItems.vue'
import SelectedSingleItem from '@/components/SelectedSingleItem.vue'
import UserItems from '@/components/UserItems.vue'
import AvailableItems from '@/components/AvailableItems.vue'
</script>
