import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userDeleteReducer from "./userDeleteReducer";
import userUpdateReducer from "./userUpdateReducer";
import userCreateReducer from "./userCreateReducer";

// const selectedUserReducer = (selectedUser = null, action) => {
//   if (action.type === "USER_SELECTED") {
//     return action.payload;
//   }
//   return selectedUser;
// };

export default combineReducers({
  users: usersReducer,
  userUpd: userUpdateReducer,
  userCreate: userCreateReducer,
  userDelete: userDeleteReducer,
});
