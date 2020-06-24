<template>
  <div id="app">
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  display: inline-block;
  text-decoration-style: none;
}
</style>
