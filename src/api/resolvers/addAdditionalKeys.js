//Util Functtion

const User = require( '../models/userModel');
 const addAdditionalKeys =  async () => {
  await User.updateMany({ roles: { $exists: false } }, { $set: { roles: ['user'] } });
  console.log("Default age set for existing users.");
}
module.exports = { addAdditionalKeys };