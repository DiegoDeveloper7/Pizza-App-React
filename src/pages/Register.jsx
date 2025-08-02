// Importamos React y useState
import React, { useState } from 'react';

import Swal from 'sweetalert2';

// Componente funcional Register
export const Register = () => {

  // Estados para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Validaciones:

if (!email || !password || !confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Campos vacíos',
      text: 'Debes completar todos los campos.',
    });
    return;
  }

  // Validación avanzada de contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,10}$/;

  if (!passwordRegex.test(password)) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseña muy corta',
      text: 'La contraseña debe tener al entre 6 y 10 caracteres, una letra mayúscula, un número, y un caracter especial',
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseñas no coinciden',
      text: 'Verifica que las contraseñas sean iguales.',
    });
    return;
  }

  // Si pasa todas las validaciones
  Swal.fire({
    icon: 'success',
    title: '¡Registro exitoso!',
    text: 'Tus datos han sido enviados correctamente.',
    confirmButtonColor: '#28a745', // verde fosforescente
    background: '#1e3a8a',          // fondo azul rey
    color: '#fff'                   // texto blanco
  });


    // Limpiar los campos
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (

   <div className="form-container-register container py-5 mt-5">

    <form onSubmit={handleSubmit} className="form-body-register">
        <h2 className="text-center mb-5  ">Ingresa los datos del formulario</h2>

        <div className="mb-3">
          <label className="form-label ">Email</label>
          <input type="email" className="form-control input-field" placeholder="Ingresa tu mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label ">Contraseña</label>
          <input type="password" className="form-control input-field"  placeholder="Ingresa contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="form-label ">Confirmar Contraseña</label>
          <input type="password" className="form-control input-field" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn submit-btn w-100">Enviar Datos</button>

      </form>

  </div>

  );
};