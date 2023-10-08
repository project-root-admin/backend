const taskEnumTypeDefs = `
enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  HOLD
  CANCELLED
}

enum Priority {
  HIGHEST
  URGENT
  CRITICAL
  NORMAL
  LOWEST
  MISSING
}

enum TaskType {
  FEATURE
  BUG
  QA
  UI_DESIGN
  PR
  OTHER
}
`;

module.exports = taskEnumTypeDefs;