<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="_date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="_date"
        :label="label"
        prepend-inner-icon="mdi-calendar"
        outlined
        readonly
        v-bind="attrs"
        v-on="on"
        :class="classList"
      ></v-text-field>
    </template>

    <v-date-picker
      v-model="_date"
      no-title
      scrollable
    >
      <v-spacer />
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(_date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'AppDatePicker',

  model: {
    prop: 'date',
    event: 'update:date',
  },

  props: {
    date: {},

    label: { type: String },

    classList: { type: String },
  },

  data() {
    return {
      menu: false,
    };
  },

  computed: {
    _date: {
      get() { return this.date; },
      set(v) { this.$emit('update:date', v); },
    },
  },
};
</script>
