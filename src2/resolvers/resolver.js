const { User, Organization, Project, Task, Sprint } = require('../models'); // Import your Mongoose User model

const resolvers = {
  Query: {

    //fetches a user by their ID from the database:
    user: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
      }
    },
     


    //fetches an organization by its ID from the database
      organization: async (_, { id }) => {
        try {
          const organization = await Organization.findById(id);
          return organization;
        } catch (error) {
          throw new Error('Error fetching organization: ' + error.message);
        }
      },



    //   fetches a project by its ID from the database
    project: async (_, { id }) => {
        try {
          const project = await Project.findById(id);
          return project;
        } catch (error) {
          throw new Error('Error fetching project: ' + error.message);
        }
      },

    //   fetches a task by its ID from the database
    task: async (_, { id }) => {
        try {
          const task = await Task.findById(id);
          return task;
        } catch (error) {
          throw new Error('Error fetching task: ' + error.message);
        }
      },

    //   fetches a sprint by its ID from the database
    sprint: async (_, { id }) => {
        try {
          const sprint = await Sprint.findById(id);
          return sprint;
        } catch (error) {
          throw new Error('Error fetching sprint: ' + error.message);
        }
      },
    
    //   fetches all projects within a specific organization by its ID
    projectsInOrganization: async (_, { organizationId }) => {
        try {
          const projects = await Project.find({ organization: organizationId });
          return projects;
        } catch (error) {
          throw new Error('Error fetching projects in organization: ' + error.message);
        }
      },

   //  retrieves all tasks associated with a particular sprint by its ID
    tasksInSprint: async (_, { sprintId }) => {
      try {
        const tasks = await Task.find({ sprintId: sprintId });
        return tasks;
      } catch (error) {
        throw new Error('Error fetching tasks in sprint: ' + error.message);
      }
    },

// retrieves a list of members within a specific organization by its ID 
membersInOrganization: async (_, { organizationId }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }
      // Assuming there is a 'members' field in the Organization schema
      const members = organization.members;
      return members;
    } catch (error) {
      throw new Error('Error fetching members in organization: ' + error.message);
    }
  },
// retrieves a list of members working on a specific project by its ID
membersInProject: async (_, { projectId }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }
      // Assuming there is a 'members' field in the Project schema
      const members = project.members;
      return members;
    } catch (error) {
      throw new Error('Error fetching members in project: ' + error.message);
    }
  },

  
//   allows users to search for projects based on keywords, tags, or other criteria
  searchProjects: async (_, { query }) => {
    try {
      const projects = await Project.find({
        $or: [
          { name: { $regex: query, $options: 'i' } }, // Case-insensitive name search
          // Add additional search criteria here
        ],
      });
      return projects;
    } catch (error) {
      throw new Error('Error searching for projects: ' + error.message);
    }
  },

//   allows users to search for tasks based on criteria such as name, status, priority, etc.
searchTasks: async (_, { query }) => {
    try {
      const tasks = await Task.find({
        $or: [
          { name: { $regex: query, $options: 'i' } }, // Case-insensitive name search
          { status: { $regex: query, $options: 'i' } }, // Case-insensitive status search
          // Add additional search criteria here
        ],
      });
      return tasks;
    } catch (error) {
      throw new Error('Error searching for tasks: ' + error.message);
    }
  },

//  fetches a sprint by its ID from the database
sprint: async (_, { id }) => {
    try {
      const sprint = await Sprint.findById(id);
      return sprint;
    } catch (error) {
      throw new Error('Error fetching sprint: ' + error.message);
    }
  },


  },
  Mutation: {

        //#1 creates a new user in the database
        createUser: async (_, { input }) => {
            try {
              const user = new User(input);
              await user.save();
              return user;
            } catch (error) {
              throw new Error('Error creating user: ' + error.message);
            }
          },
    
        //#2 updates user details in the database
    
        updateUser: async (_, { id, input }) => {
            try {
              const updatedUser = await User.findByIdAndUpdate(id, input, { new: true });
              if (!updatedUser) {
                throw new Error('User not found');
              }
              return updatedUser;
            } catch (error) {
              throw new Error('Error updating user: ' + error.message);
            }
          },

    //#3 creates a new organization in the database

    createOrganization: async (_, { input }) => {
        try {
          const organization = new Organization(input);
          await organization.save();
          return organization;
        } catch (error) {
          throw new Error('Error creating organization: ' + error.message);
        }
      },

    //#4 updates organization details in the database

    updateOrganization: async (_, { id, input }) => {
        try {
          const updatedOrganization = await Organization.findByIdAndUpdate(id, input, { new: true });
          if (!updatedOrganization) {
            throw new Error('Organization not found');
          }
          return updatedOrganization;
        } catch (error) {
          throw new Error('Error updating organization: ' + error.message);
        }
      },

    //#5 creates a new project in the database
    createProject: async (_, { input }) => {
        try {
          const project = new Project(input);
          await project.save();
          return project;
        } catch (error) {
          throw new Error('Error creating project: ' + error.message);
        }
      },

    //#6   updates project details in the database
    updateProject: async (_, { id, input }) => {
        try {
          const updatedProject = await Project.findByIdAndUpdate(id, input, { new: true });
          if (!updatedProject) {
            throw new Error('Project not found');
          }
          return updatedProject;
        } catch (error) {
          throw new Error('Error updating project: ' + error.message);
        }
      },

    //#7  creates a new task in the database
    createTask: async (_, { input }) => {
        try {
          const task = new Task(input);
          await task.save();
          return task;
        } catch (error) {
          throw new Error('Error creating task: ' + error.message);
        }
      },

    //#8  updates task details in the database
    updateTask: async (_, { id, input }) => {
        try {
          const updatedTask = await Task.findByIdAndUpdate(id, input, { new: true });
          if (!updatedTask) {
            throw new Error('Task not found');
          }
          return updatedTask;
        } catch (error) {
          throw new Error('Error updating task: ' + error.message);
        }
      },

    //#9  creates a new sprint in the database

    createSprint: async (_, { input }) => {
      try {
        const project = await Project.findById(input.projectId);
        if (!project) {
          throw new Error('Project not found');
        }
  
        const sprint = new Sprint(input);
        await sprint.save();
  
        // Add the sprint to the project's sprints array
        project.sprints.push(sprint);
        await project.save();
  
        return sprint;
      } catch (error) {
        throw new Error('Error creating sprint: ' + error.message);
      }
    },

    //#10   updates sprint details in the database
    updateSprint: async (_, { id, input }) => {
        try {
          const updatedSprint = await Sprint.findByIdAndUpdate(id, input, { new: true });
          if (!updatedSprint) {
            throw new Error('Sprint not found');
          }
          return updatedSprint;
        } catch (error) {
          throw new Error('Error updating sprint: ' + error.message);
        }
      },

      //#11   adds a user to an organization as a member with a specified role

addMemberToOrganization: async (_, { organizationId, userId, role }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }
      
      // Check if the user is already a member
      const existingMember = organization.members.find((member) => member.userId === userId);
      if (existingMember) {
        throw new Error('User is already a member of the organization');
      }

      // Add the user as a member
      organization.members.push({ userId, role });
      await organization.save();
      
      return organization;
    } catch (error) {
      throw new Error('Error adding member to organization: ' + error.message);
    }
  },

//#12   removes a member from an organization

removeMemberFromOrganization: async (_, { organizationId, userId }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      // Find the index of the member to remove
      const memberIndex = organization.members.findIndex((member) => member.user === userId);

      if (memberIndex === -1) {
        throw new Error('User is not a member of the organization');
      }

      // Remove the member from the array
      organization.members.splice(memberIndex, 1);
      await organization.save();

      return organization;
    } catch (error) {
      throw new Error('Error removing member from organization: ' + error.message);
    }
  },

//#13    adds a user to a project with a specific role

addMemberToProject: async (_, { projectId, userId, role }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }
      
      // Check if the user is already a member of the project
      const existingMember = project.members.find((member) => member.userId === userId);
      if (existingMember) {
        throw new Error('User is already a member of the project');
      }

      // Add the user as a member with the specified role
      project.members.push({ userId, role });
      await project.save();
      
      return project;
    } catch (error) {
      throw new Error('Error adding member to project: ' + error.message);
    }
  },


  //#14    removes a member from a project
  removeMemberFromProject: async (_, { projectId, userId }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      // Find the index of the member to remove
      const memberIndex = project.members.findIndex((member) => member.userId === userId);

      if (memberIndex === -1) {
        throw new Error('User is not a member of the project');
      }

      // Remove the member from the array
      project.members.splice(memberIndex, 1);
      await project.save();

      return project;
    } catch (error) {
      throw new Error('Error removing member from project: ' + error.message);
    }
  },

  //#15  users to update the status of a task (e.g., from "To Do" to "In Progress")

  changeTaskStatus: async (_, { taskId, status }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error('Task not found');
      }

      // Update the task status
      task.status = status;
      await task.save();

      return task;
    } catch (error) {
      throw new Error('Error changing task status: ' + error.message);
    }
  },

  //#16 Assign Task to User
  assignTaskToUser: async (_, { taskId, userId }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error('Task not found');
      }

      // Assign the task to the specified user
      task.assignee = userId;
      await task.save();

      return task;
    } catch (error) {
      throw new Error('Error assigning task to user: ' + error.message);
    }
},

//#17 allows users to move a task from one sprint to another
changeSprintForTask: async (_, { taskId, sprintId }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error('Task not found');
      }

      // Update the sprint ID for the task
      task.sprintId = sprintId;
      await task.save();

      return task;
    } catch (error) {
      throw new Error('Error changing sprint for task: ' + error.message);
    }
  },


  //#18 creates a milestone within a project, which can represent a significant project goal

  createMilestone: async (_, { input }) => {
    try {
      const project = await Project.findById(input.projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const milestone = new Milestone(input);
      await milestone.save();

      // Add the milestone to the project's milestones array
      project.milestones.push(milestone);
      await project.save();

      return milestone;
    } catch (error) {
      throw new Error('Error creating milestone: ' + error.message);
    }
  },

//#19   allows users to attach files or documents to a project, task, or organization

createAttachment: async (_, { input }) => {
    try {
      let parentDocument;

      // Determine the parent document type (project, task, or organization)
      if (input.parentType === 'PROJECT') {
        parentDocument = await Project.findById(input.parentId);
      } else if (input.parentType === 'TASK') {
        parentDocument = await Task.findById(input.parentId);
      } else if (input.parentType === 'ORGANIZATION') {
        parentDocument = await Organization.findById(input.parentId);
      } else {
        throw new Error('Invalid parent document type');
      }

      if (!parentDocument) {
        throw new Error('Parent document not found');
      }

      const attachment = new Attachment(input);
      await attachment.save();

      // Add the attachment to the parent document's attachments array
      parentDocument.attachments.push(attachment);
      await parentDocument.save();

      return attachment;
    } catch (error) {
      throw new Error('Error creating attachment: ' + error.message);
    }
  },

//#20   allows updating the permissions or roles of a user within an organization or project
updateUserPermissions: async (_, { userId, permissions }) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Update the user's permissions
      user.permissions = permissions;
      await user.save();

      return user;
    } catch (error) {
      throw new Error('Error updating user permissions: ' + error.message);
    }
  },

//#21   Invite user to a project

inviteUserToProject: async (_, { projectId, userId }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Add the user to the project's invitations array
      project.invitations.push({ userId, status: 'PENDING' });
      await project.save();

      return project;
    } catch (error) {
      throw new Error('Error inviting user to project: ' + error.message);
    }
  },

//#22   allows users to create a new team within an organization

createTeam: async (_, { input }) => {
    try {
      const organization = await Organization.findById(input.organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      const team = new Team(input);
      await team.save();

      // Add the team to the organization's teams array
      organization.teams.push(team);
      await organization.save();

      return team;
    } catch (error) {
      throw new Error('Error creating team: ' + error.message);
    }
  },



//#23 users to create a new task within a specific sprint:
  createTaskInSprint: async (_, { input }) => {
    try {
      const sprint = await Sprint.findById(input.sprintId);
      if (!sprint) {
        throw new Error('Sprint not found');
      }

      const task = new Task(input);
      await task.save();

      // Add the task to the sprint's tasks array
      sprint.tasks.push(task);
      await sprint.save();

      return task;
    } catch (error) {
      throw new Error('Error creating task in sprint: ' + error.message);
    }
  },

  //#24 allows users to create a new project within an organization
  createProjectInOrganization: async (_, { input }) => {
    try {
      const organization = await Organization.findById(input.organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      const project = new Project(input);
      await project.save();

      // Add the project to the organization's projects array
      organization.projects.push(project);
      await organization.save();

      return project;
    } catch (error) {
      throw new Error('Error creating project in organization: ' + error.message);
    }
  },
  //#25 Delete project
  deleteProject: async (_, { projectId }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      // Remove the project from the database
      await project.remove();

      return project;
    } catch (error) {
      throw new Error('Error deleting project: ' + error.message);
    }
  },

  //#26 Delete Organisation

    deleteOrganization: async (_, { organizationId }) => {
      try {
        const organization = await Organization.findById(organizationId);
        if (!organization) {
          throw new Error('Organization not found');
        }

        // Remove the organization from the database
        await organization.remove();

        return organization;
      } catch (error) {
        throw new Error('Error deleting organization: ' + error.message);
      }
    },
  //#27 allows users to create a new member within an organization
  createMemberInOrganization: async (_, { input }) => {
    try {
      const organization = await Organization.findById(input.organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      const member = new Member(input);
      await member.save();

      // Add the member to the organization's members array
      organization.members.push(member);
      await organization.save();

      return member;
    } catch (error) {
      throw new Error('Error creating member in organization: ' + error.message);
    }
  },

  // #28 allows users to update the details of a member within an organization, such as their role
  updateMember: async (_, { memberId, input }) => {
    try {
      const member = await Member.findById(memberId);
      if (!member) {
        throw new Error('Member not found');
      }

      // Update the member's attributes based on the input
      member.role = input.role || member.role;
      // Add other attributes to update as needed

      await member.save();

      return member;
    } catch (error) {
      throw new Error('Error updating member: ' + error.message);
    }
  },
//  #29 allows users to delete a member
  deleteMember: async (_, { memberId }) => {
    try {
      const member = await Member.findById(memberId);
      if (!member) {
        throw new Error('Member not found');
      }

      const organization = await Organization.findById(member.organization);
      if (!organization) {
        throw new Error('Organization not found');
      }

      // Remove the member from the organization's members array
      organization.members = organization.members.filter(
        (orgMember) => orgMember.toString() !== memberId.toString()
      );
      await organization.save();

      // Remove the member from the database
      await member.remove();

      return member;
    } catch (error) {
      throw new Error('Error deleting member: ' + error.message);
    }
  }
  },

  //30 allows users to create a new task within a project

  createTaskInProject: async (_, { input }) => {
    try {
      const project = await Project.findById(input.projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const task = new Task(input);
      await task.save();

      // Add the task to the project's tasks array
      project.tasks.push(task);
      await project.save();

      return task;
    } catch (error) {
      throw new Error('Error creating task in project: ' + error.message);
    }
  },

  //#31 allows users to update the details of a task within a project, such as its name, description, status, and other attributes
  updateTaskInProject: async (_, { taskId, input }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error('Task not found');
      }

      // Update the task attributes based on the input
      task.name = input.name || task.name;
      task.description = input.description || task.description;
      task.status = input.status || task.status;
      // Add other attributes to update as needed

      await task.save();

      return task;
    } catch (error) {
      throw new Error('Error updating task in project: ' + error.message);
    }
  },

  //#32 allows users to delete a task within a project

  deleteTaskInProject: async (_, { taskId }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error('Task not found');
      }

      const project = await Project.findById(task.project);
      if (!project) {
        throw new Error('Project not found');
      }

      // Remove the task from the project's tasks array
      project.tasks = project.tasks.filter(
        (projTask) => projTask.toString() !== taskId.toString()
      );
      await project.save();

      // Remove the task from the database
      await task.remove();

      return task;
    } catch (error) {
      throw new Error('Error deleting task in project: ' + error.message);
    }
  },

  //#33 allows users to create a new board within a project  
  createBoardInProject: async (_, { input }) => {
    try {
      const project = await Project.findById(input.projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const board = new Board(input);
      await board.save();

      // Add the board to the project's boards array
      project.boards.push(board);
      await project.save();

      return board;
    } catch (error) {
      throw new Error('Error creating board in project: ' + error.message);
    }
  },

  //#34  allows users to update the details of a board within a project, such as its name and other attributes

  updateBoardInProject: async (_, { boardId, input }) => {
    try {
      const board = await Board.findById(boardId);
      if (!board) {
        throw new Error('Board not found');
      }

      // Update the board attributes based on the input
      board.name = input.name || board.name;
      // Add other attributes to update as needed

      await board.save();

      return board;
    } catch (error) {
      throw new Error('Error updating board in project: ' + error.message);
    }
  },

  //#35 allows users to delete a board within a project
  deleteBoardInProject: async (_, { boardId }) => {
    try {
      const board = await Board.findById(boardId);
      if (!board) {
        throw new Error('Board not found');
      }

      const project = await Project.findById(board.project);
      if (!project) {
        throw new Error('Project not found');
      }

      // Remove the board from the project's boards array
      project.boards = project.boards.filter(
        (projBoard) => projBoard.toString() !== boardId.toString()
      );
      await project.save();

      // Remove the board from the database
      await board.remove();

      return board;
    } catch (error) {
      throw new Error('Error deleting board in project: ' + error.message);
    }
  },



  //#36 allows users to invite another user to join their organization

  inviteUserToOrganization: async (_, { organizationId, email }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      // Check if the user with the given email exists
      const invitedUser = await User.findOne({ email });
      if (!invitedUser) {
        throw new Error('User with the provided email not found');
      }

      // Check if the invited user is already a member of the organization
      const isAlreadyMember = organization.members.some(
        (member) => member.user.toString() === invitedUser._id.toString()
      );
      if (isAlreadyMember) {
        throw new Error('User is already a member of the organization');
      }

      // Add the invited user to the organization
      organization.members.push({
        user: invitedUser._id,
        role: 'GUEST', // You can set the default role here
      });
      await organization.save();

      return invitedUser;
    } catch (error) {
      throw new Error('Error inviting user to organization: ' + error.message);
    }
  },


  //#37 allows users to add another user to a project within their organization
  addUserToProjectInOrganization: async (_, { projectId, userId, role }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const organization = await Organization.findById(project.organization);
      if (!organization) {
        throw new Error('Organization not found');
      }

      // Check if the user is a member of the organization
      const isMember = organization.members.some(
        (member) => member.user.toString() === user._id.toString()
      );
      if (!isMember) {
        throw new Error('User is not a member of the organization');
      }

      // Check if the user is already a member of the project
      const isAlreadyMember = project.members.some(
        (projMember) => projMember.user.toString() === user._id.toString()
      );
      if (isAlreadyMember) {
        throw new Error('User is already a member of the project');
      }

      // Create a new project member with the specified role
      project.members.push({
        user: user._id,
        role,
      });
      await project.save();

      return project;
    } catch (error) {
      throw new Error('Error adding user to project: ' + error.message);
    }
  },
  


  //#38 allows users to update the role of a member within a project
  updateUserRoleInProject: async (_, { projectId, userId, role }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const member = project.members.find(
        (projMember) => projMember.user.toString() === userId.toString()
      );

      if (!member) {
        throw new Error('User is not a member of the project');
      }

      // Update the user's role within the project
      member.role = role;
      await project.save();

      return member;
    } catch (error) {
      throw new Error('Error updating user in project: ' + error.message);
    }
  },

  //#39  allows users to remove a member from a project within their organization

  removeUserFromProject: async (_, { projectId, userId }) => {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      const memberIndex = project.members.findIndex(
        (projMember) => projMember.user.toString() === userId.toString()
      );

      if (memberIndex === -1) {
        throw new Error('User is not a member of the project');
      }

      // Remove the user from the project's members array
      project.members.splice(memberIndex, 1);
      await project.save();

      return userId;
    } catch (error) {
      throw new Error('Error removing user from project: ' + error.message);
    }
  },

  //#40 allows users to update the status (ACTIVE or INACTIVE) of a member within an organization
  updateUserStatusInOrganization: async (_, { organizationId, userId, status }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      const member = organization.members.find(
        (orgMember) => orgMember.user.toString() === userId.toString()
      );

      if (!member) {
        throw new Error('User is not a member of the organization');
      }

      // Update the user's status within the organization
      member.status = status;
      await organization.save();

      return member;
    } catch (error) {
      throw new Error('Error updating user status in organization: ' + error.message);
    }
  },


  //#41 allows users to update the role of a member within an organization

  updateUserRoleInOrganization: async (_, { organizationId, userId, role }) => {
    try {
      const organization = await Organization.findById(organizationId);
      if (!organization) {
        throw new Error('Organization not found');
      }

      const member = organization.members.find(
        (orgMember) => orgMember.user.toString() === userId.toString()
      );

      if (!member) {
        throw new Error('User is not a member of the organization');
      }

      // Update the user's role within the organization
      member.role = role;
      await organization.save();

      return member;
    } catch (error) {
      throw new Error('Error updating user role in organization: ' + error.message);
    }
  },


  

};

module.exports = resolvers;
