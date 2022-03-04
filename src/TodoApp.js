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

function TodoApp() {
  const [todos, setTodos] = useState([]);
  /** add a new todo to list */
  function create(newTodo) {
    let newTodo = {...newTodo, id:uuid()};
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    let updatedTodoIdx = todos.indexOf(t => t.id === updatedTodo.id);
    todos[updatedTodoIdx] = updatedTodo;
    setTodos(todos => [...todos]);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todos.length !== 0 &&
            <EditableTodoList /> }
            {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>
            }
          </div>

          
          <div className="col-md-6">

            {todos.length !== 0 &&
              <section className="mb-4">
                <h3>Top Todo</h3>
                <TopTodo />
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