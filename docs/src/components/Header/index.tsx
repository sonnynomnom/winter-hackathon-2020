import React from "react";
import { Heading } from "@codecademy/gamut";
import { colors } from "@codecademy/gamut-styles";

export type HeaderProps = {
  path: string;
};

export const Header: React.FC<HeaderProps> = ({ path }) => {
  return (
    <div
      style={{
        textAlign: "center",
        borderBottom: "1px solid " + colors["gray-200"],
      }}
    >
      <Heading as="h1" fontSize="sm">
        {path}
      </Heading>
    </div>
  );
};
