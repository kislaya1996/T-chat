<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
              <v-spacer/>
                <v-toolbar-title>Login form</v-toolbar-title>  
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="name"
                    v-model="name"
                    prepend-icon='mdi-account'
                    type="text"
                  ></v-text-field>
                </v-form>
                <v-alert v-if="errorText" type="error">
                    {{errorText}}
                </v-alert>
              </v-card-text>

              <v-card-actions>
                
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Enter Chat</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: null,
      errorText: null
    }
  },
  methods: {
    login() {
        console.log("hi")
      if (this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        this.errorText = "Please enter a name!"
      }
    }
  }
}
</script>
