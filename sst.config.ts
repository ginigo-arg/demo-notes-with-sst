import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";

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
    app.stack(FrontendStack);
  },
} satisfies SSTConfig;
