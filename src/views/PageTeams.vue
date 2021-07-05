<template>
  <v-container>
    <v-list>
      <v-list-item>
        <v-text-field
          v-model="search"
          label="Поиск по названию команды"
          outlined
          clearable
          prepend-inner-icon="mdi-magnify"
        />
      </v-list-item>

      <v-list-item
        v-for="(team, index) in filteredTeams"
        :key="index"
      >
        <v-card class="mb-4 flex-grow-1" elevation="3">
          <div class="d-flex align-stretch">
            <div class="flex d-flex flex-column justify-space-between overflow-hidden">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h2">{{ team.name }}</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1"
                  >{{ team.shortName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                Страна: {{ team.area.name }} <br>
                Адрес: {{ team.address }} <br>
                Телефон: {{ team.phone }} <br>
                Вебсайт: {{ team.website }} <br>
                Почта: {{ team.email }}
              </v-card-text>
            </div>

            <v-img :src="team.crestUrl" contain max-width="200" class="ma-4"/>
          </div>
        </v-card>
      </v-list-item>

    </v-list>
  </v-container>
</template>

<script>
import { footballService } from '@/api/services/football.service';

export default {
  name: 'PageTeams',

  data() {
    return {
      teams: [],
    };
  },

  computed: {
    search: {
      get() { return this.$route.query.search || ''; },
      set(v) { this.$router.push({ name: 'PageTeams', query: { search: v } }); },
    },

    filteredTeams() {
      return this.teams
        .filter((team) => team.name.toLowerCase().includes(this.search));
    },
  },

  created() {
    this.fetchTeams();
  },

  methods: {
    fetchTeams() {
      footballService
        .getTeams()
        .then((r) => {
          this.teams = r;
        });
    },
  },
};
</script>
