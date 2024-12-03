const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  ];
  
  const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const getUsers = () => Promise.resolve(mockUsers);
  export const getRoles = () => Promise.resolve(mockRoles);
  
  export const addUser = (user) => Promise.resolve({ ...user, id: Math.random() });
  export const addRole = (role) => Promise.resolve({ ...role, id: Math.random() });
  
  export const deleteUser = (id) => Promise.resolve(id);
  export const deleteRole = (id) => Promise.resolve(id);
  
  export const updateUser = (user) => Promise.resolve(user);
  export const updateRole = (role) => Promise.resolve(role);
  