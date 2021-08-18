<template>
  <v-form class="login-form mt-8" @submit.prevent="processLogin">
    <app-text-field
      v-model="email"
      v-validate="'required|email'"
      label="Email address"
      type="email"
      data-vv-name="Email address"
      :error-messages="errors.collect('Email address')"
      required
      email-auto-complete
    ></app-text-field>

    <app-text-field
      v-model="password"
      v-validate="'required|min: 6'"
      class="mt-6"
      label="Password"
      type="password"
      data-vv-name="password"
      :error-messages="errors.collect('password')"
      required
      visibility-toggle
    ></app-text-field>

    <div class="d-flex mt-2 mb-10">
      <n-link to="/forgot-password">Forgot password</n-link>
    </div>
    <div class="d-flex justify-end">
      <app-btn
        type="submit"
        color="primary"
        width="121"
        height="50"
        :disabled="!passedValidation"
        :loading="isLoading"
      >
        Sign in
      </app-btn>
    </div>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import { FormMixin } from '~/mixins/FormMixin'

export default {
  mixins: [FormMixin],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'request/isLoading',
    }),
    passedValidation() {
      return this.customValidateFields(this.fields)
    },
  },
  methods: {
    /**
     * processes the user login request
     * after input field is validated
     */
    async processLogin() {
      const validator = await this.$validator.validateAll()
      if (validator) {
        const data = {
          email: this.email,
          password: this.password,
        }
        try {
          const response = await this.$axios.post('/login', data)
          this.onLoginSuccess(response)
        } catch (error) {
          alert(error.message)
        }
      }
    },
    /**
     * Handles successful login requests and handle user navigation
     * @param data
     */
    onLoginSuccess(data) {
      this.$storage.setCookie('user', data.user)
      this.$storage.setCookie('token', data.token)
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  a {
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.408px;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
