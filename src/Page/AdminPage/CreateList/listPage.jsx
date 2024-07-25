import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListCategory from '../../../Component/TodolistCategory/TodolistCategory';
import { apiDeleteList, apicreatelist } from '../../../Reducer/apiReques';
import { useDispatch, useSelector } from 'react-redux';
const CreateCategory = () => {
    const item = useSelector((state) => state.getListReducer.getList?.item);

    const dispatch = useDispatch();
    const [isinput, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const HandleOninput = (e) => {
        setInput(e.target.value);
    };
    const removeAccentsAndSpaces = (str) => {
        // Xóa dấu
        str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Xóa dấu cách và thêm dấu -
        str = str.replace(/\s+/g, '-');
        return str;
    };

    const handleSubmitInput = (e) => {
        e.preventDefault();
        const inputArr = isinput.split(',').map((list) => list.trim());
        const slugs = inputArr.map((item) => removeAccentsAndSpaces(item));
        setTodo([...todo, { id: uuidv4(), category: isinput, slug: slugs, completed: false }]);
        const data = {
            list: isinput,
        };
        apicreatelist(dispatch, data);
        setInput('');
    };

    const HandleDelete = (id) => {
        console.log(id);
        apiDeleteList(dispatch, id);
    };
    return (
        <>
            <div className="cetagory-todo-wraper">
                <div className="category-todo-box">
                    <h5>create cetagory</h5>
                    <form onSubmit={handleSubmitInput} className="font-submit-category" style={{ marginBottom: 50 }}>
                        <input
                            type="text"
                            placeholder="text category"
                            value={isinput}
                            required
                            onChange={HandleOninput}
                        />
                        <button type="submit" className="submit-bnt-todo">
                            <i class="fa-regular fa-paper-plane"></i>
                        </button>
                    </form>
                    <TodoListCategory todo={todo} setTodo={setTodo} item={item} HandleDelete={HandleDelete} />
                </div>
            </div>
        </>
    );
};

export default CreateCategory;
