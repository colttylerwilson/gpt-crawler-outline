import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://user.evercam.io",
  match: "https://user.evercam.io/**",
  maxPagesToCrawl: 500,
  outputFileName: "UserManual.json",
  maxTokens: 2000000,
};
