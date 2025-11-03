import React, { useState, useEffect } from "react";
import AdminPage from "../../pages/AdminPage";
import { FaTrash } from "react-icons/fa";
import "../../styles/Ordermanagement.css";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // ✅ Load Orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // 🗑 Delete Order
  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <AdminPage title="Order">
      <div className="orders-container">
        <h2>Order Management</h2>

        {orders.length === 0 ? (
          <p className="no-orders">No orders found.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Table Name</th>
                <th>Items</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.table}</td>
                  <td>
                    {order.items && order.items.length > 0 ? (
                      <ul className="order-items">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>${order.total}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(order.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminPage>
  );
}
