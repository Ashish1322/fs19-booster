import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./redux/slices/todoSlice";
import { fetchMovies } from "./redux/slices/counterSlice";
function App() {
  const { todos } = useSelector((state) => state.todosSlice);
  const { count, movies } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <button onClick={() => dispatch(fetchMovies())}>Fetch Movies</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addTodo({
              title: title,
              desc: desc,
            })
          );
        }}
      >
        <h1>Count {count} </h1>
        <input
          onChange={(e) => setTitle(e.currentTarget.value)}
          required
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => setDesc(e.currentTarget.value)}
          r
          required
          type="text"
          placeholder="Desc"
        />
        <button>Submit</button>
      </form>
      {movies.map((item) => (
        <p>{item.Title}</p>
      ))}
      <div>
        {todos.map((item, index) => {
          return (
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                onClick={() => {
                  dispatch(deleteTodo({ index: index }));
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
