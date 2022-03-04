import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);
  /** add a new todo to list */
  function create(newTodo) {
    newTodo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    console.log("updatedTodo", updatedTodo);
    //map -> check todo, return same or updated if match
    let matchedTodo = todos.find(t => t.id === updatedTodo.id);
    for (let key in matchedTodo) {
      matchedTodo[key] = updatedTodo[key];
    }
    setTodos(todos => [...todos]);
  }

  /** delete a todo by id */
  //change this back to just ID
  function remove(todo) {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length !== 0 &&
            <EditableTodoList update={update} remove={remove} todos={todos} />}
          {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>
          }
        </div>


        <div className="col-md-6">

          {todos.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>

        </div>

      </div>
    </main>
  );
}

export default TodoApp;