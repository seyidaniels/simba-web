<template>
  <v-btn depressed v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <template v-for="(index, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </v-btn>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
export default {
  name: 'AppBtn',
}
</script>

<style lang="scss" scoped>
::v-deep.v-btn {
  border-radius: 8px;
  &.v-btn--round {
    border-radius: 50%;
  }
  .v-btn__content {
    text-transform: none;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.408px;
  }
}
</style>
