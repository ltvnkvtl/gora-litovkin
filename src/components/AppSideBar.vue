<template>
  <v-list dense>
    <v-list-item href="https://github.com/ltvnkvtl">
      <v-list-item-icon>
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

    <v-list-item @click.prevent="signout" v-if="isUserAuthenticated">
      <v-list-item-icon>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Выйти</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            {
              icon: "mdi-emoticon-lol-outline",
              title: "Смешная гифка",
              route: "/",
            },
          ]
        : [
            // {
            //   icon: "mdi-emoticon-lol-outline",
            //   title: "Смешная гифка",
            //   route: "/",
            // },
            {
              icon: "mdi-login",
              title: "Войти",
              route: "/signin",
            },
          ];
    },
  },
  methods: {
    signout() {
      this.$confirm("На сегодня хватит?").then((res) => {
        if (res)
          this.$store.dispatch("SIGNOUT");
          this.$router.push('/signin')
      });
      
    },
  },
};
</script>