import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { fetchUsers, userUpdate, userDelete } from "../actions";

const EditUser = (props) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const closeModal = useRef();
  useEffect(() => {
    props.fetchUsers();
  }, [props.userDeleted, props.userupdated]);
  return (
    <div className="modal" tabIndex="-1" id={`edit-${props.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header dark-blue-bg">
            <h5 className="modal-title">Edit User</h5>
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
            </form>
          </div>
          <div className="modal-footer form-bg">
            <div>
              <button
                type="button"
                className="btn mx-2 btn-danger"
                onClick={() => {
                  props.userDelete(props.id);
                  closeModal.current.click();
                }}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  props.userUpdate(props.id, { firstName, lastName });
                  closeModal.current.click();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    userupdated: state.userUpdate,
    userDeleted: state.userDelete,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  userUpdate,
  userDelete,
  fetchUsers,
})(EditUser);
