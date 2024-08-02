import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
} from "./api/employeeService";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    try {
      const employeeData = await fetchEmployees();
      setEmployees(employeeData);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAddEmployee = async (newEmployee) => {
    const addedEmployee=await addEmployee(newEmployee);
    setEmployees((prevEmployees)=>[...prevEmployees,addedEmployee])
  };


  const handleDeleteEmployee = async (empId) => {
    await deleteEmployee(empId);
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp._id !== empId)
    );
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
