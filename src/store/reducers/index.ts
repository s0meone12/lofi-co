import { combineReducers } from "@reduxjs/toolkit";
import { listReducer } from "./listReducer";

// Root reducer with proper typing
export const rootReducer = combineReducers({
  todoItems: listReducer,
});

// Type definition for the state managed by rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Safely retrieve items from localStorage (only on the client)
const todoItemsFromStorage = (): any[] => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem("listItems");
    return storedItems ? JSON.parse(storedItems) : [];
  }
  return [];
};

// Initial state with localStorage fallback
export const initialState = {
  todoItems: { todoList: todoItemsFromStorage() },
};
