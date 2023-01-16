import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProgram } from "../redux/actions/programActions";

const EditForm = ({ name, date, description, imgUrl }) => {
  const dispatch = useDispatch();
  const userToken = window.localStorage.getItem("userData");
  const [currentProgram, setCurrentProgram] = useState({
    name,
    date,
    description,
    imgUrl,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentProgram({
      ...setCurrentProgram,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProgram(currentProgram, userToken));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={currentProgram.name}
          onChange={(e) => handleChange(e)}
          required
          placeholder={currentProgram.name}
        />

        <label>Fecha y hora:</label>
        <input
          type="text"
          name="date"
          autoComplete="off"
          value={currentProgram.date}
          onChange={(e) => handleChange(e)}
          required
          placeholder={currentProgram.date}
        />

        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          autoComplete="off"
          value={currentProgram.description}
          onChange={(e) => handleChange(e)}
          required
          placeholder={currentProgram.description}
        />

        <label>Imagen:</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={currentProgram.imgUrl}
          onChange={(e) => handleChange(e)}
          required
          placeholder={currentProgram.imgUrl}
        />
        <button type="submit">Modificar</button>
      </form>
    </div>
  );
};

export default EditForm;
