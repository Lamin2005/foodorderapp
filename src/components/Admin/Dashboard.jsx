import React from "react";
import AdminPage from "../../pages/AdminPage";

export default function AdminDashboard() {
  return (
    <AdminPage title="Dashboard">
      <section className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,240</p>
        </div>
        <div className="card">
          <h3>Menus</h3>
          <p>580</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>$12,300</p>
        </div>
        <div className="card">
          <h3>Active Sessions</h3>
          <p>97</p>
        </div>
      </section>

      <section className="table-section">
        <h2>Recent Users</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Smith</td>
              <td>john@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td>User</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mark Brown</td>
              <td>mark@example.com</td>
              <td>User</td>
            </tr>
          </tbody>
        </table>
      </section>
    </AdminPage>
  );
}

// This component represents the admin dashboard with cards and a table for recent orders.
// It displays total users, menus, revenue, and orders in cards,
// and lists recent orders in a table format.