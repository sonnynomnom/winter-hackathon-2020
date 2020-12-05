import { navigate, RouteComponentProps, useNavigate } from "@reach/router";
import React from "react";
import { Container } from "@codecademy/gamut";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import {
  selectConceptName,
  selectLanguageName,
  selectEntry,
} from "../../selectors";
import { IStore } from "models";
import { toTitleCase } from "../../helpers/title";
import EntrySidebar from "./NavSidebar";
import { EntryBody } from "./EntryBody";

type EntryProps = RouteComponentProps & {
  concept?: string;
  language?: string;
};

export const Entry: React.FC<EntryProps> = ({ concept, language }) => {
  const entry = useSelector((s: IStore) =>
    selectEntry(s, concept || "", language || "")
  );
  const conceptName = useSelector((s: IStore) =>
    selectConceptName(s, entry?.concept || "")
  );
  const languageName = useSelector((s: IStore) =>
    selectLanguageName(s, entry?.language || "")
  );

  if (!entry) {
    return null;
  }

  const path = languageName
    ? `${toTitleCase(conceptName)} > ${toTitleCase(languageName)}`
    : `${toTitleCase(conceptName)}`;

  return (
    <Container column>
      <Header path={path} />

      <Container flex row grow={1}>
        <EntrySidebar
          entry={entry}
          conceptName={conceptName}
          languageName={languageName}
        />
        <EntryBody entry={entry} />
      </Container>
    </Container>
  );
};
