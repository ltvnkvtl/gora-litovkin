<template>
  <v-list dense>
    <v-list-item href="https://github.com/ltvnkvtl">
      <v-list-item-icon >
        <v-img
                alt="GitHub Logo"
                contain
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg"
                transition="scale-transition"
                width="0"
              />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Source Code</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-for="(item, i) in menuItems" :key="`menuitem${i}`" :to="item.route">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          icon: "mdi-login",
          title: "Войти",
          route: "/signin",
        },
        {
          icon: "mdi-logout",
          title: "Выйти",
          route: "/logout",
        },
      ];
    },
  },
};
</script>