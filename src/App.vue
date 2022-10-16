<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { defaultSettings } from "../config";

// 自适应
function resize() {
  // 下面的defaultSettings.designBase是根据设计图尺寸修改，例如设计图宽为375，即375/defaultSettings.designBase(设计稿基数)等于50(字体大小)
  let fs = document.body.clientWidth / defaultSettings.designBase;
  console.log("fs: ", fs, document.body.clientWidth);
  // 👇注意这里不能直接document.body.style
  document.body.parentNode.style = "font-size: " + fs + "px;";
}
resize();
window.onresize = resize;
</script>

<template>
  <header>
    <img
      style="width: 10px"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
    />11111

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  width: 125px;
  height: 125px;
  margin: 20px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
