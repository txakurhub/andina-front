import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { getAllPrograms } from "../redux/actions/programActions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allPrograms, isLoading } = useSelector((state) => state.program);

  const userData = window.localStorage.getItem("userData");

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

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
