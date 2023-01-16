import Swal from "sweetalert2";

const Card = ({ name, date, description, imgUrl }) => {

  //CARD PARA ADMINISTRADOR
  //  --MODAL V
  //          >EDITAR
  //          >ELIMINAR
  //          >CANCELAR

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
      denyButtonText: `Eliminar`,
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //EDIT program page
        Swal.fire("EDIT PAGE FORM", "success");
      } else if (result.isDenied) {
        //DELETE PROGRAM ACTION
        Swal.fire("Eliminado", "El programa fue eliminado con éxito", "error");
      }
    });
  };

  return (
    <div onClick={handleClick}>
      <h4>{name}</h4>
      <h4>{date}</h4>
      <h4>{description}</h4>
      <img src={imgUrl} alt="" height="250px" width="250px"/>
    </div>
  );
};

export default Card;
