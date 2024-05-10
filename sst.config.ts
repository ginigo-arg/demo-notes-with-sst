import { SSTConfig } from "sst";
import { Web } from "./stacks/FrontendStack";

export default {
  config(_input) {
    return {
      name: "email-editor-sst",
      region: "us-east-1",
      profile: "ihc-dev",
      // profile: input.stage === "production" ? "ihc-dev" : "ihc-dev",
    };
  },
  stacks(app) {
    app.stack(Web);
  },
} satisfies SSTConfig;
