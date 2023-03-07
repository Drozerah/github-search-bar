<template>
  <div class="cards">
      <div
        class="card"
        v-for="(item, idx) of reverseArray(data)"
        :key="`item_${idx}`"
        >
        <div class="card-content">
          <div class="content">
            <div class="content-header">
              <div
                v-if="item.searchTerm"
              >Term of search : <span class="tag is-link is-light">{{ item.searchTerm }}</span>
              </div>
              <button
                class="button is-outlined is-small"
                v-if="isDeleteBtn"
                @click="store.removeItemById(item.id)"
              >Delete</button>
            </div>
            <h3 class="content-title">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.html_url" target="_blank" rel="noopener noreferrer">{{ item.html_url }}</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { reverseArray } from '@utils'
import { useSelectionStore } from '@stores/SelectionStore'
const store = useSelectionStore()
defineProps({
  data: {
    type: Array
  },
  isDeleteBtn: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.cards{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 25px 0;
  .content-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content-title{
    margin: 15px 0;
  }
}
</style>
