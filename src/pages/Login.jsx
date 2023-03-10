import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));
    navigate("/dashboard");
  };
  return (
    <div>
      LOGIN
      <form onSubmit={handleSubmit}>
        <h4>Usuario</h4>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <h4>Contraseña</h4>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
