const orgQueryTypeDefs = `
extend type Query {
getOrg(id: ID!): Org
getAllOrgs: [Org]
}

`;


module.exports = orgQueryTypeDefs


