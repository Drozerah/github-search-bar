<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-if="isModal"
        class="modal">
        <div class="modal__content">
          <p class="greeting">Welcome! <br>Please enter the password that was sent to you via email.</p>
          <p 
            class="error"
            v-if="error"
          >{{ error }}</p>
          <div class="form">
            <input
              class="input"
              ref="input"
              type="password"
              v-model="password"
              v-on:keyup.enter="fakeAuth"
              @input="validate"
            >
            <button
              :disabled="isDisabled"
              @click="fakeAuth"
            >Login</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBootStore } from '@stores/BootStore'
const store = useBootStore()
const isModal = ref(true)
const input = ref(null)
const password = ref('')
const isDisabled = ref(true)
const error = ref('')
// fake authentication
const fakeAuth = () => {
 if (password.value == store.password) {
    error.value = ''
    password.value = ''
    isModal.value = false
  } else {
    error.value = 'Invalid password'
  }
}
// minimal password validation
const validate = () => {
  if ((password.value).length > 0) {
    isDisabled.value = false
  } else {
    error.value = ''
    isDisabled.value = true
  }
}
onMounted(() => {
  input.value.focus()
})
</script>

<style lang="scss" scoped>
.modal{
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(3.5px);
  &__content{
    padding: 20px;
    background-color: var(--white);
    width: 400px;
    border-radius: 4px;
  }
}
.greeting{
  margin-bottom: 15px;
}
.form{
  display: flex;
  gap: 3px;
  .control{
    width: 100%;
  }
  button{
    padding: 0 15px;
    color: var(--white);
    background-color: var(--green);
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    &:disabled{
      background-color: var(--black);
      cursor: not-allowed;
    }
  }
}
.error{
  color: var(--red);
}
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.35s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
</style>
