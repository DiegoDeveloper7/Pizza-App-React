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

  if (password.length < 6) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseña muy corta',
      text: 'La contraseña debe tener al menos 6 caracteres.',
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
  });


    // Limpiar los campos
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
        <div className="form-container container py-5">
    <form onSubmit={handleSubmit} className="form-box">
        <h2 className="text-center mb-5 text-white ">Ingresa los datos del formulario</h2>
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input type="email" className="form-control input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Contraseña</label>
          <input type="password" className="form-control input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="form-label text-white">Confirmar Contraseña</label>
          <input type="password" className="form-control input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn submit-btn w-100">Enviar Datos</button>
      </form>
    </div>
  );
};