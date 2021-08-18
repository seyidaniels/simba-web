<template>
  <v-app dark>
    <v-main class="auth-bg">
      <v-row class="auth-row" justify="center" no-gutters>
        <v-col class="auth-col" sm="12" md="6" lg="7">
          <div class="auth-layout-content">
            <nuxt />
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
.auth-row,
.auth-col {
  height: 100%;
}
.auth-layout-content {
  height: 100%;
}
</style>
