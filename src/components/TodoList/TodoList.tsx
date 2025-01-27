// 'use client';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { Card, CardHeader, CardContent} from '../ui/card';
// import { useDispatch, useSelector } from 'react-redux';
// import { addList, removeList, addDone, removeDone } from '@/redux/actions';
// import { AppDispatch } from '@/store/store';

// const TodoList: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const [list, setList] = useState<string>('');
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const data = useSelector((state: any) => state.todoItems);
//   const { todoList, repeat } = data;

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(addList(list));
//     setList('');
//   };

//   const handleDelete = (item: string) => {
//     dispatch(removeList(item));
//   };

//   const handleComplete = (item: string) => {
//     dispatch(addDone(item));
//   };

//   const handleNotComplete = (item: string) => {
//     dispatch(removeDone(item));
//   };

//   return (
//     <div className="overflow-hidden p-4 bg-gray-100 rounded-lg min-h-[80vh]">
//       <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-4">
//         <Input
//           type="text"
//           value={list}
//           onChange={(e: ChangeEvent<HTMLInputElement>) => setList(e.target.value)}
//           placeholder="Enter task"
//           required
//           className="flex-grow text-gray-500"
//         />
//         <Button type="submit">
//           Add
//         </Button>
//       </form>
    
//       {todoList.length > 0 ? (
//         <>
//           {repeat && (
//             <div className="text-red-500 text-sm mb-2">This note is already added.</div>
//           )}
//           <div className="overflow-y-auto space-y-4 max-h-[50vh] w-full scrollbar-hide">  
//          {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//             {todoList.map((list: any) => (
//               <Card key={list.name} className={`border ${list.complete ? 'border-green-500' : 'border-blue-500'}`}>
//                 <CardHeader className="flex flex-row justify-between items-center">
//                   <span className="font-medium">{list.name}</span>
//                   <div className="flex space-x-2">
//                     {list.complete ? (
//                       <Button
//                         onClick={() => handleNotComplete(list.name)}
//                         size="sm"
//                       >
//                         <i className="fas fa-check"></i>
//                       </Button>
//                     ) : (
//                       <Button
//                         onClick={() => handleComplete(list.name)}
//                         size="sm"
//                       >
//                         <i className="fas fa-eraser"></i>
//                       </Button>
//                     )}
//                     <Button
//                       variant="outline"
//                       onClick={() => handleDelete(list.name)}
//                       size="sm"
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </div>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </>
//       ) : (
//         <Card>
//           <CardContent className="text-center text-gray-500">Nothing to do yet.</CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default TodoList;



"use client";

import { useState, useEffect } from "react";
import { PlusCircle, CheckCircle2, Circle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem = ({ 
  todo, 
  onToggle, 
  onDelete 
}: { 
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) => (
  <div className="flex items-center gap-2 p-2 bg-card rounded-lg border border-border transition-all hover:shadow-md group">
    <button
      onClick={() => onToggle(todo.id)}
      className="text-primary hover:text-primary/80 transition-colors"
    >
      {todo.completed ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <Circle className="h-4 w-4" />
      )}
    </button>
    <span className={cn(
      "flex-1 text-foreground text-sm",
      todo.completed && "line-through text-muted-foreground"
    )}>
      {todo.text}
    </span>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => onDelete(todo.id)}
      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
    >
      <Trash2 className="h-3 w-3 text-destructive" />
    </Button>
  </div>
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isClient]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo.trim(), completed: false }
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = (filter: string) => {
    switch (filter) {
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-96 rounded-2xl shadow-lg">
          <CardContent>
            <div className="animate-pulse">
              <div className="h-7 bg-muted rounded-md mb-3"></div>
              <div className="space-y-2">
                <div className="h-9 bg-muted rounded-md"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-80 rounded-2xl shadow-lg">
        <CardContent className="pt-6">
          <form onSubmit={addTodo} className="flex gap-2 mb-3">
            <Input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 h-7 text-sm"
            />
            <Button type="submit" size="sm" className="h-7 px-2">
              <PlusCircle className="h-3.5 w-3.5" />
            </Button>
          </form>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-2 h-7">
              <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
              <TabsTrigger value="active" className="text-xs">Active</TabsTrigger>
              <TabsTrigger value="completed" className="text-xs">Completed</TabsTrigger>
            </TabsList>

            {["all", "active", "completed"].map((filter) => (
              <TabsContent 
                key={filter} 
                value={filter} 
                className="h-[60px] relative"
              >
                <div className="absolute inset-0 overflow-y-auto pr-2 space-y-1.5 scrollbar-thin">
                  {filteredTodos(filter).map(todo => (
                    <TodoItem 
                      key={todo.id} 
                      todo={todo} 
                      onToggle={toggleTodo}
                      onDelete={deleteTodo}
                    />
                  ))}
                  {filteredTodos(filter).length === 0 && (
                    <p className="text-center text-muted-foreground text-xs py-4">
                      No {filter} tasks
                    </p>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
