import React from "react";
import {
  Accordion,
  TextButton,
  Container,
  StrokeButton,
  Text,
} from "@codecademy/gamut";
import { CloseIcon } from "@codecademy/gamut-icons";
import { useSelector } from "react-redux";
import { selectConcepts, selectLanguages } from "../../selectors";
import { colors } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";
import { Spacing } from "../../components/Spacing";
import { toTitleCase } from "../../helpers/title";

const StyledSidebar = styled(Container)`
  border-right: 1px solid ${colors["gray-200"]};
  height: 100%;
  width: 10vw;
  flex-shrink: 0;
  padding-top: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  margin: 1rem 0;
`;

const AccordionItem = styled.div`
  margin: 0.25rem 0.5rem;
`;

const lookupValue = (dict: Record<string, string | string[]>, val?: string) => {
  if (!val) {
    return "";
  }
  for (let key of Object.keys(dict)) {
    if (dict[key] === val) {
      return key;
    }
    if (dict[key] instanceof Array) {
      if (dict[key].includes(val)) {
        return key;
      }
    }
  }
  return val;
};

export type NavSectionProps = {
  options: Record<string, string>;
  selectedOption?: string;
  title: string;
  onSelectOption: (opt: string) => void;
};

export const NavSection: React.FC<NavSectionProps> = ({
  options,
  selectedOption,
  title,
  onSelectOption,
}) => {
  const name = lookupValue(options, selectedOption);
  if (selectedOption) {
    return (
      <>
        <div
          style={{
            fontWeight: 600,
            marginLeft: "calc(1rem + 1px)",
            marginBottom: "1rem",
            marginTop: "calc(1.5rem + 2px)",
            fontSize: "1rem",
          }}
        >
          {title}
        </div>
        <StrokeButton onClick={() => onSelectOption("")}>
          <Container justify="spaceBetween" align="center">
            {toTitleCase(name)}
            <Spacing size={1} />
            <CloseIcon />
          </Container>
        </StrokeButton>
      </>
    );
  } else {
    return (
      <StyledAccordion top={title} initiallyExpanded>
        {Object.keys(options).map((key) => (
          <AccordionItem>
            <TextButton onClick={() => onSelectOption(options[key])}>
              {toTitleCase(key)}
            </TextButton>
          </AccordionItem>
        ))}
      </StyledAccordion>
    );
  }
};

export type NavSidebarProps = {
  concept?: string;
  language?: string;
  onSelectLanguage: (l: string) => void;
  onSelectConcept: (c: string) => void;
  showBack?: boolean;
  onBack: () => void;
};

const NavSidebar: React.FC<NavSidebarProps> = ({
  onSelectConcept,
  onSelectLanguage,
  onBack,
  concept,
  language,
  showBack,
}) => {
  const languages = useSelector(selectLanguages);
  const concepts = useSelector(selectConcepts);

  return (
    <StyledSidebar flex column>
      {showBack ? (
        <TextButton onClick={onBack}>&lt; Back</TextButton>
      ) : (
        <Spacing size={2.75} />
      )}
      <NavSection
        title="Language"
        options={languages}
        selectedOption={language}
        onSelectOption={onSelectLanguage}
      />

      <NavSection
        title="Concepts"
        options={concepts}
        selectedOption={concept}
        onSelectOption={onSelectConcept}
      />
    </StyledSidebar>
  );
};

export default NavSidebar;
