import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  // Add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, editable: false }]);
      setNewTodo('');
    }
  };

  const handleKeyDownAdd = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  // Toggle edit mode for a todo
  const handleEditTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, editable: !todo.editable } : todo
    );
    setTodos(updatedTodos);
  };

  // Update the todo text
  const handleChangeTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  // Save edited todo on Enter key press
  const handleKeyDownEdit = (e, index) => {
    if (e.key === 'Enter') {
      handleEditTodo(index);
    }
  };

  // Delete a todo
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Filter todos based on search input
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4 py-40">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
     

      {/* Search Bar */}
      <label className="block text-gray-700 font-semibold mb-2">Search Todo</label>
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border-[2px] rounded border-blue-500"
      />

      {/* Add Todo */}
      <label className="block text-gray-700 font-semibold mb-2">Add Todo</label>
      <div className="flex mb-4">
      
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDownAdd}
          className="flex-grow p-2 border-[2px] rounded border-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 ml-2 rounded-md"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="list-none">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 mb-2 border"
          >
            {todo.editable ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleChangeTodo(index, e.target.value)}
                onKeyDown={(e) => handleKeyDownEdit(e, index)}
                className="flex-grow p-2 border rounded-md mr-2"
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <div className=''>
              {/* Edit Button */}
              <button
                onClick={() => handleEditTodo(index)}
                className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
              >
                {todo.editable ? 'Save' : 'Edit'}
              </button>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
