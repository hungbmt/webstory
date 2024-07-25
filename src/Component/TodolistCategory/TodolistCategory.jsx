import "./TodolistCategory.css";

const TodoListCategory = ({ todo, setTodo, item, HandleDelete }) => {
  const dataCategory = item?.data;
  console.log(dataCategory);
  return (
    <>
      <div className="todo-list-Category-wraper">
        {todo.map((data, inx) => (
          <>
            <ul className="todo-list-Category">
              <li key={inx}>
                <input
                  style={{ textTransform: "capitalize" }}
                  type="text"
                  value={data.category || data.list}
                  name=""
                  id=""
                  onChange={(e) => e.preventDefault()}
                />
                <input
                  type="text"
                  // value={data.title}
                  value={data.slug}
                  name=""
                  id=""
                  onChange={(e) => e.preventDefault()}
                />

                <i className="fa-solid fa-trash"></i>
              </li>
            </ul>
          </>
        ))}
        {dataCategory?.map((data, inx) => (
          <>
            <ul className="todo-list-Category">
              <li key={inx}>
                <input
                  type="text"
                  // value={data.title}
                  value={data.category || data.list}
                  name=""
                  id=""
                  onChange={(e) => e.preventDefault()}
                />
                <input
                  type="text"
                  // value={data.title}
                  value={data.slug}
                  name=""
                  id=""
                  onChange={(e) => e.preventDefault()}
                />
                <button onClick={() => HandleDelete(data?.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
};

export default TodoListCategory;
