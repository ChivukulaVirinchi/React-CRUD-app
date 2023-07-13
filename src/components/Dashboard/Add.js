import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
  });

  const handleAdd = e => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.salary ||
      !formData.date
    ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    employees.push(formData);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${formData.firstName} ${formData.lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  function handleChange(event) {
    setformData(prevFormData => {
      return {
        ...prevFormData,
        id: employees.length + 1,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          onChange={handleChange}
        />
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" onChange={handleChange} />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
