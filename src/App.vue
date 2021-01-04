<template>
  <v-app>
    <v-app-bar app color="primary">
        <v-toolbar-title color="white">
          <router-link to="/" tag="span" style="cursor: pointer; color: white;">
            Vue + Vuex + Firebase Auth
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined color="white" class="ma-1" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn outlined color="white" class="ma-1" v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Sign up", link: "/signup" },
        { icon: "mdi-lock-open", title: "Sign in", link: "/signin" },
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "mdi-account", title: "Profile", link: "/profile" },
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
