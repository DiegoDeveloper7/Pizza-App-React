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
        text: "Debes ingresar tu correo y contraseña",
      });
    }

  // Validación avanzada de la contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,10}$/;

    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "warning",
        title: "Contraseña inválida",
        text: "La contraseña debe tener al entre 6 y 10 caracteres, una letra mayúscula, un número, y un caracter especial",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "Bienvenido a la Pizzeria MamaMia",
      confirmButtonColor: '#39ff14', 
      background: '#4169E1',         
      color: '#39ff14'   

    });

    // Limpiar campos
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container-login container py-5">  {/* form-container-login container clase para estilos propoios considerar para Register*/}
     
      <form onSubmit={handleSubmit} className="mx-auto form-body-login">     {/* form-body-login modifica estilos particulares considerar para Register*/}
         <h2 className="text-center mb-5">Ingresa tus datos para Iniciar Sesión</h2>
        <div className="mb-3">
           <i className="fas fa-pizza-slice me-2"></i>
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingresa tu mail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
           <i className="fas fa-pizza-slice me-2"></i>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn  w-100 btn-hover btnLoginPro">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};