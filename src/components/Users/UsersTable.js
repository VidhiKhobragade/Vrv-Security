import React, { useState } from "react";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import "./UsersTable.css"; // Import the custom CSS file for additional styling

const UsersTable = ({ users, onAddUser, onEditUser, onDeleteUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="dashboard-container">
      <h2 className="text-center mb-4">User Management Dashboard</h2>
      
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowAddModal(true)}
      >
        + Add User
      </button>
      
      <input
        type="text"
        className="form-control mb-3 search-bar"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="table-responsive">
        <table className="table table-hover shadow-sm">
          <thead className="table-header">
            <tr>
              <th>#</th>
              <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                Name {sortColumn === "name" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>
                Email {sortColumn === "email" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("role")} style={{ cursor: "pointer" }}>
                Role {sortColumn === "role" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => {
                      setSelectedUser(user);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="pagination justify-content-center">
        {Array.from(
          { length: Math.ceil(filteredUsers.length / itemsPerPage) },
          (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </a>
            </li>
          )
        )}
      </ul>

      {showAddModal && (
        <AddUserModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onAddUser={onAddUser}
        />
      )}
      {showEditModal && selectedUser && (
        <EditUserModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          user={selectedUser}
          onEditUser={onEditUser}
        />
      )}
    </div>
  );
};

export default UsersTable;





