<template>
  <div
      class="border p-2 m-1 cursor-pointer text-center"
      :class="{ 'bg-blue-100': isSelected }"
      @click="handleClick"
  >
    {{ item.name }}
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  isSelected: Boolean,
  onSelect: Function
})

function handleClick() {
  if (typeof props.onSelect === 'function') {
    props.onSelect()
  }
}
</script>

