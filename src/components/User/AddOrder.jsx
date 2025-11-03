import React, { useState } from "react";
import AdminPage from "../../pages/AdminPage";
import "../../styles/AddOrder.css";

export default function AddOrder() {
  const [order, setOrder] = useState({
    id: "",
    table: "",
    items: "",
    total: "",
    date: new Date().toISOString().split("T")[0],
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!order.id || !order.table || !order.items || !order.total) {
      alert("❗ Please fill in all fields.");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: order.id,
      table: order.table,
      items: order.items.split(",").map((i) => i.trim()),
      total: parseFloat(order.total),
      date: order.date,
      status: order.status,
    };

    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert("✅ Order added successfully!");
    setOrder({
      id: "",
      table: "",
      items: "",
      total: "",
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
    });
  };

  return (
    <AdminPage title="Add Order">
      <div className="add-order-container">
        <h2>Add New Order</h2>

        <form onSubmit={handleSubmit} className="add-order-form">
          <div className="form-group">
            <label>Order ID</label>
            <input
              type="text"
              name="id"
              value={order.id}
              onChange={handleChange}
              placeholder="Enter Order ID (e.g. ORD003)"
            />
          </div>

          <div className="form-group">
            <label>Table Name</label>
            <input
              type="text"
              name="table"
              value={order.table}
              onChange={handleChange}
              placeholder="Enter Table Name"
            />
          </div>

          <div className="form-group">
            <label>Items (comma separated)</label>
            <input
              type="text"
              name="items"
              value={order.items}
              onChange={handleChange}
              placeholder="e.g. Fried Rice, Burger, Coke"
            />
          </div>

          <div className="form-group">
            <label>Total Price ($)</label>
            <input
              type="number"
              name="total"
              value={order.total}
              onChange={handleChange}
              placeholder="Enter total price"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={order.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={order.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button type="submit" className="add-btn">Add Order</button>
        </form>
      </div>
    </AdminPage>
  );
}
