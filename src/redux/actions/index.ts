import {
    // SET_USER,
    SET_MODE,
    SET_RAIN,
    SET_MOOD,
    SET_VOLUME,
    LIST_ADD,
    LIST_REMOVE,
    LIST_ADD_DONE,
    LIST_REMOVE_DONE,
  } from '@/store/types/actionType';
import { Dispatch } from 'redux';

type AppActions = SetModeAction | SetRainAction | SetMoodAction | SetVolumeAction;


  interface SetModeAction {
    type: typeof SET_MODE;
    mode: string;
  }
  
  interface SetRainAction {
    type: typeof SET_RAIN;
    rainMode: string;
    rainValue: number;
  }
  
  interface SetMoodAction {
    type: typeof SET_MOOD;
    moodMode: string;
  }
  
  interface SetVolumeAction {
    type: typeof SET_VOLUME;
    volumeValue: number;
  }


  export const setMode = (payload: string): SetModeAction => ({
    type: SET_MODE,
    mode: payload,
  });
  
  export const setRain = (payload: string, value: number): SetRainAction => ({
    type: SET_RAIN,
    rainMode: payload,
    rainValue: value,
  });
  
  export const setMood = (payload: string): SetMoodAction => ({
    type: SET_MOOD,
    moodMode: payload,
  });
  
  export const setVolume = (payload: number): SetVolumeAction => ({
    type: SET_VOLUME,
    volumeValue: payload,
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const addList = (name: string) => async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: LIST_ADD,
      payload: {
        name,
        complete: false,
      },
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const removeList = (name: string) => async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: LIST_REMOVE,
      payload: name,
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const addDone = (name: string) => async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: LIST_ADD_DONE,
      payload: {
        name,
        complete: true,
      },
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const removeDone = (name: string) => async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: LIST_REMOVE_DONE,
      payload: {
        name,
        complete: false,
      },
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
  };



  export function changeDayNight(currentStatus: string) {
    let status: string;
    if (currentStatus === 'day') status = 'night';
    else if (currentStatus === 'night') status = 'day';
  
    return (dispatch: Dispatch<AppActions>) => {
      dispatch(setMode(status));
    };
  }
  
  export function changeRainStatus(currentStatus: string, value: number) {
    let rainStatus: string;
    if (currentStatus === 'rain') rainStatus = 'clear';
    else if (currentStatus === 'clear') rainStatus = 'rain';
  
    return (dispatch: Dispatch<AppActions>) => {
      dispatch(setRain(rainStatus, value));
    };
  }
  
  export function changeMoodStatus(currentStatus: string) {
    return (dispatch: Dispatch<AppActions>) => {
      dispatch(setMood(currentStatus));
    };
  }
  
  export function changeVolume(currentStatus: number) {
    return (dispatch: Dispatch<AppActions>) => {
      dispatch(setVolume(currentStatus));
    };
  }