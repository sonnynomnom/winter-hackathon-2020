import { IEntry } from "../models/entry";
import type { Reducer, Action } from "redux";

export const entries: Reducer<IEntry[]> = (
  state: IEntry[] = [],
  action: Action<any>
) => {
  return state;
};
