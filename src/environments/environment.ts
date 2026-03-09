import { firebaseConfig } from "./environment.base";

export const environment = {
    production: false,
    githubStatsApi: 'http://localhost:8080/api',
    ...firebaseConfig
};
