import { SET_VOLUME } from "../types/actionType";

interface VolumeState {
  volumeValue: number;
}

interface Action {
  type: string;
  volumeValue?: number;
}

const INITIAL_STATE: VolumeState = {
  volumeValue: 50,
};

const volumeReducer = (state: VolumeState = INITIAL_STATE, action: Action): VolumeState => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volumeValue: action.volumeValue !== undefined ? action.volumeValue : state.volumeValue,
      };
    default:
      return state;
  }
};

export default volumeReducer;
