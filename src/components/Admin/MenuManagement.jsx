import React, { useState, useEffect } from "react";
import AdminPage from "../../pages/AdminPage";
import "../../styles/MenuManagement.css";
import { FaPlus, FaEdit, FaTrash, FaInfoCircle, FaTimes, FaFolderPlus } from "react-icons/fa";

export default function AdminMenu() {
  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const [categoryName, setCategoryName] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedMenus = JSON.parse(localStorage.getItem("menus")) || [];
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setMenus(storedMenus);
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    if (!showMenuPopup) { 
      setSelectedMenu(null);
      setFormData({ name: "", price: "", description: "", category: "" });
    }
  }, [showMenuPopup]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("menus", JSON.stringify(menus));
  }, [menus]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // Generate Auto ID
  const generateId = () => {
    return menus.length > 0 ? menus[menus.length - 1].id + 1 : 1;
  };

  // Add Menu
  const handleAddMenu = () => {
    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill all required fields!");
      return;
    }
    const newMenu = { id: generateId(), ...formData };
    setMenus([...menus, newMenu]);
    setShowMenuPopup(false);
    setFormData({ name: "", price: "", description: "", category: "" });
  };

  // Add Category
  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name!");
      return;
    }
    if (categories.includes(categoryName.trim())) {
      alert("This category already exists!");
      return;
    }
    setCategories([...categories, categoryName.trim()]);
    setCategoryName("");
    setShowCategoryPopup(false);
  };

  // Delete Menu
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this menu?")) {
      setMenus(menus.filter((menu) => menu.id !== id));
    }
  };

  // Edit Menu
  const handleEdit = (menu) => {
    setFormData(menu);
    setSelectedMenu(menu);
    setShowMenuPopup(true);
  };

  // Update Menu
  const handleUpdate = () => {
    setMenus(
      menus.map((menu) =>
        menu.id === selectedMenu.id ? { ...selectedMenu, ...formData } : menu
      )
    );
    setShowMenuPopup(false);
    setSelectedMenu(null);
    setFormData({ name: "", price: "", description: "", category: "" });
  };

  // Show Detail
  const handleShowDetail = (menu) => {
    setSelectedMenu(menu);
    setShowDetail(true);
  };

  return (
    <AdminPage title="Menu">
      <div className="menu-container">
        <div className="menu-header">
          <h2>Menu Management</h2>
          <div className="menu-header-buttons">
            <button className="add-btn" onClick={() => setShowCategoryPopup(true)}>
              <FaFolderPlus /> Add Category
            </button>
            <button className="add-btn" onClick={() => setShowMenuPopup(true)}>
              <FaPlus /> Add Menu
            </button>
          </div>
        </div>

        <table className="menu-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.length === 0 ? (
              <tr>
                <td colSpan="5">No Menu Found</td>
              </tr>
            ) : (
              menus.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.id}</td>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>
                  <td>{menu.category}</td>
                  <td>
                    <button
                      className="detail-btn"
                      onClick={() => handleShowDetail(menu)}
                    >
                      <FaInfoCircle />
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(menu)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(menu.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Add/Edit Menu Popup */}
        {showMenuPopup && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowMenuPopup(false)}>
                <FaTimes />
              </button>
              <h3>{selectedMenu ? "Edit Menu" : "Add Menu"}</h3>
              <input
                type="text"
                placeholder="Menu Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <button
                className="save-btn"
                onClick={selectedMenu ? handleUpdate : handleAddMenu}
              >
                {selectedMenu ? "Update" : "Add"}
              </button>
            </div>
          </div>
        )}

        {/* Add Category Popup */}
        {showCategoryPopup && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowCategoryPopup(false)}>
                <FaTimes />
              </button>
              <h3>Add Category</h3>
              <input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <button className="save-btn" onClick={handleAddCategory}>
                Add Category
              </button>

              <div className="category-list">
                <h4>Existing Categories:</h4>
                <ul>
                  {categories.length === 0 ? (
                    <li>No categories yet.</li>
                  ) : (
                    categories.map((cat, index) => <li key={index}>{cat}</li>)
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Detail Popup */}
        {showDetail && selectedMenu && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowDetail(false)}>
                <FaTimes />
              </button>
              <h3>Menu Detail</h3>
              <p><strong>ID:</strong> {selectedMenu.id}</p>
              <p><strong>Name:</strong> {selectedMenu.name}</p>
              <p><strong>Price:</strong> ${selectedMenu.price}</p>
              <p><strong>Category:</strong> {selectedMenu.category}</p>
              <p><strong>Description:</strong> {selectedMenu.description}</p>
            </div>
          </div>
        )}
      </div>
    </AdminPage>
  );
}


