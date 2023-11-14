import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import login from './loginService'

// const URL = 'http://localhost:9999/api/users/login'

interface FormDataProps {
  email: string;
  password: string;
}

const LoginForm: React.FC<FormDataProps> = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      // Call the login service
      const user = await login(formData.email, formData.password);

      // Handle successful login (e.g., store user information in state or context)
      console.log('Login successful:', user);
      navigate('/')
      // Reset form and errors
      setFormData({ email: '', password: '' });
      setErrors({ email: '', password: '' });
    } catch (error: any) {
      // Handle login error (e.g., display error message)
      console.error('Login error:', error.message);
      setErrors({ email: 'Incorrect Email', password: 'Your password does not match' });
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <div className='container' id='container'>
      <h1>Log in to your account</h1>
      <form className='login-form' id='login-form' onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className='error-msg' id='error-msg'>{errors.email}</p>}
        <label>Password</label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className='error-msg' id='error-msg'>{errors.password}</p>}
        <br />
        <p className='login-link'>
          Don't have an account? <Link to='/register'>Sign up here</Link>
        </p>
        <br />
        <button className='login-btn' id='login-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;