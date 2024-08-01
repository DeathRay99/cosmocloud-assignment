import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(
          `https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`,
          {
            method: "GET",
            headers: {
              environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
              projectId: import.meta.env.VITE_PROJECT_ID,
            },
          }
        );
        const data = await response.json();
        console.log(data);

        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-4 rounded shadow-md w-[60%]  mx-auto mt-5">
      <Link to="/" className="text-blue-500 hover:underline">
        Back to list
      </Link>
      <h2 className="text-xl mb-4">Employee Details</h2>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Employee ID:</strong> {employee._id}
      </p>
      <p>
        <strong>Address:</strong> {employee.address?.line1},{" "}
        {employee.address?.city}, {employee.address?.country} -{" "}
        {employee.address?.zipcode}
      </p>
      <h3 className="text-lg mt-4 mb-2">Contact Methods</h3>
      <p>
        <strong>Phone:</strong> {employee.contact_method?.phone}
      </p>
      <p>
        <strong>email:</strong> {employee.contact_method?.email}
      </p>
    </div>
  );
};

export default EmployeeDetails;
