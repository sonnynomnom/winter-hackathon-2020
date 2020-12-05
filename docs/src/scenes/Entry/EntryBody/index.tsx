import { IEntry } from "../../../models/entry";
import React from "react";
import { Container, Markdown } from "@codecademy/gamut";
import styled from "@emotion/styled";
import { CodeBlock } from "../CodeBlock";

export const StyledCard = styled.div`
  margin: 2rem;
`;

export type EntryCardProps = {
  entry: IEntry;
};

export const EntryBody: React.FC<EntryCardProps> = ({ entry }) => {
  const overrides = {
    code: {
      component: CodeBlock,
      allowedAttributes: ["className", "class"],
    },
  };
  return (
    <Container column>
      <StyledCard>
        <Markdown text={entry.mdBody} overrides={overrides} />
      </StyledCard>
    </Container>
  );
};
