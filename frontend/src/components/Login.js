import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100vh; background-color:rgb(216, 248, 251); 
  
`;

const Form = styled.form`
  display: flex; flex-direction: column; width: 300px;
`;

const Input = styled.input`
  padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px; background-color: #4b7bec; color: white; border: none; border-radius: 5px;
  cursor: pointer;
`;

const Error = styled.p`
  color: red; margin-top: 10px;
`;
const Title = styled.h2`
  color: info; display: flex; justify-content: center;
`

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Username" className="form-control my-2" onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" className="form-control my-2" onChange={(e) => setPassword(e.target.value)} />
        <Button className="btn btn-primary">Login</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </LoginContainer>
  );
}

export default Login;
