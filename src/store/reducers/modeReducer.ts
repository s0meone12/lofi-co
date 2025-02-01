import { SET_MODE } from "../types/actionType";


interface ModeState {
  mode: string;
}

interface Action {
  type: string;
  mode?: string;
}

const INITIAL_STATE: ModeState = {
  mode: 'day',
};

const modeReducer = (state: ModeState = INITIAL_STATE, action: Action): ModeState => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode || state.mode,
      };
    default:
      return state;
  }
};

export default modeReducer;

