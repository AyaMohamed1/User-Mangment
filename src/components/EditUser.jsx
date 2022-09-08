const EditUser = () => {
  return (
    <div className="modal" tabIndex="-1" id="editUserFormModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header dark-blue-bg">
            <h5 className="modal-title">Edit User</h5>
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
            </form>
          </div>
          <div className="modal-footer form-bg">
            <div>
              <button
                type="button"
                className="btn white-bg mx-2 btn-danger"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button type="button" className="btn btn-success">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
