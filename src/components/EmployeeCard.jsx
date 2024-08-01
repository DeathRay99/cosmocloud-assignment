import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee, onDeleteEmployee }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl mb-2">{employee.name}</h2>
      <p className="text-gray-600 mb-2">ID: {employee._id}</p>
      <div className="flex justify-between">
        <Link to={`/employee/${employee._id}`} className="text-blue-500 hover:underline">View Details</Link>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDeleteEmployee(employee._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
