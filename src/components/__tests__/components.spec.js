import { describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils'
// import { createPinia } from 'pinia'
// import sinon from 'sinon'


import DummyComponent from '../DummyComponent.vue'
describe('DummyComponent', () => {
  it('should have an h1 element with "Dummy Component" as text content', () => {
    const wrapper = mount(DummyComponent)
    const title = wrapper.find('h1')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual('Dummy Component')
  })
})

// import BaseModal from '../BaseModal.vue'
// describe('BaseModal', () => {
//   const pinia = createPinia()
//   const wrapper = mount(BaseModal, {
//     global: {
//       plugins: [pinia],
//       stubs: { teleport: true },
//     }
//   })
//   const clickValidateStub = sinon.stub()
//   wrapper.setMethods({ validate: clickValidateStub })
//   const modal = wrapper.find('.modal')
//   it('should be present in the DOM', () => {
//     expect(modal.exists()).toBe(true)
//   })
//   it('should have an element with the class of "greeting" and the text of "Welcome! Please enter the password that was sent to you via email."', () => {
//     const element = modal.find('.greeting')
//     expect(element.text()).toEqual('Welcome! Please enter the password that was sent to you via email.')
//   })
//   it('should not have an element with the class of "error"', () => {
//     const error = modal.find('.error')
//     expect(error.exists()).toBe(false)
//   })
//   it('should have an element with the class of "form"', () => {
//     const form = modal.find('.form')
//     expect(form.exists()).toBe(true)
//   })
//   it('should have an input element', () => {
//     const input = modal.find('input')
//     expect(input.exists()).toBe(true)
//   })
//   it('should have a button element with the text of "Login" and a disabled property set to true', () => {
//     const button = modal.find('button')
//     expect(button.exists()).toBe(true)
//     expect(button.text()).toEqual('Login')
//     expect(button.element.disabled).toBe(true)
//   })
//   it('should change button disabled property to false', async () => {
//     const input = await modal.find('input')
//     const button = await modal.find('button')
//     await input.setValue('value')
//     expect(input.element.value).toBe('value')
//     expect(button.element.disabled).toBe(false)
//   })
//   it('should display an element with the class of ".error" and the text content of "Invalid password"', async () => {
//     const input = await modal.find('input')
//     const button = await modal.find('button')
//     await input.setValue('value')
//     await button.trigger('click')
//     expect(clickValidateStub.called).toBe(true)
//     expect(input.element.value).toBe('value')
//     expect(button.element.disabled).toBe(false)
//     const error = await modal.find('.error')
//     expect(error.exists()).toBe(true)
//     expect(error.text()).toEqual('Invalid password')
//   })
// })