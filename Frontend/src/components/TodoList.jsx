// TodoList.js
// import React from 'react';
// import TodoItem from './TodoItem';
// import { useTodoContext } from '../TodoContext';

// const TodoList = () => {
//   const { todos } = useTodoContext();

//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem key={todo._id} todo={todo} />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from '../TodoContext';

const TodoList = ({ filter }) => {
  const { todos } = useTodoContext();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

