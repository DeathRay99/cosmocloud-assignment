import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <div className="flex flex-col w-[75%] mx-auto mt-[5%]">
      {employees.length === 0 ? (
        <p className="text-center">No Employees in the system</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold	p-2 ">Employees</h1>
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
