import Vue from "vue";

import Home from "./components/Home.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import UserSettings from "./components/UserSettings.vue";
import WishList from "./components/WishList.vue";

import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/user-settings", name: "UserSettings", component: UserSettings },
    { path: "/wish-list", name: "WishList", component: WishList },
    { path: "/shopping-cart", name: "ShoppingCart", component: ShoppingCart },
  ],
});
