const TaskEnumTypeDefs = `
enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  HOLD
  CANCELLED
}
enum priorityEnum {
  HIGHEST
  URGENT
  CRITICAL
  NORMAL
  LOWEST
  MISSING
}
`;

module.exports = TaskEnumTypeDefs;