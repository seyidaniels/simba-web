/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount, shallowMount } from '@vue/test-utils'
import Button from '../../../components/Base/Forms/AppBtn'

describe('Button Component', () => {
  it('shows a button when link prop is absent', () => {
    const wrapper = mount(Button)
    expect(wrapper.contains('button')).toBe(true)
    // expect(wrapper.contains('a')).toBe(false)
  })
  it('shows the appropriate text', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '<div>Login</div>',
      },
    })
    const text = wrapper.find('div').text()
    expect(text).toBe('Login')
  })
  const wrapper = shallowMount(Button, {
    propsData: {
      color: 'primary',
    },
  })
  it('expects color to be primary color', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Expects method to be clicked on button clicked', () => {

  })
  it('Test button  click event', async () => {
    const buttonComponent = {
      components: {
        'app-btn': Button,
      },
      template: `
        <app-btn v-if='!show' @click='mockCallBack'></app-btn>
        <p v-else >button clicked</p>
      `,
      data() {
        return { show: false }
      },
      methods: {
        mockCallBack() {
          this.show = true;
        },
      },
    }
    const wrapper = mount(buttonComponent)
    await wrapper.find('button').trigger('click')
    expect(wrapper.contains('p')).toBe(true)
  })
})
