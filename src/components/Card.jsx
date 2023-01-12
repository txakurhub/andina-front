import Swal from "sweetalert2";

const Card = ({ name, date, description, imgUrl }) => {
  const handleClick = () => {
    Swal.fire({
      imageUrl: { imgUrl },
      title: { name },
      text: { date },
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Editar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  return (
    <div onClick={handleClick}>
      <h4>{name}</h4>
      <h4>{date}</h4>
      <h4>{description}</h4>
      <img src={imgUrl} alt="" />
      <div></div>
    </div>
  );
};

export default Card;
