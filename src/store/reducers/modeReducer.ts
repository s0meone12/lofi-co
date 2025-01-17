import { SET_MODE } from "../types/actionType";

// // Define the initial state type
// interface ModeState {
//   mode: 'day' | 'night';
// }

// // Define the action type
// interface SetModeAction {
//   type: typeof SET_MODE;
//   mode: 'day' | 'night';
// }

// // Union type for all possible actions
// type ModeAction = SetModeAction;

// const INITIAL_STATE: ModeState = {
//   mode: 'day',
// };

// const modeReducer = (state: ModeState = INITIAL_STATE, action: ModeAction): ModeState => {
//   switch (action.type) {
//     case SET_MODE:
//       return {
//         ...state,
//         mode: action.mode,
//       };
//     default:
//       return state;
//   }
// };

// export default modeReducer;



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

