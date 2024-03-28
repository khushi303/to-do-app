// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className='flex mb-1'>
            <p className='bg-white text-[24px] text-lime-500 w-full text-center py-1'>{todo}</p>
            <button onClick={onDelete} className='text-[24px] px-5 py-1 bg-lime-700 text-white rounded-e-lg'>Delete</button>
        </div>
    );
};

export default TodoItem;