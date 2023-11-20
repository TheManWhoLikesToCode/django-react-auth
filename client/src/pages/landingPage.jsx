import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/forgot-password">Forgot Password</Link>
          </li>
          <li>
            <Link to="/mechanic">Mechanic</Link>
          </li>
          <li>
            <Link to="/cashier">Cashier</Link>
          </li>
          <li>
            <Link to="/service-manager">Service Manager</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
