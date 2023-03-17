import React, { useState } from 'react';
import { Form, Button,Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    const errors = validateField(name, value);
    setFormErrors((formErrors) => ({
      ...formErrors,
      [name]: errors[name],
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // aquí iría tu lógica para
      // enviar los datos del formulario al servidor
      // si la respuesta del servidor indica éxito, haz lo siguiente:
      Swal.fire({
        title: '¡Registro exitoso!',
        icon: 'success',
      });
      setRedirect(true);
    }
  };

  const validateField = (fieldName, value) => {
    const errors = {};
    if ((fieldName === 'firstName' || fieldName === 'lastName') && /\d/.test(value)) {
      errors[fieldName] = 'No se permiten números en este campo';
    }
    return errors;
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'El nombre es obligatorio';
    }
    if (!formData.lastName) {
      errors.lastName = 'El apellido es obligatorio';
    }
    if (!formData.email) {
      errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }
    if (!formData.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length > 10) {
      errors.password = 'La contraseña no puede tener más de 10 caracteres';
    }
    return errors;
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (<Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          isInvalid={!!formErrors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          isInvalid={!!formErrors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.lastName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          isInvalid={!!formErrors.password}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
      <Link to="/auth/login" className="btn-primary text-decoration-none">
            Back to login
          </Link>
    </Form>
    </Container>
  )
}
export default Register