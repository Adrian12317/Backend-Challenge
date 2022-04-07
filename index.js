import { ApolloServer, gql } from "apollo-server";
import axios from "axios";

const typeDefs = gql`
  type City {
    name: String!
    lat: String!
    long: String!
    admin1: String!
    country: String!
    score: String!
    
  }

  type Query {
    getCity(q: String!, latitude: String, longitude: String): [City]!
  }
`;

const resolvers = {
  Query: {
    getCity: async (parent, args) => {
      const { data: cities } = await axios.get(
        `http://localhost:3000/search?q=${args.q}${
          args?.latitude ? `&latitude=${args.latitude}` : ""
        }${args.longitude ? `&longitude=${args.longitude}` : ""}`
      );

      return cities;
    },
  },
  City: {
    name: (parent) => parent.name + "," + parent.admin1 + "," + parent.country,
    score: (parent) => {
      // I haven't time to do this also i dont know how to do it, i need to investigate
      return "";
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
