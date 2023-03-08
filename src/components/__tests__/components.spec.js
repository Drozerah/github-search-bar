import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DummyComponent from '../DummyComponent.vue'

describe('DummyComponent', () => {
  it('has h1', () => {
    const wrapper = mount(DummyComponent)
    expect(wrapper.find('h1').exists())
  })
})