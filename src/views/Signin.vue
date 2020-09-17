<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#49a5b9"
                dark
                flat
              >
                <v-toolbar-title class="white--text">
                  Войти на сайт
                  </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="error"
                  type="warning"
                >{{ error }}</v-alert>

                <v-form v-model="valid">
                  <v-text-field
                    label="gora@studio.ru"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    color="#49a5b9"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="202020"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="#49a5b9"
                    v-model="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  color="#49a5b9" 
                  class="white--text" 
                  @click.prevent="signin" 
                  :disabled="processing || !valid"
                >Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
    valid: false,
    emailRules: [
      (v) => !!v || 'Пожалуйста введите email',
      //eslint-disable-next-line
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Некорректный email'
    ],
    passwordRules: [
      (v) => !!v || 'Пожалуйста введите email',
      (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
    ]
  }),
  computed: {
    error() {
      return this.$store.getters.getError
    },
    processing() {
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true)
        this.$router.push('/')
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('SIGNIN', { email: this.email, password: this.password })
    }
  }
}
</script>