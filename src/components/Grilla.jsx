import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "../redux/actions/programActions";

export const Grilla = () => {
  const dispatch = useDispatch();

  const { allPrograms, isLoading } = useSelector((state) => state.program);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  return isLoading
    ? "is Loading..."
    : allPrograms.map((p) => {
        return (
          <div key={allPrograms.indexOf(p)}>
            <h4>{p.name}</h4>
            <h4>{p.date}</h4>
            <h4>{p.description}</h4>
            <img src={p.imgUrl} alt="" width={250} height={250}/>
          </div>
        );
      });
};
