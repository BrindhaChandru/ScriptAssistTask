import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { Button, TextInput, Paper, Title, Container } from '@mantine/core';
import { useState } from 'react';



export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  if (username === 'admin' && password === 'password') {
    login('mock-token-123'); // store token in Zustand and localStorage
    navigate('/resources');
  } else {
    setError('Invalid credentials');
  }
};

  return (
    <Container size={420} my={40}>
      <Title align='center'>Welcome to ScriptAssit</Title>
      <Title align="center">Login</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Username" value={username} onChange={(e) => setUsername(e.currentTarget.value)} required />
        <TextInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required mt="md" />
        <Button fullWidth mt="xl" onClick={handleSubmit}>Login</Button>
      </Paper>
    </Container>
  );
}
function setError(arg0: string) {
  throw new Error('Function not implemented.');
}

