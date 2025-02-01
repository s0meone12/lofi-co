import {
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
  ActionType,
} from "../types/actionType";
// import { TodoState, TodoItem } from "../types/todoTypes";


 interface TodoItem {
  name: string;
  complete: boolean;
}

interface TodoState {
    todoList: TodoItem[];
    repeat: boolean;
}

const INITIAL_STATE: TodoState = {
  todoList: typeof window !== "undefined" && localStorage.getItem("listItems")
    ? JSON.parse(localStorage.getItem("listItems")!)
    : [],
  repeat: false,
};

const listReducer = (
  state: TodoState = INITIAL_STATE,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case LIST_ADD: {
      const newList: TodoItem = action.payload;
      const checkName = state.todoList.find(
        (item) => item.name === action.payload.name
      );

      if (!checkName) {
        return {
          ...state,
          repeat: false,
          todoList: [...state.todoList, newList],
        };
      } else {
        return {
          ...state,
          repeat: true,
        };
      }
    }

    case LIST_REMOVE: {
      return {
        ...state,
        todoList: state.todoList.filter(
          (item) => item.name !== action.payload
        ),
      };
    }

    case LIST_ADD_DONE: {
      const existNote = state.todoList.find(
        (item) => item.name === action.payload.name
      );

      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.name === existNote?.name ? action.payload : item
        ),
      };
    }

    case LIST_REMOVE_DONE: {
      const uncompleteNote = state.todoList.find(
        (item) => item.name === action.payload.name
      );

      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.name === uncompleteNote?.name ? action.payload : item
        ),
      };
    }

    default:
      return state;
  }
};

export default listReducer;