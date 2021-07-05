import { request } from '@/api/http';

const urls = {
  COMPETITIONS: (id = '') => `/competitions/${id}`,
  TEAMS: (id = '') => `/teams/${id}`,
};

// eslint-disable-next-line import/prefer-default-export
export const footballService = {
  getCompetitions: ({ id } = {}) => request()
    .get(urls.COMPETITIONS(id))
    .then(({ data }) => data.competitions),

  getTeams: ({ id } = {}) => request()
    .get(urls.TEAMS(id))
    .then(({ data }) => data.teams),
};
