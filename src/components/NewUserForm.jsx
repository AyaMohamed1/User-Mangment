import { connect } from "react-redux";
import { Component } from "react";
import { userCreate } from "../actions";
class NewUserForm extends Component {
  render() {
    return (
      <div className="modal" tabIndex="-1" id="newUserFormModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header dark-blue-bg">
              <h5 className="modal-title">Add New User</h5>
              <button
                type="button"
                className="btn-close white-text"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body form-bg">
              <form>
                {/* first name */}
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label fw-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>

                {/* last name */}
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label fw-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>

                {/* email */}
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label fw-bold">
                    Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Enter your email address"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer form-bg d-flex justify-content-between">
              <h6>
                <u>Reset Fields</u>
              </h6>
              <div>
                <button
                  type="button"
                  className="btn white-bg mx-2 border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    // this.props.userCreate(user)
                  }}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, {
  userCreate,
})(NewUserForm);
// export default NewUserForm;
