/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount, shallowMount } from '@vue/test-utils'
import CodeInput from '../../../components/Base/Security/CodeInput'

describe('Code Input  Component', () => {
  it('code input should show input with default length', () => {
    const wrapper = mount(CodeInput)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('code input should show input with length of 4', () => {
    const wrapper = mount(CodeInput, {
      propsData: {
        length: 4,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('code input should be able to emit data', async () => {
    const wrapper = mount(CodeInput)
    wrapper.vm.$emit('update:done', '123456')
    await wrapper.vm.$nextTick() // Wait until $emits have been handled
    expect(wrapper.emitted()['update:done'][0][0]).toBe('123456')
  })
  it('tests if focus is on the first element ', () => {
    const wrapper = mount(CodeInput, { attachToDocument: true })
    const input = wrapper.find({ ref: 'pin-input-0' }).element
    expect(input).toBe(document.activeElement)
  })
  it('handles backspace correctly', async () => {
    const wrapper = mount(CodeInput, { attachToDocument: true })
    const firstInputElement = wrapper.find({ ref: 'pin-input-0' })
    await firstInputElement.setValue('1')
    await wrapper.vm.focusOnElement(1)
    await wrapper.trigger('keyup', { event: this, index: 1 })
    expect(firstInputElement.element).toBe(document.activeElement)
  })
})
