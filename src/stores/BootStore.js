import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBootStore = defineStore('boot', () => {
  const password = ref('izypay')
  return { password }
})
