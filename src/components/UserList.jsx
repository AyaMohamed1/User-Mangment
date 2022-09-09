import React, { Component } from "react";
import { connect } from "react-redux";
import NewUserForm from "./NewUserForm";
import EditUser from "./EditUser";
import {
  fetchUsers,
  selectUser,
  userDelete,
  userUpdate,
  userCreate,
} from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    // this.props.userDelete("631a112b9a460ffd990aeab3");
    // this.props.userCreate({
    //   firstName: "Aya",
    //   lastName: "Mohamed",
    //   email: "aya@aa.com",
    // });

    // this.props.userUpdate("631a10cc1318ef0e374fbd8b", {
    //   firstName: "yoyaaaaaaaaa",
    //   lastName: "Mohamed",
    // });
  }
  render() {
    // console.log(this.props);
    const usersList = this.props.users.map((user, index) => (
      <tr key={index}>
        <th>{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        {/* <td>{user.title}</td>
        <td>{user.picture}</td> */}
        <td>
          <EditUser
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
          />
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#edit-${user.id}`}
            // onClick={() => this.props.EditUser(user.id)}
          >
            Select
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="container">
        <div className="row mt-5 mb-1">
          <div className="col-lg-10">
            <h3>User Mangement</h3>
          </div>
          <div className="col-lg-2">
            <NewUserForm />
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#newUserFormModal"
            >
              Add new user
            </button>
          </div>
        </div>
        <table className="table table-hover border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              {/* <th scope="col">Title</th>
              <th scope="col">Picture</th> */}
              <th scope="col">Select</th>
            </tr>
          </thead>

          <tbody>{usersList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, {
  fetchUsers,
  userDelete,
  userCreate,
  userUpdate,
})(UsersList);
