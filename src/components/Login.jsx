import { useState } from "react";
import Swal from "sweetalert2";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      return Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Debes llenar todos los campos",
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        icon: "warning",
        title: "Contraseña inválida",
        text: "La contraseña debe tener al menos 6 caracteres",
      });
    }

    // Si todo está correcto
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "Bienvenido de vuelta",
    });

    // Limpiar campos
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container-login container py-5">  {/* form-container-login container clase para estilos propoios considerar para Register*/}
     
      <form onSubmit={handleSubmit} className="mx-auto form-body-login">     {/* form-body-login modifica estilos particulares considerar para Register*/}
         <h2 className="text-center mb-4">Ingresa los datos para Iniciar Sesión</h2>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingresa tu mail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success w-100 btn-hover">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};