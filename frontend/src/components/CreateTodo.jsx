const CreateTodo = () => {
  return (
    <div className="todo-container">
      <input className="todo-input" type="text" placeholder="Title"></input>
      <input
        className="todo-input"
        type="text"
        placeholder="Description"
      ></input>
      <button className="todo-button">Add a todo</button>
    </div>
  );
};

export default CreateTodo;
