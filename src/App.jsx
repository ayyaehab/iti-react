import { Todo } from "./components/Todo";
export const App = () => {
  const todos=[
   { title:"first", details: "do the first" },
   { title:"second", details: "do the first" },
   { title:"third", details: "do the first" },
   { title:"fourth", details: "do the first" },
  ];
  // return <h1>App</h1>;
  return(

<div>
  <h1>my to do list</h1>
  {todos.map((todo) => (
    <Todo title={todo.title} details={todo.details} />
  ))}
</div>


  )


};
