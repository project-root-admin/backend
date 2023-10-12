const Org = require('../../models/orgModel'); // Import your Mongoose model for Org

const orgQueryResolver = {
  Query: {
    getOrg: async (parent, args, context, info) => {
      try {
        const org = await Org.findById(args.id);
        return org;
      } catch (error) {
        throw new Error(`Error fetching org: ${error}`);
      }
    },
    getAllOrgs: async (parent, args, context, info) => {
      try {
        const orgs = await Org.find();
        return orgs;
      } catch (error) {
        throw new Error(`Error fetching all orgs: n${error}`);
      }
    },
  },
};

module.exports = orgQueryResolver;
