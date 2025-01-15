'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent} from '../ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { addList, removeList, addDone, removeDone } from '@/redux/actions';
import { AppDispatch } from '@/store/store';

const TodoList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [list, setList] = useState<string>('');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useSelector((state: any) => state.todoItems);
  const { todoList, repeat } = data;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addList(list));
    setList('');
  };

  const handleDelete = (item: string) => {
    dispatch(removeList(item));
  };

  const handleComplete = (item: string) => {
    dispatch(addDone(item));
  };

  const handleNotComplete = (item: string) => {
    dispatch(removeDone(item));
  };

  return (
    <div className="p-4 bg-gray-100">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-4">
        <Input
          type="text"
          value={list}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setList(e.target.value)}
          placeholder="Enter task"
          required
          className="flex-grow"
        />
        <Button type="submit">
          Add
        </Button>
      </form>

      {todoList.length > 0 ? (
        <>
          {repeat && (
            <div className="text-red-500 text-sm mb-2">This note is already added.</div>
          )}
          <div className="space-y-4 max-h-60 overflow-y-auto">
            
         {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {todoList.map((list: any) => (
              <Card key={list.name} className={`border ${list.complete ? 'border-green-500' : 'border-blue-500'}`}>
                <CardHeader className="flex justify-between items-center">
                  <span className="font-medium">{list.name}</span>
                  <div className="flex space-x-2">
                    {list.complete ? (
                      <Button
                        onClick={() => handleNotComplete(list.name)}
                        size="sm"
                      >
                        <i className="fas fa-check"></i>
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleComplete(list.name)}
                        size="sm"
                      >
                        <i className="fas fa-eraser"></i>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => handleDelete(list.name)}
                      size="sm"
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <Card>
          <CardContent className="text-center text-gray-500">Nothing to do yet.</CardContent>
        </Card>
      )}
    </div>
  );
};

export default TodoList;
