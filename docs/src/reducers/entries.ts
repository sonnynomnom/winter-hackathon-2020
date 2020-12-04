import { IEntry } from "../models/entry";
import type { Reducer, Action } from "redux";
import { AddEntryAction, ADD_ENTRY } from "../actions/addEntry";

export const entries: Reducer<IEntry[]> = (
  state: IEntry[] = [],
  action: Action<any>
) => {
  switch (action.type) {
    case ADD_ENTRY:
      return addEntry([...state], action as AddEntryAction);
  }
  return state;
};

const addEntry = (state: IEntry[], action: AddEntryAction): IEntry[] => {
  const newEntry = action as IEntry;
  delete (newEntry as any)["type"];

  // TODO: really this should be a map so we don't have to do all this
  for (let e of state) {
    if (e.language !== action.language) {
      continue;
    }
    if (e.concept !== action.concept) {
      continue;
    }
    if (e.mdBody !== action.mdBody) {
      continue;
    }
    return state;
  }

  state.push(newEntry);
  return state;
};
