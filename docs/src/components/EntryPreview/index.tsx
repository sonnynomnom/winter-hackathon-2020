import { IEntry } from "../../models/entry";
import React from "react";
import { Box } from "@codecademy/gamut-labs";
import { ButtonDeprecatedBase, Container, Heading } from "@codecademy/gamut";
import styled from "@emotion/styled";
import { toTitleCase } from "../../helpers/title";

const StyledBox = styled(Box)`
  cursor: pointer;
`;
export type EntryPreviewProps = {
  entry: IEntry;
  onClick: () => void;
};

const EntryPreview: React.FC<EntryPreviewProps> = ({ entry, onClick }) => {
  if (!entry.mdBody) {
    return null;
  }

  return (
    <ButtonDeprecatedBase onClick={onClick}>
      <StyledBox bordered padding={4}>
        <Container>
          <Heading as="h3" fontSize="xs">
            {toTitleCase(entry.concept)}
          </Heading>
        </Container>
      </StyledBox>
    </ButtonDeprecatedBase>
  );
};

export default EntryPreview;
