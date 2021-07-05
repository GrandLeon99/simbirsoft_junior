<template>
  <v-container>
    <v-list>
      <v-list-item>
        <v-col class="pa-0">
          <v-text-field
            v-model="search"
            label="Поиск по названию лиги"
            outlined
            clearable
            prepend-inner-icon="mdi-magnify"
          />

          <v-row>
            <app-date-picker v-model="dateStart" label="Дата начала" class-list="ml-3 mr-3" />
            <app-date-picker v-model="dateEnd" label="Дата окончания" class-list="ml-3 mr-3" />
          </v-row>
        </v-col>
      </v-list-item>

      <v-list-item
        v-for="(competition, index) in filteredCompetitions"
        :key="index"
      >
        <v-card class="mb-4 flex-grow-1" elevation="3">
          <v-card-title>{{ competition.name }}</v-card-title>
          <v-card-subtitle>{{ competition.area.name }}</v-card-subtitle>

          <v-card-actions>
            <v-btn text block>Показать календарь</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { footballService } from '@/api/services/football.service';
import AppDatePicker from '@/components/common/AppDatePicker.vue';

export default {
  name: 'PageCompetitions',

  components: { AppDatePicker },

  data() {
    return {
      competitions: [],
    };
  },

  created() {
    this.fetchCompetitions();
  },

  computed: {
    search: {
      get() { return this.$route.query.search || ''; },
      set(v) {
        if (this.$route.query.search === v) return;
        this.$router.push({
          name: this.$route.name,
          query: { ...this.$route.query, search: v },
        });
      },
    },

    dateStart: {
      get() { return this.$route.query.dateStart || ''; },
      set(v) {
        if (this.$route.query.dateStart === v) return;
        this.$router.push({
          name: this.$route.name,
          query: { ...this.$route.query, dateStart: v },
        });
      },
    },

    dateEnd: {
      get() { return this.$route.query.dateEnd || ''; },
      set(v) {
        if (this.$route.query.dateEnd === v) return;
        this.$router.push({
          name: this.$route.name,
          query: { ...this.$route.query, dateEnd: v },
        });
      },
    },

    filteredCompetitions() {
      return this.competitions
        .filter((competition) => competition.name.toLowerCase().includes(this.search));
    },
  },

  methods: {
    fetchCompetitions() {
      footballService
        .getCompetitions()
        .then((r) => {
          this.competitions = r;
        });
    },
  },
};
</script>
