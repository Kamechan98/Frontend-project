// loginService.ts

const login = async (email: string, password: string) => {
    const response = await fetch('http://localhost:9999/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
  
    return response.json();
  };
  
  export default login;
  