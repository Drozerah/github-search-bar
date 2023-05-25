import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBootStore = defineStore('bootStore', () => {
  const password = ref('peaks')
  return { password }
})
