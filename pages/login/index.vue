<template>
  <div class="login-page">
    <v-row no-gutters justify="center">
      <v-col cols="10" sm="8" md="10" lg="8" xl="6">
        <div class="d-flex justify-end mt-9 mt-md-15">
          <img
            class="d-md-none"
            src="~assets/svg/logo/logo.svg"
            alt="Logo"
            width="104"
          />
        </div>
        <p class="signup-link">
          Don’t have an account? <n-link to="/sign-up">Sign Up</n-link>
        </p>
        <div class="auth-form-card">
          <h5 class="mb-2">Sign In</h5>
          <p class="label--text sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor i
          </p>
          <login-form />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LoginForm from '~/components/Login/LoginForm'
export default {
  components: {
    LoginForm,
  },
  layout: 'auth',
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  .signup-link {
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 13px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.408px;
    @include breakpoint('xs') {
      margin-bottom: 30px;
    }
    a {
      font-weight: bold;
    }
  }
  ::v-deep {
    .row {
      height: 100%;
    }
  }
  .auth-form-card {
    background: #fff;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
    border-radius: 18px;
    min-height: 607px;
    width: 100%;
    padding: 66px 80px;
    @include breakpoint('md') {
      padding: 46px 55px;
    }
    @include breakpoint('xs') {
      min-height: 410px;
      padding: 35px 36px;
      margin-bottom: 40px;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 21px;
    }
    p.sub-text {
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.408px;
      @include breakpoint('xs') {
        font-size: 15px;
      }
    }
  }
}
</style>
