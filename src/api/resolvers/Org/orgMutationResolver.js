const Org = require('../../models/orgModel'); // Import your Mongoose model for Org

const orgMutationResolver = {
  Mutation: {

    createOrg: async (parent, {input}, context, info) => {
        try {
          console.log(input)
          const members = [{

            user: input.createdBy,
            role: 'ADMIN',
            status: 'ACTIVE'


          }]
          const newOrg = new Org({
            members,
            ...input
        });

          const savedOrg = await newOrg.save();
          return savedOrg;
        } catch (error) {
          throw new Error(`Error creating org: ${error}`);
        }
      },


      updateOrg: async (parent, {id, input}, context, info) => {
        try {
          const  {members, projects}  = input;
          
          // Find the organization by orgId
          const org = await Org.findById(id);
  
          if (!org) {
            throw new Error('Organization not found');
          }
  
          // Add the new members to the organization's members array
          if (members && members.length > 0) {
            org.members.push(...members);
          }

         // Add the new projects to the organization's projects array
          if (projects && projects.length > 0) {
            org.projects.push(...projects);
          }
  
          // Save the updated organization
          const updatedOrg = await org.save();
  
          return updatedOrg;
        } catch (error) {
          throw new Error(`Error updating org: ${error}`);
        }
      },



  }

}
module.exports = orgMutationResolver;
