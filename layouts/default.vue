<template>
  <v-app dark>
    <v-main>
      <v-row class="dashboard-row" justify="center" no-gutters>
        <v-col class="dashboard-col" sm="12" md="6" lg="7">
          <div class="d-flex justify-end mt-10">
            <user-currencies></user-currencies>
          </div>
          <div class="dashboard-layout-content mt-200">
            <nuxt />
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import UserCurrencies from '@/components/Base/Dashboard/UserCurrencies'
export default {
  components: {
    UserCurrencies,
  },
}
</script>
<style lang="scss" scoped>
.dashboard-row,
.dashboard-col {
  height: 100%;
}
.dashboard-layout-content {
  height: 100%;
}
.mt-200 {
  margin-top: 200px;
}
</style>
