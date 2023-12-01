import fs from "fs";
import { lexicographicSortSchema, printSchema } from "graphql";
import path from "path";

// Import all resolvers here
import "@/objects/prisma-models";
import "@/objects/simple-objects";
import "@/resolvers/mutation-resolver";
import "@/resolvers/query-resolver";

import { builder } from "./builder";

// the toSchema() method converts our resolver first code into a SDL // schema
export const schema = builder.toSchema({});

const schemaAsString = printSchema(lexicographicSortSchema(schema));

// we will write this schema to a file.
if (process.env.NODE_ENV !== "production") {
  fs.writeFileSync(path.join(process.cwd(), "./schema.gql"), schemaAsString);
}
