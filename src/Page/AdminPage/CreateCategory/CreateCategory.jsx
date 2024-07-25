import { useState } from 'react';
import './CreateCategory.css';
import { v4 as uuidv4 } from 'uuid';
import TodoListCategory from '../../../Component/TodolistCategory/TodolistCategory';
import { apiDeleteCategory, apicreateCategory } from '../../../Reducer/apiReques';
import { useDispatch, useSelector } from 'react-redux';
const CreateCategory = () => {
    const item = useSelector((state) => state.createCategoryReducer.categories.getCategory?.item);

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
    const HandleDelete = (id) => {
        console.log(id);
        apiDeleteCategory(dispatch, id);
    };

    const handleSubmitInput = (e) => {
        e.preventDefault();
        const inputArr = isinput.split(',').map((list) => list.trim());
        console.log(inputArr);
        const slugs = inputArr.map((item) => removeAccentsAndSpaces(item));
        const data = {
            category: isinput,
        };
        setTodo([...todo, { id: uuidv4(), category: isinput, slug: slugs, completed: false }]);
        apicreateCategory(dispatch, data);
        setInput('');
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
