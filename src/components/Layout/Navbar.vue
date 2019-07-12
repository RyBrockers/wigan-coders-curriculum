<template>
  <div class="navbar">
    <nav class="grey darken-3">
      <div class="container">
        <router-link :to="{name: 'Home'}" class="brand-logo left link">Wigan Coders</router-link>

        <ul class="right">
          <li v-if="!user">
            <router-link :to="{name: 'Signup'}" class="link">Signup</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{name: 'Login'}" class="link">Login</router-link>
          </li>
          <li v-if="user">
            <router-link :to="{name: 'Curriculum'}" class="link">Curriculum</router-link>
          </li>
          <li v-if="user">
            <router-link :to="{name: 'GettingStarted'}" class="link">Getting Started</router-link>
          </li>

          <li v-if="user" class="logout-li">
            <a @click="logout" class="link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style>
.brand-logo {
  position: absolute;
  width: auto;
}

nav ul {
  width: auto;
  height: auto;
  position: relative;
  top: 30px;
}

nav {
  height: 90px;
}

nav ul a {
  transition: none !important;
}

.link:hover {
color: #00a1d6;

}

</style>
