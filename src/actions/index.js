import dummy from "../apis/dummy";

export const fetchUsers = () => {
  return async function (dispatch) {
    const result = await dummy.get("/user?page=2&limit=50");
    console.log(result);
    dispatch({ type: "FETCH_USERS", payload: result.data.data });
  };
};

export const userDelete = (id) => {
  // id = "60d0fe4f5311236168a109ca";
  return async function (dispatch) {
    const result = await dummy.delete(`/user/${id}`);
    console.log(result);
    dispatch({ type: "DELETE_USER", payload: result });
  };
};

export const userUpdate = (id, userData) => {
  return async function (dispatch) {
    const result = await dummy.put(`/user/${id}`, userData);
    console.log(result);
    dispatch({ type: "UPDATE_USER", payload: result });
  };
};

export const userCreate = (user) => {
  return async function (dispatch) {
    const result = await dummy.post(`/user/create`, user);
    console.log(result);
    dispatch({ type: "CREATE_USER", payload: result });
  };
};

// export const selectUser = (user) => {
//   return {
//     type: "USER_SELECTED",
//     payload: user,
//   };
// };
