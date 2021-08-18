<template>
  <v-dialog
    v-bind="{ ...$props, ...$attrs }"
    content-class="base-modal-inner"
    v-on="$listeners"
    @input="handleClose"
  >
    <template v-for="(slot, name, index) in $slots" #[name]>
      <div v-if="name === 'default'" :key="index">
        <div v-if="headerTitle" class="base-modal__header">
          <h4>{{ headerTitle }}</h4>
        </div>
        <div
          v-if="showCloseBtn"
          class="base-modal__close-icon"
          @click="closeModal"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0.666748C6.62666 0.666748 0.666664 6.62675 0.666664 14.0001C0.666664 21.3734 6.62666 27.3334 14 27.3334C21.3733 27.3334 27.3333 21.3734 27.3333 14.0001C27.3333 6.62675 21.3733 0.666748 14 0.666748ZM19.7333 19.7334C19.2133 20.2534 18.3733 20.2534 17.8533 19.7334L14 15.8801L10.1467 19.7334C9.62666 20.2534 8.78666 20.2534 8.26666 19.7334C7.74666 19.2134 7.74666 18.3734 8.26666 17.8534L12.12 14.0001L8.26666 10.1467C7.74666 9.62675 7.74666 8.78675 8.26666 8.26675C8.78666 7.74675 9.62666 7.74675 10.1467 8.26675L14 12.1201L17.8533 8.26675C18.3733 7.74675 19.2133 7.74675 19.7333 8.26675C20.2533 8.78675 20.2533 9.62675 19.7333 10.1467L15.88 14.0001L19.7333 17.8534C20.24 18.3601 20.24 19.2134 19.7333 19.7334Z"
              fill="#ADB5BD"
            />
          </svg>
        </div>
      </div>
      <div :key="name">
        <slot :name="name" />
      </div>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    headerTitle: {
      type: String,
      default: '',
    },
    showCloseBtn: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeModal() {
      this.$emit('input', false)
      this.$emit('close')
    },
    handleClose(value) {
      if (!value) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss">
.base-modal-inner {
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(1, 8, 89, 0.1) !important;
  border-radius: 20px !important;
  position: relative;
}

.v-overlay {
  .v-overlay__scrim {
    opacity: 1 !important;
    background: rgba(0, 15, 53, 0.1) !important;
    mix-blend-mode: normal;
    border-color: rgba(0, 15, 53, 0.1) !important;
  }
  &.v-overlay--active .v-overlay__scrim {
    backdrop-filter: blur(5px);
  }
}

.base-modal__header {
  width: 100%;
  height: 92px;
  background: #f8f8fa;
  border-radius: 20px 20px 0 0;
  padding-left: 50px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
  }
}
.base-modal__close-icon {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  opacity: 1;
  :hover {
    opacity: 0.9;
  }
}
</style>
