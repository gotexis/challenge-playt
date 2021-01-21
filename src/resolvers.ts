import User from "./entity/User";

const createTokens = (user) => {

}

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        login: async (_: any, {email, password}: any) => {
            const user = await User.findOne({ where: { email, password }, relations: ["country"] });
            return createTokens(user)
        },
    },
    Mutation: {
    }
};
