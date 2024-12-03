import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddRoleModal = ({ show, onHide, onAddRole }) => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleAddRole = () => {
    const permissionsArray = permissions.split(",").map((perm) => perm.trim());
    onAddRole({ name: roleName, permissions: permissionsArray });
    setRoleName("");
    setPermissions("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Role Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter role name"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Permissions (comma-separated)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Read, Write, Delete"
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
        <Button variant="primary" onClick={handleAddRole}>
          Add Role
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRoleModal;
