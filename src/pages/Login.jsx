import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../components/redux/actions/loginActions";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ user: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(userLogin());
    dispatch();
  };
  return (
    <div>
      LOGIN
      <form onSubmit={handleSubmit}>
        <h4>Usuario</h4>
        <input type="text" placeholder="Usuario" onChange={handleChange} />
        <h4>Contraseña</h4>
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
