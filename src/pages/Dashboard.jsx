import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const userData = window.localStorage.getItem("userData");
  console.log(userData);

  if (!userData) {
    alert("No tienes permisos suficientes");
    navigate("/");
  } else {
    return <div>DASHBOARD</div>;
  }
};

export default Dashboard;
