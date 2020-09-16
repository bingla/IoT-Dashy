import React from "react";
import PageHeader from "../../common/PageHeader";

const IAMPage = () => {
  const users = [
    {
      id: 1,
      firstName: "Pierre",
      lastName: "Nilsson",
      company: "XLENT Syd",
      email: "pierre@xlent.se",
      role: "Admin",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      company: "Doe Company",
      email: "john@xlent.se",
      role: "User",
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Doe",
      company: "Doe Company",
      email: "jane@xlent.se",
      role: "User",
    },
  ];
  return (
    <div>
      <PageHeader title="IAM" />
      <br />
      <h5>IAM</h5>
      <p>This is some text I have on this page</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <div className="edit-elipsis rounded-circle">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IAMPage;
