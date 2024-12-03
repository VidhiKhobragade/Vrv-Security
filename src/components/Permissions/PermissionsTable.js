import React from "react";

const PermissionsTable = ({ permissions }) => {
  return (
    <div>
      <h2>Permissions</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Permission</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{perm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsTable;

