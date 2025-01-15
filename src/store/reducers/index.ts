import { combineReducers } from "@reduxjs/toolkit";
import { listReducer } from "./listReducer";
import { TodoState } from "../types/todoTypes";

// Root reducer with proper typing
export const rootReducer = combineReducers({
  todoItems: listReducer,
});

// Type definition for the state managed by rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Safely retrieve items from localStorage (only on the client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const todoItemsFromStorage = (): any[] => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem("listItems");
    return storedItems ? JSON.parse(storedItems) : [];
  }
  return [];
};

// Initial state with localStorage fallback
export const initialState = {
  todoItems: { todoList: todoItemsFromStorage() } as TodoState,
};
