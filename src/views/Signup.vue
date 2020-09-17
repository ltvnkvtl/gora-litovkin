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
            md="4"
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
                <v-form>
                  <v-text-field
                    label="gora@studio.ru"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    color="#49a5b9"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="202020"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="#49a5b9"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#49a5b9" class="white--text">Войти</v-btn>
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
    password: null
  })
}
</script>