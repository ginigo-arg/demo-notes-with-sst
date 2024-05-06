import { Bucket, StackContext, Table } from "sst/constructs";

// Create an S3 bucket

export function StorageStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "Uploads");
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}
