// TodoList.js
import React, { useState } from 'react';
import TodoItem from './ToDoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className='pt-[80px] bg-slate-400 min-h-screen'>
            <div className='container max-w-[900px] px-6 mx-auto'>
                <h1 className='text-[45px] text-lime-900 mb-5'>To-Do List</h1>
                <div className='flex mb-3'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className='w-full rounded-s-lg text-[20px] text-lime-700 p-2 placeholder:text-lime-500 outline-none'
                    />
                    <button onClick={handleAddTodo} className='text-[24px] px-8 py-1 bg-lime-700 text-white rounded-e-lg'>Add</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <TodoItem todo={todo} onDelete={() => handleDeleteTodo(index)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
