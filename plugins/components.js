import Vue from 'vue'
import AppBtn from '~/components/Base/Forms/AppBtn.vue'
import AppTextField from '~/components/Base/Forms/AppTextField'
import AppModal from '~/components/Base/Modals/AppModal.vue'

const components = { AppBtn, AppTextField, AppModal }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
