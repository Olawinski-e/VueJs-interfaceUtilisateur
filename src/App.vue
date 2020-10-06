<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <img src="./assets/img/wish-logo-800.png" alt="logo" />
        </div>

        <ul id="icons">
          <li>
            <i class="fas fa-user"></i>
          </li>
          <li>
            <i class="fas fa-heart"></i>
            <span id="nav-notif"></span>
          </li>
          <li>
            <i class="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
