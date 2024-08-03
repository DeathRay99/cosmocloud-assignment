import React from "react";
import EmployeeCard from "./EmployeeCard";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <div className="flex flex-col w-[75%] mx-auto mt-[5%]">
      <div className="flex flex-col gap-2 justify-between items-center p-2 sm:flex-row ">
        <h1 className="text-2xl font-bold ">Employees</h1>
        <div className="bg-green-500 text-white px-2 py-1 rounded">
          <Link to={`/add`} className="">
            + Add new employee
          </Link>
        </div>
      </div>
      {employees.length === 0 ? (
        <>
          <p className="text-center">No Employees in the system</p>
        </>
      ) : (
        <>
          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              onDeleteEmployee={onDeleteEmployee}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default EmployeeList;
