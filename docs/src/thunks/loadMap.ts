import { MAP_LOADED } from "../actions/mapLoaded";
import { Dispatch } from "redux";

const URL_STARTER = "../../codepedia";

export const loadMap = () => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`${URL_STARTER}/map.json`);
    const map = await resp.json();
    dispatch({ type: MAP_LOADED, map });
  };
};
