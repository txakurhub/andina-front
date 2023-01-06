import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch()
  }
    return (
    <div>
      LOGIN
      <form>
        <h4>Usuario</h4>
        <input type="text" placeholder="Usuario" />
        <h4>Contraseña</h4>
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
