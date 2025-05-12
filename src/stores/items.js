import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemsStore = defineStore('items', () => {
  // Вещи у пользователя (левая нижняя колонка)
  const userItems = ref([
    { id: 1, name: 'Shoes 1' },
    { id: 2, name: 'Shoes 2' },
    { id: 3, name: 'Shoes 3' },
    { id: 4, name: 'Shoes 4' },
    { id: 5, name: 'T-shirt 1' },
    { id: 6, name: 'T-shirt 2' },
    { id: 7, name: 'T-shirt 3' },
    { id: 8, name: 'T-shirt 4' }
  ])

  // Вещи на выбор (правая нижняя колонка)
  const availableItems = ref([
    { id: 11, name: 'Jacket 1' },
    { id: 12, name: 'Jacket 2' },
    { id: 13, name: 'Jacket 3' },
    { id: 14, name: 'Jacket 4' },
    { id: 15, name: 'Hoodie 1' },
    { id: 16, name: 'Hoodie 2' },
    { id: 17, name: 'Hoodie 3' },
    { id: 18, name: 'Hoodie 4' }
  ])

  // Выбранные пользователем вещи (макс. 6)
  const selectedUserItems = ref([])

  // Выбранная вещь из available (только одна)
  const selectedAvailableItem = ref(null)

  // Добавить/удалить вещь из выбранных пользователем
  function toggleUserItem(item) {
    const index = selectedUserItems.value.findIndex(i => i.id === item.id)
    if (index !== -1) {
      selectedUserItems.value.splice(index, 1)
    } else if (selectedUserItems.value.length < 6) {
      selectedUserItems.value.push(item)
    }
  }

  // Установить выбранную вещь из availableItems
  function selectAvailableItem(item) {
    selectedAvailableItem.value = item
  }

  return {
    userItems,
    availableItems,
    selectedUserItems,
    selectedAvailableItem,
    toggleUserItem,
    selectAvailableItem
  }
})
