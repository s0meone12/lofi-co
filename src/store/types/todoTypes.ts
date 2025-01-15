export interface TodoItem {
    name: string;
    complete: boolean;
  }
  
  export interface TodoState {
    todoList: { name: string; complete: boolean }[];
    repeat: boolean;
  }