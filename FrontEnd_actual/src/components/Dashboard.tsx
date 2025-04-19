// Dashboard.tsx
import React from "react";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <div className="logo-container">
            <img
              src="src/assets/fennectron.png"
              alt="FenneCtron"
              className="logo"
            />
          </div>
          <nav className="sidebar-nav">
          <ul>
            <a onClick={() => navigate("/Dashboard")}><li className="nav-item active">
              <span className="nav-icon">
                <img src="src/assets/dashb.png" />
              </span>
              <span className="nav-text">Dashboard</span>
            </li></a>
            <a onClick={() => navigate("/Stock")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/stock.png" />
              </span>
              <span className="nav-text">Stock</span>
            </li></a>
            <a onClick={() => navigate("/Offers")}><li className="nav-item ">
              <span className="nav-icon">
                <img src="src/assets/offer.png" />
              </span>
              <span className="nav-text">Offers</span>
            </li></a>
            <a onClick={() => navigate("/")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/login.png" />
              </span>
              <span className="nav-text">Login</span>
            </li></a>
            <a onClick={() => navigate("/SignUp")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/register.png" />
              </span>
              <span className="nav-text">Register</span>
            </li></a>
          </ul>
        </nav>
      </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className="dashboard-header">
            <div className="header-title">DASHBOARD</div>
            <div className="header-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search for a product..." />
                <span className="search-icon">
                  <img src="src/assets/search.png" />
                </span>
              </div>
              <div className="user-profile">
                <img src="src/assets/user.png" alt="Admin" className="avatar" />
                <span className="user-name">Admin</span>
              </div>
            </div>
          </header>

          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-label">SALES</div>
                <div className="stat-value">3,897</div>
                <div className="stat-change positive">
                  <span className="change-icon">
                    <img src="src/assets/up.png" />
                  </span>
                  <span className="change-value">2.45%</span>
                  <span className="change-period">Since last month</span>
                </div>
              </div>
              <div className="stat-icon red">
                <img src="src/assets/stats.png" />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-label">ORDERS</div>
                <div className="stat-value">924</div>
                <div className="stat-change positive">
                  <span className="change-icon">
                    <img src="src/assets/up.png" />
                  </span>
                  <span className="change-value">1.10%</span>
                  <span className="change-period">Since yesterday</span>
                </div>
              </div>
              <div className="stat-icon yellow">
                <img src="src/assets/sales.png" />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-label">PERFORMANCE</div>
                <div className="stat-value">49.65%</div>
                <div className="stat-change positive">
                  <span className="change-icon">
                    <img src="src/assets/up.png" />
                  </span>
                  <span className="change-value">12%</span>
                  <span className="change-period">Since last month</span>
                </div>
              </div>
              <div className="stat-icon blue">
                <img src="src/assets/performance.png" />
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-section">
            {/* Sales Value Chart */}
            <div className="chart-card sales-chart">
              <div className="chart-header">
                <div className="chart-title">
                  <div className="chart-title-label">OVERVIEW</div>
                  <div className="chart-title-value">Sales value</div>
                </div>
                <div className="chart-actions">
                  <button className="time-filter active">Month</button>
                  <button className="time-filter">Week</button>
                </div>
              </div>
              <div className="chart-container">
                {/* Chart will be implemented later */}
                <div className="chart-placeholder"></div>
              </div>
            </div>

            {/* Total Orders Chart */}
            <div className="chart-card orders-chart">
              <div className="chart-header">
                <div className="chart-title">
                  <div className="chart-title-label">PERFORMANCE</div>
                  <div className="chart-title-value">Total orders</div>
                </div>
              </div>
              <div className="chart-container">
                {/* Chart will be implemented later */}
                <div className="chart-placeholder"></div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="table-section">
            <div className="table-header">
              <div className="table-title">Products sells</div>
              <button className="see-all-btn">See All</button>
            </div>
            <table className="products-table">
              <thead>
                <tr>
                  <th>PRODUCT ID</th>
                  <th>UNITS SOLD</th>
                  <th>PRICE DA</th>
                  <th>BOUNCE RATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0212</td>
                  <td>569</td>
                  <td>34500</td>
                  <td className="bounce-rate positive">
                    <span className="rate-icon">
                      <img src="src/assets/up.png" />
                    </span>
                    <span>46.53%</span>
                  </td>
                </tr>
                <tr>
                  <td>0001</td>
                  <td>985</td>
                  <td>31900</td>
                  <td className="bounce-rate negative">
                    <span className="rate-icon">
                      <img src="src/assets/down.png" />
                    </span>
                    <span>46.53%</span>
                  </td>
                </tr>
                <tr>
                  <td>1191</td>
                  <td>513</td>
                  <td>29400</td>
                  <td className="bounce-rate negative">
                    <span className="rate-icon">
                      <img src="src/assets/down.png" />
                    </span>
                    <span>36.49%</span>
                  </td>
                </tr>
                <tr>
                  <td>2277</td>
                  <td>50</td>
                  <td>14700</td>
                  <td className="bounce-rate positive">
                    <span className="rate-icon">
                      <img src="src/assets/up.png" />
                    </span>
                    <span>50.87%</span>
                  </td>
                </tr>
                <tr>
                  <td>1515</td>
                  <td>795</td>
                  <td>19000</td>
                  <td className="bounce-rate negative">
                    <span className="rate-icon">
                      <img src="src/assets/down.png" />
                    </span>
                    <span>46.53%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <footer className="dashboard-footer">
            <div className="footer-copyright">
              © 2025{" "}
              <a className="fnx" href="#">
                FenneX Team
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                FenneX Team
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;