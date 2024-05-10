import { RemovalPolicy } from "aws-cdk-lib/core";
import { StackContext, StaticSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const web = new StaticSite(stack, "web", {
    path: "packages/frontend",
    buildOutput: "dist",
    buildCommand: "npm run build",
  });

  stack.addOutputs({
    Web: web.url,
  });
}
