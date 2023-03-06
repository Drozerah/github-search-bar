import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectionStore = defineStore('selection', () => {
  const selection = ref([])
  const addItem = (item) => {
    selection.value.push(item)
  }
  return { selection, addItem }
})
