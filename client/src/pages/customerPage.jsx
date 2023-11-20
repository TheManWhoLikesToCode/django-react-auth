import React from "react";
import { Link } from "react-router-dom";

const CustomerPage = () => {
  const motorcycles = [
    { id: 1, name: "Yamaha R1", price: "$500", available: "Yes" },
    { id: 2, name: "Honda CBR", price: "$600", available: "No" },
  ];

  return (
    <div className="Customer-Page">
      <h1>Welcome to the Customer Page</h1>
      <table>
        <thead>
          <tr>
            <th>Motorcycle</th>
            <th>Price</th>
            <th>Details</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {motorcycles.map((motorcycle) => (
            <tr key={motorcycle.id}>
              <td>{motorcycle.name}</td>
              <td>{motorcycle.price}</td>
              <td>
                <Link to={`/motorcycles/${motorcycle.id}`}>Details</Link>
              </td>
              <td>{motorcycle.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;
