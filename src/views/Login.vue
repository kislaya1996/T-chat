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
                <v-toolbar-title>Login</v-toolbar-title>  
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    v-model="form.email"
                    prepend-icon='mdi-account'
                    type="text"
                  ></v-text-field>
                   <v-text-field
                    label="Password"
                    name="password"
                    v-model="form.password"
                    prepend-icon='mdi-lock'
                    type="password"
                  ></v-text-field>
                </v-form>
                <v-alert v-if="errorText" type="error">
                    {{errorText}}
                </v-alert>
              </v-card-text>

              <v-card-actions>
                
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit">Enter Chat</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import fb from 'firebase';

export default {
  data () {
    return {
      form :{
          email: null,
          password: null,
        },
      errorText: null
    }
  },
  methods: {
  submit() {
    fb
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        this.$router.push({name: 'Chat', params: {name: this.form.email}});
      })
      .catch(err => {
        this.error = err.message;
      });
  }
}
}
</script>
