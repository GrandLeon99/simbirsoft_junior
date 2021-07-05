<template>
  <v-app>
    <layout-default>
      <router-view />
    </layout-default>
  </v-app>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue';

export default {
  name: 'App',

  components: { LayoutDefault },
};
</script>
