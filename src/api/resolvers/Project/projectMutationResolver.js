const Project = require('../../models/projectModel'); // Import your Mongoose model for Org

const projectMutationResolver = {
  Mutation: {
   
    // Mutation to create project
    createProject :  async (parent, {input}, context, info) => {
      

      try{

        const newProject = new Project ({
          ...input
        })

        await newProject.save()

        return newProject

      } catch (error) {
        throw new Error(`Error creating project: ${error}`);
      }

          

    },

    updateProject: async (parent, { id, input }, context, info) => {
      try {
        const updatedProject = await Project.findById(id);
    
        if (!updatedProject) {
          throw new Error('Project not found');
        }
    
        if (input.teamMembers && input.teamMembers.length > 0) {
          // Assuming `input.teamMembers` is an array of team members to be added
          updatedProject.teamMembers.push(...input.teamMembers);
        }
    
        // Update other project properties here if needed
    
        // Save the updated project
        await updatedProject.save();
    
        return updatedProject;
      } catch (error) {
        throw new Error(`Error updating project: ${error}`);
      }
    }
    

}

}
module.exports = projectMutationResolver;
