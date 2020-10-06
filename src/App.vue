<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="./assets/img/wish-logo-800.png" alt="logo"
          /></router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/wish-list">
              <i class="fas fa-heart"></i>
              <span id="nav-notif"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
