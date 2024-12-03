import React, { useState } from "react";
import AddRoleModal from "./AddRoleModal";
import EditRoleModal from "./EditRoleModal";

const RolesTable = ({ roles, onAddRole, onEditRole, onDeleteRole }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <h2>Roles</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>
        Add Role
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id}>
              <td>{index + 1}</td>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => {
                    setSelectedRole(role);
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => onDeleteRole(role.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <AddRoleModal show={showAddModal} onHide={() => setShowAddModal(false)} onAddRole={onAddRole} />
      )}
      {showEditModal && selectedRole && (
        <EditRoleModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          role={selectedRole}
          onEditRole={onEditRole}
        />
      )}
    </div>
  );
};

export default RolesTable;
