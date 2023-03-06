<template>
    <BaseCards :data='store.selection' />
</template>

<script setup>
import BaseCards from '@components/BaseCards.vue'
import { useSelectionStore } from '@stores/selection'
const store = useSelectionStore()
</script>
