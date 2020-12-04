import { IEntry } from "../../models/entry";
import React from "react";
import { Markdown } from "@codecademy/gamut";
import { colors } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";

export const StyledCard = styled.div`
  border: 1px solid ${colors.navy};
`;
export type EntryCardProps = {
  entry: IEntry;
};

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  console.log("rendering entry");
  return <Markdown text={entry.mdBody} />;
};

export default EntryCard;
