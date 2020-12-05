import { NavSidebar, NavSection } from "../../../components";
import React, { useCallback } from "react";
import { TextButton } from "@codecademy/gamut";
import { useNavigate } from "@reach/router";
import { useSelector } from "react-redux";
import {
  selectConceptsForLanguage,
  selectLanguagesForConcept,
} from "../../../selectors";
import { IStore } from "../../../models";
import { IEntry } from "models/entry";

export type EntrySidebarProps = {
  entry: IEntry;
  conceptName: string;
  languageName: string;
};

const EntrySidebar: React.FC<EntrySidebarProps> = ({
  entry,
  conceptName,
  languageName,
}) => {
  const languages = useSelector((s: IStore) =>
    selectLanguagesForConcept(s, entry.concept)
  );
  const concepts = useSelector((s: IStore) =>
    selectConceptsForLanguage(s, entry.language)
  );

  const navigate = useNavigate();
  const navTo = useCallback(
    (language?: string, concept?: string) => {
      if (!language && !concept) {
        navigate("/");
        return;
      }
      navigate(`/entries/${concept}/${language || ""}`);
    },
    [entry]
  );

  return (
    <NavSidebar>
      <TextButton onClick={() => navTo()}>&lt; Back</TextButton>

      <NavSection
        title={`${conceptName} in Other Languages`}
        options={languages}
        selectedOption={entry.language}
        onSelectOption={(l: string) => navTo(l, entry.concept)}
        defaultName="Multiple Languages"
      />

      <NavSection
        title={`Other Concepts in ${languageName}`}
        options={concepts}
        selectedOption={entry.concept}
        onSelectOption={(c: string[]) => navTo(entry.language, c[0])}
      />
    </NavSidebar>
  );
};

export default EntrySidebar;
