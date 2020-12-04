import EntryCard from "./components/Entry.ts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConcepts, selectLanguages, selectEntries } from "./selectors";
import { loadMap } from "./thunks/loadMap";
import { RouteComponentProps } from "@reach/router";
import { fontBase } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";
import { IEntry } from "./models/entry";
import { DevView } from "./scenes/Dev";
import { Hub } from "./scenes/Hub";
import { Entry } from "./scenes/Entry";

const StyledApp = styled.div`
  font-family: ${fontBase};
`;
export const App: React.FC<RouteComponentProps> = () => {
  const [entry, setEntry] = useState<IEntry>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMap());
  }, []);

  return (
    <StyledApp>
      <DevView path="/dev" default />
      <Hub path="/" />
      {entry && <Entry entry={entry} />}
    </StyledApp>
  );
};
