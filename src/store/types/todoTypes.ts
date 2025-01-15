export interface TodoItem {
    name: string;
    complete: boolean;
  }
  
  export interface TodoState {
    todoList: TodoItem[];
    repeat: boolean;
  }