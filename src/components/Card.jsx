import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ name, date, description, imgUrl }) => {
  //CARD PARA ADMINISTRADOR
  //  --MODAL V
  //          >EDITAR
  //          >ELIMINAR
  //          >CANCELAR

  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      imageUrl: imgUrl,
      title: `Título: ${name}`,
      text: `Fecha y horario: ${date}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Editar",
      cancelButtonText: "Cancelar",
      denyButtonText: `Eliminar`,
      reverseButtons: true,
    }).then((result) => {
      //  EDIT FORM
      if (result.isConfirmed) {
        navigate("/dashboard/edit");
      } else if (result.isDenied) {
        //  DELETE MODAL
        Swal.fire({
          title: "Eliminar",
          text: `Está seguro que desea eliminar este programa de la grilla`,
          showDenyButton: true,
          confirmButtonText: "Eliminar definitivamente",
        }).then((result) => {
          if (result.isConfirmed) {
            // DELETE ACTION
          }
        });
      }
    });
  };

  return (
    <div onClick={handleClick}>
      <h4>{name}</h4>
      <h4>{date}</h4>
      <h4>{description}</h4>
      <img src={imgUrl} alt="" height="250px" width="250px" />
    </div>
  );
};

export default Card;
