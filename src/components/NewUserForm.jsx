import { connect } from "react-redux";
import { Component, useState, useEffect, useRef } from "react";
import { userCreate, fetchUsers } from "../actions";
const NewUserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const closeModal = useRef();
  useEffect(() => {
    props.fetchUsers();
  }, [props.user]);

  //   state = { firstName: "", lastName: "", email: "" };

  //   const handleFirstName = (event) => {
  //     this.setState({ firstName: event.target.value });
  //   };

  //   const handleLastName = (event) => {
  //     this.setState({ lastName: event.target.value });
  //   };

  //   const handleEmail = (event) => {
  //     this.setState({ email: event.target.value });
  //   };

  //   const handleClear = () => {
  //     this.setState({ firstName: "", lastName: "", email: "" });
  //   };

  return (
    <div className="modal" tabIndex="-1" id="newUserFormModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header dark-blue-bg">
            <h5 className="modal-title">Add New User</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeModal}
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
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
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
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>

              {/* email */}
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="modal-footer form-bg d-flex justify-content-between">
                <h6
                  onClick={() => {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                  }}
                >
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
                    type="submit"
                    className="btn btn-success"
                    onClick={(e) => {
                      e.preventDefault();
                      if (firstName && lastName && email) {
                        props.userCreate({ firstName, lastName, email });
                        closeModal.current.click();
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                      }
                    }}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return { user: state.userCreate };
};

export default connect(mapStateToProps, {
  userCreate,
  fetchUsers,
})(NewUserForm);
// export default NewUserForm;
