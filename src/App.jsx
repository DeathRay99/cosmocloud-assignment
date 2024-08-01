import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=9&offset=0",
          {
            method: "GET",
            headers: {
              environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
              projectId: import.meta.env.VITE_PROJECT_ID,
            },
          }
        );
        const data = await response.json();

        setEmployees(data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [employees]);

  const handleAddEmployee = async (newEmployee) => {
    try {
      await fetch(
        "https://free-ap-south-1.cosmocloud.io/development/api/employees",
        {
          method: "POST",
          headers: {
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
            projectId: import.meta.env.VITE_PROJECT_ID,
          },
          body: JSON.stringify(newEmployee),
        }
      );
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleDeleteEmployee = async (empId) => {
    try {
      await fetch(
        `https://free-ap-south-1.cosmocloud.io/development/api/employees/${empId}`,
        {
          method: "DELETE",
          headers: {
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
            projectId: import.meta.env.VITE_PROJECT_ID,
          },
          body: JSON.stringify({}),
        }
      );
      setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp._id !== empId)
      );
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeList
                employees={employees}
                onDeleteEmployee={handleDeleteEmployee}
              />
            }
          />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route
            path="/add"
            element={<AddEmployee onAddEmployee={handleAddEmployee} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
