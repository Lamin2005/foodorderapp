import React, { useState, useEffect } from "react";
import AdminPage from "../../pages/AdminPage";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import "../../styles/UserManagement.css";

export default function AdminUsers() {
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    role: "User",
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (!showPopup) {
      setEditing(false);
      setFormData({ id: null, name: "", email: "", role: "User" });
    }
  }, [showPopup]);

  const saveToLocalStorage = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      return alert("Please fill all fields!");
    }
    if (editing) {
      const updatedUser = users.map((u) =>
        u.id === formData.id ? formData : u
      );
      saveToLocalStorage(updatedUser);
      setEditing(false);
      window.alert("Successfullly User Updated.");
    } else {
      const newUser = {
        ...formData,
        id: users.length ? users[users.length - 1].id + 1 : 1,
      };
      saveToLocalStorage([...users, newUser]);
      window.alert("Successfullly New User Add.");
    }

    setFormData({ id: null, name: "", email: "", role: "User" });
    setShowPopup(false);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditing(true);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this user?")) {
      const updated = users.filter((u) => u.id !== id);
      saveToLocalStorage(updated);
      alert("Delete User Successfully.");
    }
  };

  return (
    <AdminPage title="User Management">
      <section className="table-section">
        <div className="table-header">
          <h2>User Management</h2>
          <button className="add-popup-btn" onClick={() => setShowPopup(true)}>
            <FaPlus /> Add User
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u, index) => (
                <tr key={u.id}>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(u)}>
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(u.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* 🔹 Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-header">
              <h3>{editing ? "Edit User" : "Add New User"}</h3>
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                <FaTimes />
              </button>
            </div>

            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <button type="submit" className="popup-submit-btn">
                {editing ? "Update User" : "Add User"}
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminPage>
  );
}
