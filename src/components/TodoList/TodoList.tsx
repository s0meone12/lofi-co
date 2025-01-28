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
      <div className="min-h-screen flex items-center justify-center pt-4">
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
    <div className="flex items-center justify-center pt-2">
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
