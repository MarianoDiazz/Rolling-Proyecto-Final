import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do some validation
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete todos los campos.',
      });
      return;
    }

    // Login logic here
    // ...

    // Show success message and redirect
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: 'Te has logueado exitosamente.',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Iniciar sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Ingresar
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            ¿No tienes una cuenta? <Link to="/auth/register">Regístrate</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
