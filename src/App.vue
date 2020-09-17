<template>
  <v-app>
    <AppHeader @click="isOpen = !isOpen" />

    <v-navigation-drawer absolute temporary left v-model="isOpen" class="hidden-md-and-up">
      <AppSideBar />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSideBar from "@/components/AppSideBar";

export default {
  name: "App",

  components: {
    AppHeader,
    AppSideBar,
  },

  data: () => ({
    isOpen: false,
  }),
};
</script>
