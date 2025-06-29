// Importamos React y useState
import React, { useState } from 'react';

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
      alert("❌ Los campos no pueden estar vacíos");
      return;
    }

    if (password.length < 6) {
      alert("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    // Si todo es correcto
    alert("✅ ¡Datos enviados correctamente!");

    // Limpiar los campos
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    // Modal de Bootstrap
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          {/* Header del modal */}
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">Formulario de Registro</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>

          {/* Cuerpo del modal con el formulario */}
          <div className="modal-body">

            {/* Texto de bienvenida */}
            <p className="text-center">Ingresa los datos del formulario</p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="text-center">

              {/* Campo de email */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Campo de contraseña */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Campo de confirmar contraseña */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Botón de enviar */}
              <button type="submit" className="btn btn-primary">
                Enviar datos
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};