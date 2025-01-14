import {
    SET_USER,
    SET_MODE,
    SET_RAIN,
    SET_MOOD,
    SET_VOLUME,
    LIST_ADD,
    LIST_REMOVE,
    LIST_ADD_DONE,
    LIST_REMOVE_DONE,
  } from '@/redux/constantType/actionType';

  import { Dispatch } from '@reduxjs/toolkit';


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
  
  export const removeList = (name: string) => async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: LIST_REMOVE,
      payload: name,
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
  };
  
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