import React, { useEffect, useState } from "react";

import { DebounceInput } from "react-debounce-input";

/**
 * 1. ✅ See todo listing
 * 2. ✅ Add todo
 * 3. ✅ Mark a todo as completed
 * 4. ✅ Mark a todo as not completed
 * 5. ✅ Delete a todo
 * 6. ✅ Update a todo
 */

/**
 *
 * {
 *    title: string
 *    completed: boolean
 * }
 *
 */

function App() {
  const [formTodo, setFormTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(`Initial todos value: `, todos);

    setTodos([
      { title: "Storya", completed: false },
      { title: "Ginhawa x2", completed: true },
      { title: "Dula ug dulaan", completed: false },
    ]);
  }, []);

  function addTodo(title) {
    console.log(`title "${title}"`);

    setTodos([...todos, { title: title, completed: false }]);
  }

  function markDone(todo) {
    setTodos(
      todos.map((item) =>
        item.title === todo.title ? { ...item, completed: true } : item
      )
    );
  }

  function markNotDone(todo) {
    const newTodos = todos.map((item) =>
      item.title === todo.title ? { ...item, completed: false } : item
    );

    setTodos(newTodos);
  }

  function deleteTodo(todo) {
    console.log("todos from useState", todos);

    const newTodos = todos.filter((item) => item.title !== todo.title);

    console.log("newTodos", newTodos);

    setTodos(newTodos);
  }

  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <h1>Hello World</h1>

      <h3>Todos</h3>

      <div>{JSON.stringify(todos)}</div>

      <br />

      <input
        type="text"
        placeholder="Add todo"
        onChange={(event) => {
          /** Handle on change event */
          setFormTodo(event.target.value);

          console.log("Print Me I am Handler");
        }}
      />
      <button onClick={() => addTodo(formTodo)}>Create</button>

      <ul>
        {todos.map((todo, index) => {
          // return <li key={index}>✅ {todo}</li>;
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(event) => {
                  if (todo.completed) {
                    return markNotDone(todo);
                  }

                  markDone(todo);
                }}
              />
              <label>{JSON.stringify(todo)}</label>
              <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
