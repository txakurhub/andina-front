import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "./redux/actions/programActions";

export const Grilla = () => {
  const dispatch = useDispatch();

  const { allPrograms, isLoading } = useSelector((state) => state.program);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  return isLoading
    ? "is Loading..."
    : allPrograms.map((p) => {
        return <div>GRILLA</div>;
      });
};
