import { RouteComponentProps } from "@reach/router";
import React from "react";

export type HubProps = RouteComponentProps & {};

export const Hub: React.FC<HubProps> = () => {
  return <>This is the Hub</>;
};
