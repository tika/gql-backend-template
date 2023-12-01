import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { initContextCache } from "@pothos/core";
import { schema } from "./schema";

const server = new ApolloServer({
  schema,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({
    ...initContextCache(),
  }),
});

console.log(`🚀 Server ready at ${url}`);
