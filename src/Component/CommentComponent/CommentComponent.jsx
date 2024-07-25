import { useEffect, useState } from 'react';
import './CommentComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { ApiComment, apiGetComment } from '../../Reducer/apiReques';
import ListComment from './ListComment/ListComent';
const CommentComponent = ({ dataAuth, idPosts }) => {
    const itemComment = useSelector((state) => state.CommentReducer?.getComment);
    const isfetching = itemComment?.isfetching;
    const dataComment = itemComment.item?.data;
    const dispatch = useDispatch();
    const [isComment, setComment] = useState([]);
    const [newComment, setNewComment] = useState('');
    const HandlePostComment = (e) => {
        e.preventDefault();
        // UserID, PostID, Content,ParentCommentID
        const data = {
            UserID: dataAuth?.id,
            PostID: idPosts,
            Content: newComment,
        };
        ApiComment(dispatch, data);
        if (newComment.trim() === '') return; // Kiểm tra comment rỗng
        setComment((prevComments) => [...prevComments, data]);
        setNewComment('');
    };
    useEffect(() => {
        apiGetComment(dispatch, idPosts);
    }, [dispatch, idPosts]);
    return (
        <>
            <form className="comment-submit-box" onSubmit={HandlePostComment}>
                <textarea
                    name="Content"
                    id=""
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button>send</button>
            </form>
            <ul>
                {isComment?.map((data, inx) => (
                    <>
                        <li className="list-comment-box">
                            <div className="list-comment-info">
                                <img
                                    src="https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/449195653_7890526537671386_6481136435959049630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFxbfTALtHXQygpQJYHQMhn5mCrX8suYbvmYKtfyy5hu2jWkXIShYkmcaK4EuNMNIBsjf6swQHQNF-7M-hrQQ-x&_nc_ohc=ADjVbdMqEvkQ7kNvgGB4Ygj&_nc_ht=scontent.fbmv1-1.fna&gid=AlOp_hsrQt7hPcSAQMmfkGs&oh=00_AYA4D-SzkJF8leJEvm0eiIfyPMueOZ0WeDjB9np0RWpv9Q&oe=668BAC72"
                                    alt=""
                                />
                                <div className="list-comment-info-r">
                                    <span>{dataAuth?.username}</span>
                                    <p>3h</p>
                                </div>
                            </div>
                            <p className="list-comment-text">{data.Content}</p>
                            <div className="list-comment-bottom-box">
                                <span>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    like
                                </span>
                                <span>
                                    <i class="fa-regular fa-comment-dots"></i>
                                    reply
                                </span>
                                <span>
                                    <i class="fa-regular fa-share-from-square"></i>
                                    share
                                </span>
                            </div>
                        </li>
                    </>
                ))}
                {/* dataAuth, idPosts */}
                <ListComment isfetching={isfetching} dataComment={dataComment} dataAuth={dataAuth} idPosts={idPosts} />
            </ul>
        </>
    );
};

export default CommentComponent;
