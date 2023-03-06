<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseModal from '@components/BaseModal.vue'
</script>

<template>
  <header>
      <BaseModal />
      <nav>
        <RouterLink to="/">Search</RouterLink>
        <RouterLink to="/selection">My Selection</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div>Coded by <a href="https://gist.github.com/Drozerah/c21e5763d4d92bc429b995854e27f4ac#file-about-me-md" target="_blank" rel="noopener noreferrer">Thomas Gauthier</a></div>
  </footer>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-size:  18px;
}

nav a.router-link-exact-active {
  color: var(--black);
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-color: var( --violet);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

footer{
  text-align: center;
  margin-top: auto;
}
</style>
