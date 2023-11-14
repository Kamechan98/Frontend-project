// registrationService.ts

const register = async (userData: { email: string, password: string, /* other registration fields */ }) => {
    const response = await fetch('http://localhost:9999/api/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    return response.json();
  };
  
  export default register;
  