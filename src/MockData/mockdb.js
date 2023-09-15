const mockData = {
User: [
 {
   id: "1",
   name: "Abhishek Maurya",
   email: "abhishek@gmail.com",
   password: "password123",
   tasks: [],
 },
 {
   id: "2",
   name: "Abhishek Tiwari",
   email: "atiwari@gmail.com",
   password: "password456",
   tasks: [],
 },
],
orgs: [
 {
   id: "1",
   name: "M Corp",
   email: "mcorp@example.com",
   members: ["1", "2"],
 },
],
tasks: [
 {
   id: "1",
   title: "Complete Project Proposal",
   description: "Write a detailed project proposal for the upcoming project",
   status: "IN_PROGRESS",
   dueDate: "2022-01-31",
   assignedTo: "1",
   createdBy: "2",
   createdAt: "2022-01-15T10:00:00Z",
 },
 {
   id: "2",
   title: "Review UI Designs",
   description: "Review and provide feedback on the new UI designs",
   status: "PENDING",
   dueDate: "2022-02-10",
   assignedTo: "2",
   createdBy: "1",
   createdAt: "2022-01-20T14:30:00Z",
 },
],
};