import React from "react";
import { connect } from "react-redux";

const UserDetail = ({ user }) => {
  if (user) {
    return <div>{user.name}</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
  };
};
export default connect(mapStateToProps)(UserDetail);
