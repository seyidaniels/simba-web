<template>
  <div>
    <v-text-field
      outlined
      :type="fieldType"
      hide-details="auto"
      v-bind="{ ...$props, ...$attrs }"
      v-on="$listeners"
      @input="handleInput"
    >
      <template v-for="(index, name) in $slots" #[name]>
        <slot :name="name" />
      </template>
      <template #append>
        <template v-if="$attrs.type === 'password' && visibilityToggle">
          <div class="password-toggle" @click="handleVisibilityToggle">
            <p v-if="fieldType === 'password'">Show</p>
            <p v-else>Hide</p>
          </div>
        </template>
        <template v-else>
          <template
            v-if="
              $attrs.error ||
              ($attrs['error-messages'] && $attrs['error-messages'].length)
            "
          >
            <v-icon small color="error">fa-info-circle</v-icon>
          </template>
        </template>
      </template>
    </v-text-field>
    <v-slide-y-transition>
      <div
        v-if="emailAutoComplete && showEmailAutoComplete"
        class="auto-domains"
      >
        <p
          v-for="(domain, index) in autoCompleteDomains"
          :key="index"
          v-ripple="{ class: 'neutral--text' }"
          @click="completeEmail(domain)"
        >
          {{ domain }}
        </p>
      </div>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
  name: 'AppTextField',
  props: {
    /*
     * @prop height: Sets the height of the input
     * */
    height: {
      type: Number,
      default: 50,
    },
    visibilityToggle: {
      type: Boolean,
      default: false,
    },
    emailAutoComplete: {
      type: Boolean,
      default: false,
    },
    autoCompleteDomains: {
      type: Array,
      default: () => ['gmail.com', 'yahoo.com', 'hotmail.com'],
    },
  },
  data() {
    return {
      value: '',
      fieldType: 'text',
      showEmailAutoComplete: false,
    }
  },
  mounted() {
    this.fieldType = this.$attrs.type
  },
  methods: {
    handleVisibilityToggle() {
      this.fieldType === 'password'
        ? (this.fieldType = 'text')
        : (this.fieldType = 'password')
    },
    handleInput(value) {
      this.showEmailAutoComplete = value.includes('@')
    },
    completeEmail(domain) {
      const value = this.$attrs.value
      if (value.includes('@')) {
        const fullEmail =
          value.substring(0, value.lastIndexOf('@') + 1) + domain
        this.$emit('input', fullEmail)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.v-text-field--outlined fieldset {
  border-color: var(--v-grey-lighten4);
  border-radius: 10px;
}
::v-deep {
  &.v-text-field--outlined.v-input--is-focused fieldset,
  &.v-text-field--outlined.v-input--has-state fieldset {
    border-width: 1px;
    border-color: currentColor;
  }
  .theme--light.v-label {
    color: var(--v-label-base);
  }

  .v-input__prepend-inner,
  .v-input__append-inner {
    margin-top: 0 !important;
    height: 100%;
    align-items: center;
  }
  .v-input__prepend-inner {
    padding-left: 3px;
    padding-right: 15px !important;
  }
  .v-input__append-inner {
    padding-right: 3px;
    padding-left: 15px !important;
  }
  .password-toggle {
    cursor: pointer;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    letter-spacing: -0.41px;
    color: var(--v-grey-lighten2);
  }
  .v-text-field__details {
    padding: 0 !important;
    margin-bottom: 0 !important;
  }
}
.auto-domains {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  p {
    background: rgba(191, 213, 255, 0.4);
    border-radius: 10px;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.41px;
    padding: 5px 11px;
    margin-right: 6px;
    cursor: pointer;
    margin-bottom: 6px;
    @include breakpoint('xs') {
      margin-right: 2px;
      margin-bottom: 3px;
    }
  }
}
</style>
