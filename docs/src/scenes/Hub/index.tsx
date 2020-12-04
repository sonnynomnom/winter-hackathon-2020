import { RouteComponentProps } from "@reach/router";
import { Container, Heading, Text } from "@codecademy/gamut";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import NavSidebar from "../../components/Nav";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  selectEntriesForConceptAndLanugage,
  selectLanguages,
} from "../../selectors";
import { IStore } from "../../models";
import EntryPreviews from "../../components/EntryPreviews";
import { IEntry } from "../../models/entry";
import Search from "../../components/Search";
import { Spacing } from "../../components/Spacing";

const EntrySection = styled.div`
  margin: 2rem;
`;

export type HubProps = RouteComponentProps & {
  onEntrySelect: (e: IEntry) => void;
};

export const Hub: React.FC<HubProps> = ({ onEntrySelect }) => {
  const [concept, setConcept] = useState("");
  const [language, setLanguage] = useState("");

  const languages = useSelector(selectLanguages);

  const entries = useSelector((s: IStore) =>
    selectEntriesForConceptAndLanugage(s, concept, language)
  );

  return (
    <Container justify="stretch" flex column>
      <Header path="Hub" />

      <Container flex row grow={1}>
        <NavSidebar
          onSelectConcept={(c) => {
            console.log(c);
            setConcept(c[0]); // TODO: make this support multi
          }}
          onSelectLanguage={setLanguage}
          onBack={() => null}
          concept={concept}
          language={language}
          showBack={false}
        />

        <EntrySection>
          <Heading as="h1" fontSize="xl">
            Codepedia
          </Heading>
          <Search />
          <Spacing size={2} />
          <Text as="p" fontSize="md">
            This will contain details about the codepedia. It will have enough
            detail that it really ought to wrap to another line
          </Text>
          <EntryPreviews
            title="Cross-Language Concepts"
            onEntrySelect={onEntrySelect}
            entries={entries.filter((e) => !e.language)}
          />
          {Object.keys(languages).map((l) => (
            <EntryPreviews
              title={l}
              onEntrySelect={onEntrySelect}
              entries={entries.filter((e) => e.language === languages[l])}
            />
          ))}
        </EntrySection>
      </Container>
    </Container>
  );
};
