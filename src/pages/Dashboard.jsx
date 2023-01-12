import { useNavigate } from "react-router-dom";
import { Grilla } from "../components/Grilla";

const Dashboard = () => {
  const navigate = useNavigate();

  const userData = window.localStorage.getItem("userData");
  console.log(userData);

  if (!userData) {
    alert("No tienes permisos suficientes");
    navigate("/");
  } else {
    return (
      <div>
        <Grilla />
      </div>
    );
  }
};

export default Dashboard;
