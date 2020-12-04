import { RouteComponentProps } from "@reach/router";
import { IEntry } from "../../models/entry";
import React from "react";
import { Container, Heading, Markdown } from "@codecademy/gamut";
import EntryCard from "../../components/EntryCard";
import { Header } from "../../components/Header";
import NavSidebar from "../../components/Nav";

type EntryProps = RouteComponentProps & {
  entry: IEntry;
  onBack: () => void;
};
export const Entry: React.FC<EntryProps> = ({ entry, onBack }) => {
  return (
    <Container column>
      <Header path="Hub" />

      <Container flex row grow={1}>
        <NavSidebar
          showBack
          onBack={onBack}
          onSelectConcept={() => null}
          onSelectLanguage={() => null}
          concept={entry.concept}
          language={entry.language}
        />
        <EntryCard entry={entry} />
      </Container>
    </Container>
  );
};
