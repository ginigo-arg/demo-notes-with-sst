import { StackContext, StaticSite } from "sst/constructs";

export function FrontendStack({ stack }: StackContext) {
  const web = new StaticSite(stack, "Vite-site", {
    path: "packages/frontend",
    buildOutput: "dist",
    buildCommand: "npm run build",
  });

  stack.addOutputs({
    Web: web.url,
  });
}
