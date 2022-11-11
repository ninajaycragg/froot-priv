import React, { useState } from 'react';
const Information = () => {
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = { ...form };

    await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ firstName: '', lastName: '', email: '', age: '' });
    console.log('new person added');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingTop: '10px',
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          <br />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
          />
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Information;
