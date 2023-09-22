//RBAC 
const authorize = (requiredRoles) => {
    return (req, res, next) => {
      const { user } = req;
  
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const hasPermission = requiredRoles.some((role) =>
        user.roles.includes(role)
      );
  
      if (!hasPermission) {
        return res.status(403).json({ message: "Forbidden" });
      }
  
      next();
    };
  };
  
  module.exports = {
    authorize,
  };