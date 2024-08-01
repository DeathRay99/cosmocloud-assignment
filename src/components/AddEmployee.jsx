import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const line1Ref = useRef("");
  const cityRef = useRef("");
  const countryRef = useRef("");
  const zipcodeRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name: nameRef.current?.value,
      address: {
        line1: line1Ref.current?.value,
        city: cityRef.current?.value,
        country: countryRef.current?.value,
        zipcode: zipcodeRef.current?.value,
      },
      contact_method: {
        phone: phoneRef.current?.value,
        email: emailRef.current?.value,
      },
    };
    // console.log(newEmployee);
    onAddEmployee(newEmployee);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mt-4 w-[50%] mx-auto"
    >
      <h2 className="text-xl mb-4">Add Employee</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          className="border px-2 py-1 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="address">
          Address Line 1
        </label>
        <input
          type="text"
          id="address"
          ref={line1Ref}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          ref={cityRef}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block mb-2">
          Country
        </label>
        <input
          type="text"
          id="country"
          ref={countryRef}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <span htmlFor="zipcode" className="block mb-2">
          Zip Code
        </span>
        <input
          type="text"
          id="zipcode"
          ref={zipcodeRef}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <h3 className="text-lg mb-2">Contact Methods</h3>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          ref={phoneRef}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          className="border px-2 py-1 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployee;
