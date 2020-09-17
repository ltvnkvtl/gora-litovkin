<template>
  <v-app-bar app color="#49a5b9" dark>
    <v-toolbar-items>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            href="https://github.com/ltvnkvtl"
            icon
            large
            target="_blank"
            v-on="on"
            class="hidden-sm-and-down"
          >
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

      <v-btn
        color="#32364f"
        text
        @click.prevent="signout"
        class="hidden-sm-and-down"
        v-if="isUserAuthenticated"
      >
        <v-icon left>mdi-logout</v-icon>Выйти
      </v-btn>
      <v-app-bar-nav-icon
        @click.prevent="$emit('click')"
        color="grey darken-4"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-title class="d-flex align-center">
      <a href="https://gora.studio/ru">
        <v-img
          alt="Gora Logo"
          class="shrink mr-2"
          contain
          src="https://gora.studio/static/img/gora_logo.cce99d5.svg"
          transition="scale-transition"
          width="130"
        />
      </a>
    </v-toolbar-title>
  </v-app-bar>
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
              icon: "mdi-login",
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