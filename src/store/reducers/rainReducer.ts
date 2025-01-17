import { SET_RAIN } from "../types/actionType";

interface RainState {
  rainMode: string;
  rainValue: number;
}

interface Action {
  type: string;
  rainMode?: string;
  rainValue?: number;
}

const INITIAL_STATE: RainState = {
  rainMode: 'clear',
  rainValue: 0,
};

const rainReducer = (state: RainState = INITIAL_STATE, action: Action): RainState => {
  switch (action.type) {
    case SET_RAIN:
      return {
        ...state,
        rainMode: action.rainMode || state.rainMode,
        rainValue: action.rainValue !== undefined ? action.rainValue : state.rainValue,
      };
    default:
      return state;
  }
};

export default rainReducer;
