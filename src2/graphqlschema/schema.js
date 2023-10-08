const typedefs = `
type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    profilePicture: String
    phoneNumber: String
    address: Address
    dateOfBirth: Date
    bio: String
    socialProfiles: [SocialProfile]
    permissions: [String]
    type: UserType!
    status: UserStatus!
    organizations: [Organization]
  }
  
  type Organization {
    id: ID!
    name: String!
    description: String
    foundedDate: Date
    website: String
    industry: String
    location: Address
    tags: [String]
    members: [OrganizationMember]
    projects: [Project]
    projectsCompleted: Int
    teams: [Team]
    clientList: [String]
  }
  
  type Project {
    id: ID!
    name: String!
    description: String
    startDate: Date
    endDate: Date
    status: String
    priority: String
    tags: [String]
    teamMembers: [User]
    milestones: [Milestone]
    attachments: [Attachment]
    budget: Float
    progress: Float
    notes: String
    tasks: [Task]
    sprintPlanning: SprintPlanning
  }
  
  type Task {
    id: ID!
    name: String!
    description: String
    project: Project
    createdBy: User
    boardStatus: String
    sprintId: Sprint
    storyPoints: Float
    sprintPlanning: SprintPlanning
    dependencies: [Task]
    startDate: Date
    completedDate: Date
    priority: String
    estimatedHours: Float
  }
  
  type Sprint {
    id: ID!
    name: String
    startDate: Date
    endDate: Date
    tasks: [Task]
    teamCapacity: Float
    velocity: Float
  }

  ********************************************* INPUT ********************************************


  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    # Include other user fields here
  }
  
  input UpdateUserInput {
    firstName: String
    lastName: String
    profilePicture: String
    phoneNumber: String
    address: AddressInput
    dateOfBirth: Date
    bio: String
    socialProfiles: [SocialProfileInput]
    permissions: [String]
    type: UserType
    status: UserStatus
    organizations: [ID]
  }
  
  input CreateOrganizationInput {
    name: String!
    # Include other organization fields here
  }
  
  input UpdateOrganizationInput {
    description: String
    foundedDate: Date
    website: String
    industry: String
    location: AddressInput
    tags: [String]
    members: [OrganizationMemberInput]
    projectsCompleted: Int
    teams: [TeamInput]
    clientList: [String]
  }
  
  input CreateProjectInput {
    name: String!
    # Include other project fields here
  }
  
  input UpdateProjectInput {
    description: String
    startDate: Date
    endDate: Date
    status: String
    priority: String
    tags: [String]
    teamMembers: [ID]
    milestones: [MilestoneInput]
    attachments: [AttachmentInput]
    budget: Float
    progress: Float
    notes: String
    tasks: [ID]
    sprintPlanning: SprintPlanningInput
  }
  
  input CreateTaskInput {
    name: String!
    project: ID
    createdBy: ID
    boardStatus: String
    sprintId: ID
    storyPoints: Float
    sprintPlanning: SprintPlanningInput
    dependencies: [ID]
    startDate: Date
    completedDate: Date
    priority: String
    estimatedHours: Float
  }

  input CreateTaskInSprintInput {
    name: String!
    project: ID!
    createdBy: ID
    boardStatus: String
    sprintId: ID!
    storyPoints: Float
    sprintPlanning: SprintPlanningInput
    dependencies: [ID]
    startDate: Date
    completedDate: Date
    priority: String
    estimatedHours: Float
  }
  
  input UpdateTaskInput {
    description: String
    project: ID
    createdBy: ID
    boardStatus: String
    sprintId: ID
    storyPoints: Float
    sprintPlanning: SprintPlanningInput
    dependencies: [ID]
    startDate: Date
    completedDate: Date
    priority: String
    estimatedHours: Float
  }
  
  input CreateSprintInput {
    name: String
    # Include other sprint fields here
  }
  
  input UpdateSprintInput {
    startDate: Date
    endDate: Date
    tasks: [ID]
    teamCapacity: Float
    velocity: Float
  }
  


  ********************************************* QUERIES ********************************************
  
  type Query {
    # Get a user by ID
    user(id: ID!): User
  
    # Get an organization by ID
    organization(id: ID!): Organization
  
    # Get a project by ID
    project(id: ID!): Project
  
    # Get a task by ID
    task(id: ID!): Task
  
    # Get a sprint by ID
    sprint(id: ID!): Sprint
  
    # List all projects for an organization
    projectsInOrganization(organizationId: ID!): [Project]

    tasksInSprint(sprintId: ID!): [Task]

    membersInOrganization(organizationId: ID!): [User]

    membersInProject(projectId: ID!): [User]

    searchProjects(query: String!): [Project]

    searchTasks(query: String!): [Task]

    ###### TO BE CODED ######

    # List organizations a user belongs to 
    userOrganizations(userId: ID!): [Organization] 
  
    # List tasks assigned to a user
    userTasks(userId: ID!): [Task]
  
    # List tasks in a project
    projectTasks(projectId: ID!): [Task]
  
 
  }

  ********************************************* MUTATION ********************************************
  type Mutation {

    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    updateUserPermissions(userId: ID!, permissions: [String]!): User
  

  

    createOrganization(input: CreateOrganizationInput!): Organization
    updateOrganization(id: ID!, input: UpdateOrganizationInput!): Organization
    addMemberToOrganization(organizationId: ID!, userId: ID!, role: String!): Organization
    removeMemberFromOrganization(organizationId: ID!, userId: ID!): Organization
    deleteOrganization(organizationId: ID!): Organization
    updateUserRoleInOrganization(organizationId: ID!, userId: ID!, role: String!): Organization
    updateUserStatusInOrganization(organizationId: ID!, userId: ID!, status: String!): Organization

    createProject(input: CreateProjectInput!): Project
    addMemberToProject(projectId: ID!, userId: ID!, role: String!): Project
    inviteUserToProject(projectId: ID!, userId: ID!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    updateUserRoleInProject(projectId: ID!, userId: ID!, role: String!): Project
    deleteProject(projectId: ID!): Project
    removeMemberFromProject(projectId: ID!, userId: ID!): Project
    removeUserFromProject(projectId: ID!, userId: ID!): Project
  
  
  
  
    createTask(input: CreateTaskInput!): Task
    updateTask(id: ID!, input: UpdateTaskInput!): Task
    changeTaskStatus(taskId: ID!, status: String!): Task
    changeSprintForTask(taskId: ID!, sprintId: ID!): Task
    assignTaskToUser(taskId: ID!, userId: ID!): Task
    createTaskInSprint(input: CreateTaskInSprintInput!): Task
  
   
  
    createSprint(input: CreateSprintInput!): Sprint
    updateSprint(id: ID!, input: UpdateSprintInput!): Sprint

    #Input Pending
    createTeam(input: CreateTeamInput!): Team
    createAttachment(input: CreateAttachmentInput!): Attachment
    createMilestone(input: CreateMilestoneInput!): Milestone
    createProjectInOrganization(input: CreateProjectInOrganizationInput!): Project
    createTaskInProject(input: CreateTaskInProjectInput!): Task
    updateTaskInProject(input: UpdateTaskInProjectInput!): Task
    deleteTaskInProject(input: DeleteTaskInProjectInput!): Task
    createBoardInProject(input: CreateBoardInProjectInput!): Board
    updateBoardInProject(boardId: ID!, input: UpdateBoardInProjectInput!): Board
    deleteBoardInProject(boardId: ID!): Board
    addUserToProjectInOrganization(projectId: ID!, userId: ID!, role: String!): Project
    inviteUserToOrganization(organizationId: ID!, email: String!): Organization
  }
  
  
`