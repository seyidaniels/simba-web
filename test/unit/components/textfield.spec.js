/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount, shallowMount } from '@vue/test-utils'
import AppTextField from '../../../components/Base/Forms/AppTextField'

describe('TextField Component', () => {
  const textField = mount(AppTextField)
  it('should show an input tag', function () {
    expect(textField.contains('input')).toBe(true)
  })
  it('shows an input tag with password field', () => {
    const passwordWrapper = mount(AppTextField, {
      propsData: {
        type: 'password',
      },
    })
    expect(passwordWrapper.html()).toMatchSnapshot()
  })
  it('expects icon to be appended', () => {
    const textFieldWrapper = mount(AppTextField, {
      props: {
        appendIcon: 'fa-user',
      },
    })
    expect(textFieldWrapper.html()).toMatchSnapshot()
  })

  it('expects icon to be pre-pended', () => {
    const prePendComponent = {
      components: {
        'app-text-field': AppTextField,
      },
      template: `
        <app-text-field
          placeholder="AppTextField with a custom prepend-inner icon"
        >
        <template #prepend-inner>
          <img
            width="24"
            height="24"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-random-thin.png"
          />
        </template>
        </app-text-field>
      `,
    }

    const textFieldWrapper = mount(prePendComponent)
    expect(textFieldWrapper.html()).toMatchSnapshot()
  })
})
