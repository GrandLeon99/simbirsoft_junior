<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon @click="$emit('update:showSideMenu', !showSideMenu)" />

    <v-app-bar-title >{{ $route.meta.title }}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',

  props: {
    showSideMenu: {},
  },
};
</script>
