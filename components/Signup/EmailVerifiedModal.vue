<template>
  <app-modal :value="show" max-width="570" show-close-btn v-on="$listeners">
    <div class="verify-email-modal">
      <div class="modal-header mb-10">
        <img src="~assets/svg/logo/logo.svg" alt="Logo" width="86" />
      </div>
      <email-verified />
      <h3 class="modal-title mt-8">Your email has been verified!</h3>
      <p class="modal-content mt-4 mb-10 grey--text">
        Thank you, your email has been verified. You can continue with the sign
        up process by setting up your phone number and transaction pin
      </p>
      <app-btn class="primary" width="185" height="50" @click="proceed">
        Continue
      </app-btn>
      <p class="modal-content mt-8 grey--text text--lighten-2">
        Thank you for choosing us
      </p>
    </div>
  </app-modal>
</template>

<script>
import EmailVerified from '~/assets/svg/email-verified.svg?inline'
import AppModal from '~/components/Base/Modals/AppModal'
import AppBtn from '~/components/Base/Forms/AppBtn'
export default {
  components: {
    EmailVerified,
    AppBtn,
    AppModal,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    proceed() {},
  },
}
</script>

<style scoped lang="scss">
.verify-email-modal {
  padding: 48px 58px;
  text-align: center;
  //display: flex;
  //justify-content: center;
  @include breakpoint('xs') {
    padding: 38px 18px;
  }
  .modal-title {
    font-weight: bold;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    @include breakpoint('xs') {
      font-size: 22px;
      line-height: 28px;
    }
  }

  .modal-content {
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
    @include breakpoint('xs') {
      font-size: 13px;
      line-height: 18px;
    }
  }
  > svg {
    @include breakpoint('xs') {
      height: 100px;
    }
  }
}
</style>
