import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [contactMethods, setContactMethods] = useState([{ contact_method: '', value: '' }]);

  const handleAddContactMethod = () => {
    setContactMethods([...contactMethods, { contact_method: '', value: '' }]);
  };

  const handleRemoveContactMethod = (index) => {
    const newMethods = contactMethods.slice();
    newMethods.splice(index, 1);
    setContactMethods(newMethods);
  };

  const handleContactMethodChange = (index, field, value) => {
    const newMethods = contactMethods.slice();
    newMethods[index][field] = value;
    setContactMethods(newMethods);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      emp_id: Date.now(), // Just a placeholder, replace with API ID
      address: {
        line1,
        city,
        country,
        zipcode,
      },
      contactMethods,
    };
    onAddEmployee(newEmployee);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl mb-4">Add Employee</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address Line 1</label>
        <input
          type="text"
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Zip Code</label>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <h3 className="text-lg mb-2">Contact Methods</h3>
      {contactMethods.map((method, index) => (
        <div key={index} className="mb-4 flex">
          <select
            value={method.contact_method}
            onChange={(e) => handleContactMethodChange(index, 'contact_method', e.target.value)}
            className="border px-2 py-1 rounded mr-2"
          >
            <option value="">Select Method</option>
            <option value="EMAIL">Email</option>
            <option value="PHONE">Phone</option>
          </select>
          <input
            type="text"
            value={method.value}
            onChange={(e) => handleContactMethodChange(index, 'value', e.target.value)}
            className="border px-2 py-1 rounded flex-grow"
          />
          <button
            type="button"
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            onClick={() => handleRemoveContactMethod(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-500 text-white px-2 py-1 rounded mb-4"
        onClick={handleAddContactMethod}
      >
        Add Contact Method
      </button>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployee;
