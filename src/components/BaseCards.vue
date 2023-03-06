<template>
  <div class="cards">
      <div
        v-for="(item, idx) of data"
        :key="`item_${idx}`"
        class="card"
        >
        <div class="card-content">
          <div class="content">
            <div
            v-if="item.searchTerm"
            >Term of search : <span class="tag is-link is-light">{{ item.searchTerm }}</span></div>
            
            <h3 class="content-title">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.html_url" target="_blank" rel="noopener noreferrer">{{ item.html_url }}</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array
  }
})
</script>

<style lang="scss" scoped>
.cards{
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  margin: 25px 0;
  .content-title{
    margin: 15px 0;
  }
}
</style>
