import EntryCard from "../../components/Entry.ts";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectConcepts,
  selectEntries,
  selectLanguages,
} from "../../selectors";
import { RouteComponentProps } from "@reach/router";

export type DevViewProps = RouteComponentProps & {};

export const DevView: React.FC<DevViewProps> = ({}) => {
  const concepts = useSelector(selectConcepts);
  const languages = useSelector(selectLanguages);
  const entries = useSelector(selectEntries);

  return (
    <>
      <h1>CodePedia</h1>
      <h2>Concepts</h2>
      {Object.keys(concepts).map((key) => (
        <div key={`c-${key}`}>
          {key}: {concepts[key]}
        </div>
      ))}

      <h2>Languages</h2>
      {Object.keys(languages).map((key) => (
        <div key={`l-${key}`}>
          {key}: {languages[key]}
        </div>
      ))}
      <h2>Entries</h2>
      {entries.map((e) => (
        <EntryCard key={`e-${e.concept}-${e.language}`} entry={e} />
      ))}
    </>
  );
};
