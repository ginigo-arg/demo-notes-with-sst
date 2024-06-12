import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";

export default {
  config(_input) {
    return {
      name: "email-editor-sst",
      region: "us-east-1",
      profile: "aws-personal",
      // profile: input.stage === "production" ? "ihc-dev" : "ihc-dev",
    };
  },
  stacks(app) {
    app
      .stack(StorageStack)
      .stack(ApiStack)
      .stack(AuthStack)
      .stack(FrontendStack);
  },
} satisfies SSTConfig;
