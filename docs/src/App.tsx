import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConcepts } from "./selectors";
import { loadMap } from "./thunks/loadMap";

export const App: React.FC = () => {
  const concepts = useSelector(selectConcepts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMap());
  });

  return (
    <>
      {Object.keys(concepts).map((key) => (
        <div>
          {key}: {concepts[key]}
        </div>
      ))}
    </>
  );
};
