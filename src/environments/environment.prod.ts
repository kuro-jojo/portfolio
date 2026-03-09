import { firebaseConfig } from "./environment.base";

export const environment = {
    ...firebaseConfig,
    production: true,
    githubStatsApi: 'https://github-readme-stats-632781009968.europe-west1.run.app/api'
};
