<template>
  <v-navigation-drawer
    v-model="_showSideMenu"
    app
    dark
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">PRO_FOOTBALL</v-list-item-title>
        <v-list-item-subtitle>PRO_FOOTBALL</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item-group>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheSideMenu',

  props: {
    showSideMenu: {},
  },

  data() {
    return {
      items: [
        { title: 'Список лиг', to: { name: 'PageCompetitions' } },
        { title: 'Список команд', to: { name: 'PageTeams' } },
      ],
    };
  },

  computed: {
    _showSideMenu: {
      get() { return this.showSideMenu; },
      set(v) { this.$emit('update:showSideMenu', v); },
    },
  },
};
</script>`
