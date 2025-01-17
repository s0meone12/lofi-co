import { SET_MOOD } from "../types/actionType";

interface MoodState {
  moodMode: string;
}

interface Action {
  type: string;
  moodMode?: string;
}

const INITIAL_STATE: MoodState = {
  moodMode: 'chill',
};

const moodReducer = (state: MoodState = INITIAL_STATE, action: Action): MoodState => {
  switch (action.type) {
    case SET_MOOD:
      return {
        ...state,
        moodMode: action.moodMode || state.moodMode,
      };
    default:
      return state;
  }
};

export default moodReducer;
