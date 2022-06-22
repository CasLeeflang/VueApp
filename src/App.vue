<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <router-link :to="{path: '/'}" style="margin: 5px;">
            <button>Home</button>
          </router-link>

          <div style="margin: 5px;" v-if="$adal.checkRoles(['Admin'])">
            <router-link :to="{path: '/admin'}" style="margin: 5px;">
              <button>Admin Page</button>
            </router-link>
          </div>

          <div style="margin: 5px;" v-if="$adal.checkRoles(['User', 'Admin'])">
            <router-link :to="{path: '/user'}" style="margin: 5px;">
              <button>User Page</button>
            </router-link>
          </div>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Welcome: {{ logUsername }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>

          </b-nav-item-dropdown>

          <b-nav-item>
            You are: {{ roles }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "App",
  computed: mapGetters(["logUsername", "roles"]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
