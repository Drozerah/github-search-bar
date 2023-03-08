import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DummyComponent from '../DummyComponent.vue'

describe('DummyComponent', () => {
  it('should have an h1 element with "Dummy Component" as text content', () => {
    const wrapper = mount(DummyComponent)
    const title = wrapper.find('h1')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual('Dummy Component')
  })
})