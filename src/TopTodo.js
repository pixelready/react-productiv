import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo() {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  //TODO implement top todo filter
  return <Todo  />;
}

export default TopTodo;