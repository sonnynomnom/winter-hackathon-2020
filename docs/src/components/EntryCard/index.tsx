import { IEntry } from "../../models/entry";
import React from "react";
import { Container, Heading, Markdown } from "@codecademy/gamut";
import { colors } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";
import { toTitleCase } from "../../helpers/title";

export const StyledCard = styled.div`
  margin: 2rem;
`;
export type EntryCardProps = {
  entry: IEntry;
};

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <Container column>
      <StyledCard>
        <Heading as="h1" fontSize="xl">
          {toTitleCase(entry.concept)}
        </Heading>
        <Markdown text={entry.mdBody} />
      </StyledCard>
    </Container>
  );
};

export default EntryCard;
