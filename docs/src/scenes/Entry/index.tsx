import { RouteComponentProps } from "@reach/router";
import { IEntry } from "../../models/entry";
import React from "react";

type EntryProps = RouteComponentProps & {
  entry: IEntry;
};
export const Entry: React.FC<EntryProps> = () => {
  return <>This is an entry</>;
};
