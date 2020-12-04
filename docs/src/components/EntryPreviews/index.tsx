import { Container, Heading } from "@codecademy/gamut";
import styled from "@emotion/styled";
import EntryPreview from "../EntryPreview";
import { IEntry } from "../../models/entry";
import React from "react";
import { toTitleCase } from "../../helpers/title";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
`;

export type EntryPreviewsProps = {
  title: string;
  entries: IEntry[];
  onEntrySelect: (e: IEntry) => void;
};

const EntryPreviews: React.FC<EntryPreviewsProps> = ({
  title,
  entries,
  onEntrySelect,
}) => {
  if (entries.length === 0) {
    return null;
  }
  return (
    <Container column>
      <Heading as="h2" fontSize="md">
        {toTitleCase(title)}
      </Heading>
      <StyledGrid>
        {entries.map((e) => (
          <EntryPreview entry={e} onClick={() => onEntrySelect(e)} />
        ))}
      </StyledGrid>
    </Container>
  );
};

export default EntryPreviews;
