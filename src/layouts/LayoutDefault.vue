<template>
  <div>
    <the-header :showSideMenu.sync ="showSideMenu" />
    <the-side-menu :showSideMenu.sync ="showSideMenu" />

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import TheHeader from '@/components/single/TheHeader.vue';
import TheSideMenu from '@/components/single/TheSideMenu.vue';

export default {
  name: 'LayoutDefault',

  components: { TheSideMenu, TheHeader },

  data() {
    return {
      showSideMenu: false,
    };
  },
};
</script>
