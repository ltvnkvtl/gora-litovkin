<template>
    <v-app-bar app color="#49a5b9" dark>
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn href="https://github.com/ltvnkvtl" icon large target="_blank" v-on="on" class="hidden-sm-and-down">
              <v-img
                alt="GitHub Logo"
                contain
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg"
                transition="scale-transition"
                width="50"
              />
            </v-btn>
          </template>
          <span>Source code on GitHub</span>
        </v-tooltip>

        <v-btn
          color="#32364f"
          text
          v-for="(item, i) in menuItems"
          :key="`menuitem${i}`"
          :to="item.route"
          class="hidden-sm-and-down"
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      <v-app-bar-nav-icon @click.prevent="$emit('click')" color="grey darken-4" class="hidden-md-and-up"></v-app-bar-nav-icon>
      </v-toolbar-items>
      
      <v-spacer></v-spacer>

      <v-toolbar-title class="d-flex align-center">
        <router-link to="/">
        <v-img
          alt="Gora Logo"
          class="shrink mr-2"
          contain
          src="https://gora.studio/static/img/gora_logo.cce99d5.svg"
          transition="scale-transition"
          width="130"
        />
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          icon: "mdi-login",
          title: "Войти",
          route: "/signup",
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