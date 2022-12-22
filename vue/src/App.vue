<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
@import url("./assets/css/style.css");
</style>
