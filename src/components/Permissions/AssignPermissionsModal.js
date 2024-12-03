// src/components/Permissions/AssignPermissionsModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AssignPermissionsModal = ({ show, onHide, role, permissions, onSave }) => {
  const [selectedPermissions, setSelectedPermissions] = useState(
    role ? role.permissions : []
  );

  const handlePermissionChange = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(selectedPermissions.filter((perm) => perm !== permission));
    } else {
      setSelectedPermissions([...selectedPermissions, permission]);
    }
  };

  const handleSave = () => {
    onSave(role.id, selectedPermissions);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Assign Permissions for {role?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {permissions.map((permission, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={permission}
              checked={selectedPermissions.includes(permission)}
              onChange={() => handlePermissionChange(permission)}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssignPermissionsModal;
