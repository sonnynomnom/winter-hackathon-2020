import { Input } from "@codecademy/gamut";
import { colors } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";
import React from "react";

const StyledInput = styled(Input)`
  border-radius: 4px;
  border: 1px solid ${colors.navy};
`;

export type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
  return <StyledInput placeholder="language + concept search" />;
};

export default Search;
