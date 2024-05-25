// // App.js
// import React from 'react';
// import { TodoProvider } from './TodoContext';
// import TodoList from './components/TodoList';
// import AddTodo from './components/AddTodo';

// function App() {
//   return (
//     <TodoProvider>
//       <div className="App">
//         <AddTodo />
//         <TodoList />
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <TodoProvider>
      <div className="App">
        <AddTodo />
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
        <TodoList filter={filter} />
      </div>
    </TodoProvider>
  );
}

export default App;

