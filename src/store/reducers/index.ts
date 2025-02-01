import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import modeReducer from "./modeReducer";
import rainReducer from "./rainReducer";
import moodReducer from "./moodReducer";
import volumeReducer from "./volumeReducer";


// Root reducer with proper typing
export const rootReducer = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  moodState: moodReducer,
  volumeState: volumeReducer,
  todoItems: listReducer,
});

// Type definition for the state managed by rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Safely retrieve items from localStorage (only on the client)


// const todoItemsFromStorage = (): any[] => {
//   if (typeof window !== "undefined") {
//     const storedItems = localStorage.getItem("listItems");
//     return storedItems ? JSON.parse(storedItems) : [];
//   }
//   return [];
// };

// Initial state with localStorage fallback
export const initialState: RootState = {
  modeState: { mode: "day" }, // Example values
  rainState: { rainMode: "clear", rainValue: 0 },
  moodState: { moodMode: "happy" },
  volumeState: { volumeValue: 50 },
  todoItems: { todoList: [], repeat: false},
};
