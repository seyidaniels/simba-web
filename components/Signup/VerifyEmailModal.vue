<template>
  <app-modal
    :value="show"
    max-width="570"
    show-close-btn
    v-on="$listeners"
    @close="onModalClose"
  >
    <div class="verify-email-modal">
      <div class="modal-header mb-10">
        <img src="~assets/svg/logo/logo.svg" alt="Logo" width="86" />
      </div>
      <email-sent />
      <h3 class="modal-title mt-6">Please verify your email</h3>
      <p class="modal-content mt-4 grey--text">
        A verification link has been sent to <strong>{{ email }}</strong
        >. Please check your mail to access the link and verify your email
        address.
      </p>
      <p class="modal-content mt-4 grey--text">
        If you don’t see it, you may need to check your
        <strong>spam folder.</strong>
      </p>
      <p class="modal-content mt-8 mb-4 grey--text">
        Still can’t find the email?
      </p>
      <app-btn class="primary" width="185" height="50" @click="resendMail">
        Resend email
      </app-btn>
      <p class="modal-content mt-4 grey--text">
        Need help? <strong><a target="_blank" href="#">Contact us</a></strong>
      </p>
    </div>
  </app-modal>
</template>

<script>
import EmailSent from '~/assets/svg/email-sent.svg?inline'
import AppModal from '~/components/Base/Modals/AppModal'
import AppBtn from '~/components/Base/Forms/AppBtn'
export default {
  components: {
    EmailSent,
    AppBtn,
    AppModal,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    resendMail() {
      this.$emit('proceed') // for test
    },
    onModalClose() {
      setTimeout(() => {
        this.$router.push('/login')
      }, 300)
    },
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
