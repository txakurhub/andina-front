import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "../components/Card";

const Dashboard = () => {
  const navigate = useNavigate();
  const { allPrograms, isLoading } = useSelector((state) => state.program);

  const userData = window.localStorage.getItem("userData");
  console.log(userData);

  const handleClick = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  if (!userData) {
    alert("No tienes permisos suficientes");
    navigate("/");
  } else {
    return isLoading ? (
      "Loading..."
    ) : (
      <div>
        <h2>Programación actual</h2>
        {allPrograms.map((p) => (
          <Card
            name={p.name}
            date={p.date}
            description={p.description}
            imgUrl={p.imgUrl}
          />
        ))}
      </div>
    );
  }
};

export default Dashboard;
