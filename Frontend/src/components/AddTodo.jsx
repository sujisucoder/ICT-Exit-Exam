// AddTodo.js
import React, { useState } from 'react';
import axios from 'axios';
import { useTodoContext } from '../TodoContext';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const { setTodos } = useTodoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:5000/api/todo', { description, completed: false });
    setTodos(prev => [...prev, result.data]);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
