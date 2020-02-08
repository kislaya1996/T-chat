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
                <v-toolbar-title>Register</v-toolbar-title>  
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                    label="Name"
                    name="name"
                    v-model="form.name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    name="email"
                    v-model="form.email"
                    type="text"
                  ></v-text-field>
                   <v-text-field
                    label="Password"
                    name="password"
                    v-model="form.password"
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
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>