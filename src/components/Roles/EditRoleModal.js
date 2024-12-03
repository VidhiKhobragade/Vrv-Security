import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditRoleModal = ({ show, onHide, role, onEditRole }) => {
  const [roleName, setRoleName] = useState(role.name);
  const [permissions, setPermissions] = useState(role.permissions.join(", "));

  const handleEditRole = () => {
    const permissionsArray = permissions.split(",").map((perm) => perm.trim());
    onEditRole({ ...role, name: roleName, permissions: permissionsArray });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Role Name</Form.Label>
            <Form.Control
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Permissions (comma-separated)</Form.Label>
            <Form.Control
              type="text"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleEditRole}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRoleModal;
