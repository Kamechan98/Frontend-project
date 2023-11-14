import React, { ChangeEvent, FormEvent, useState } from 'react'
import './Register.scss'
import register from './registerService';
import { Link } from 'react-router-dom';

// RegistrationForm.tsx

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<User>({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      // Call the registration service
      const newUser = await register(formData);

      // Handle successful registration (e.g., display success message)
      console.log('Registration successful:', newUser);

      // Reset form and errors
      setFormData({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      setErrors({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } catch (error: any) {
      // Handle registration error (e.g., display error message)
      console.error('Registration error:', error.message);
      setErrors({
        _id: 'Registration failed',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <div className='container' id='container'>
      <h1>Create a new account</h1>
      <form className='reg-form' id='reg-form' onSubmit={handleSubmit}>
      <label>First Name</label>
        <input
          type='firstName'
          id='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type='lastName'
          id='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <label>Password</label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className='error'>{errors.password}</p>}
        {/* Add other registration fields and corresponding error displays */}
        <br />
        <p className='registration-link'>
          Already have an account? <Link to='/login'>Log in here</Link>
        </p>
        <br />
        <button className='reg-btn' id='reg-btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
