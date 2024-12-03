import React, { useEffect, useState } from "react";
import UsersTable from "C:/Users/vidhi/rbac-ui/src/components/Users/UsersTable";
import RolesTable from "C:/Users/vidhi/rbac-ui/src/components/Roles/RolesTable";
import PermissionsTable from "C:/Users/vidhi/rbac-ui/src/components/Permissions/PermissionsTable";
import './App.css';

import {
  getUsers,
  getRoles,
  addUser,
  addRole,
  updateUser,
  updateRole,
  deleteUser,
  deleteRole,
} from "C:/Users/vidhi/rbac-ui/src/Services/mockApi.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const fetchRoles = async () => {
    const data = await getRoles();
    setRoles(data);
  };

  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
  };

  const handleEditUser = async (updatedUser) => {
    const editedUser = await updateUser(updatedUser);
    setUsers(users.map((user) => (user.id === editedUser.id ? editedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddRole = async (role) => {
    const newRole = await addRole(role);
    setRoles([...roles, newRole]);
  };

  const handleEditRole = async (updatedRole) => {
    const editedRole = await updateRole(updatedRole);
    setRoles(roles.map((role) => (role.id === editedRole.id ? editedRole : role)));
  };

  const handleDeleteRole = async (id) => {
    await deleteRole(id);
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Role-Based Access Control (RBAC) Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <UsersTable
            users={users}
            onAddUser={handleAddUser}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        </div>
        <div className="col-md-6">
          <RolesTable
            roles={roles}
            onAddRole={handleAddRole}
            onEditRole={handleEditRole}
            onDeleteRole={handleDeleteRole}
          />
        </div>
      </div>
      <div className="mt-4">
        <PermissionsTable
          permissions={roles.flatMap((role) => role.permissions)}
        />
      </div>
    </div>
  );
}

export default App;