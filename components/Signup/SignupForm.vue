<template>
  <div>
    <v-form class="sign-up-form mt-8" @submit.prevent="processRegistration">
      <app-text-field
        v-model="name"
        v-validate="'required|min:3'"
        label="Full name"
        data-vv-name="name"
        :error-messages="errors.collect('name')"
        required
      >
      </app-text-field>

      <app-text-field
        v-model="email"
        v-validate="'required|email'"
        class="mt-6"
        label="Email address"
        type="email"
        data-vv-name="Email address"
        required
        email-auto-complete
        :error-messages="errors.collect('Email address')"
      ></app-text-field>

      <app-text-field
        v-model="password"
        v-validate="'required|min: 8|upperAndLowerCase|numberOrSpecial'"
        class="mt-6"
        label="Password"
        type="password"
        data-vv-name="password"
        :error-messages="errors.collect('password')"
        required
        visibility-toggle
      ></app-text-field>

      <div class="d-flex justify-end mt-10">
        <app-btn
          type="submit"
          color="primary"
          width="121"
          height="50"
          :disabled="!passedValidation"
          :loading="isLoading"
        >
          Sign up
        </app-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FormMixin } from '~/mixins/FormMixin'
import AppTextField from '~/components/Base/Forms/AppTextField'
import AppBtn from '~/components/Base/Forms/AppBtn'

export default {
  components: {
    AppBtn,
    AppTextField,
  },
  mixins: [FormMixin],
  data() {
    return {
      name: '',
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
     * processes the user registration request
     * after input field is validated
     */
    async processRegistration() {
      const validator = await this.$validator.validateAll()
      if (validator) {
        const data = {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.password,
        }
        try {
          await this.$axios.post('/register', data)
          this.$emit('registrationSuccess', this.email)
        } catch (error) {
          alert(error.message)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sign-up-form {
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
