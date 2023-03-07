import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectionStore = defineStore('selectionStore', () => {
  const selection = ref([])
  const error = ref('')
  const addItem = (item) => {
    selection.value.push(item)
  }
  const removeItemById = (itemId) => {
    if (itemId) {
      selection.value = selection.value.filter((item) => item.id !== itemId)
    } else {
      error.value = 'Unable to remove item, missing or wrong itemId'
    }
  }
  return { selection, addItem, removeItemById }
})
