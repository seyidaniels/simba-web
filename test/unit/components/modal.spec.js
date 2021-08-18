/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount, shallowMount } from '@vue/test-utils'
import AppModal from '../../../components/Base/Modals/AppModal'

describe('Modal Component', () => {
  it('Modal should be triggered on Button click', function() {
    const modalComp = {
      components: {
        AppModal,
      },
      template: `<app-modal :v-model="showModal" header-title="Add User" width="43%">
        <slot>
          <div class="mt-5">
            <h3 class="heading-3">Modal without Header</h3>
            <p class="body">Body</p>
            <p class="title">Title</p>
          </div>
        </slot>
      </app-modal>`,
      mounted() {
        this.showModal = true
      },
      data() {
        return {
          showModal: false,
        }
      },
    }
    const wrapper = mount(modalComp)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
