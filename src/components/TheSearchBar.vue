<template>
    <div 
      class="message is-danger"
      v-show="isError"
    >
    <div class="message-body">
      {{ isError }}
    </div>
    </div>
    <o-autocomplete
      ref="autocomplete"
      :data="data"
      placeholder="e.g. Component"
      field="title"
      :debounce-typing="500"
      :openOnFocus="data.length ? true : false"
      @typing="getAsyncData"
      @select="(option) => (selected = option)"
    >
      <template #default="props">
        <div class="media-content">
          {{ props.option.name }}
        </div>
      </template>
      <template #footer>
        <div class="fetching center"
          v-if="isFetching"
        >
          Searching...
        </div>
        <div class="center"
          v-if="!isFetching && !name"
        >
          Please enter a term of search
        </div>
        <div class="center"
          v-if="!isFetching && name && !data.length"
        >
          Sorry, there is no result for the search term "{{ name }}"
        </div>
        <div class="center"
          v-if="!isFetching && name && data.length"
        >
          <button 
            class="btn"
            @click="getMoreAsyncData"
            >Add {{resultsPerPage }} more results for "{{ name }}"</button>
        </div>
      </template>
    </o-autocomplete>
    <BaseCards :data='selection'/>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useSelectionStore } from '@stores/selection'
import BaseCards from '@components/BaseCards.vue'
const store = useSelectionStore()
import { Octokit } from '@octokit/core'
const octokit = new Octokit()
const autocomplete = ref(null)
const data = ref([])
const page = ref(1)
const isFetching = ref(false)
const name = ref('')
const selected = ref(null)
const isError = ref(false)
const selection = ref([])
const selectionName = ref([])
const resultsPerPage = ref(10)

async function getAsyncData(_name) {

  // new search
  if (name.value !== _name) {
    name.value = _name
    data.value = []
    page.value = 1
  }

  // string cleared
  if (!_name.length) {
    data.value = []
    page.value = 1
    return
  }

  try {
    isFetching.value = true
    const response = await octokit.request(`GET /search/repositories?page=${page.value}&per_page=${resultsPerPage.value}`, {
      q: `${name.value} in:file language:vue`,
      sort: 'stars',
      order: 'desc'
    })
    const { items } = response.data
    data.value = [...data.value, ...items]

  } catch (error) {
    isError.value = error
    console.error(error)
  } finally {
    isFetching.value = false
  }

}

const getMoreAsyncData = () => {
  page.value += 1
  getAsyncData(name.value)
  autocomplete.value.focus()
}

watch(selected, (newValue) => {
  if (!selectionName.value.includes(newValue.name)) {
    selectionName.value.push(newValue.name)
    selection.value.push(newValue)
    newValue.searchTerm = name.value
    store.addItem(newValue)
  }
})

</script>

<style scoped lang='scss'>
.fetching {
  color: #7957ff;
}
.autocomplete .dropdown-menu {
  transform: translateY(2px);
}
.input{
  &:focus{
    box-shadow: 0 0 0 0.125em rgb(121 87 213 / 25%);
  }
}
.btn{
  color:var(--white);
  background-color: var(--violet);
  padding: 2px 8px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
</style>
