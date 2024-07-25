import { useState } from 'react';
import { ApireplyComment } from '../../../Reducer/apiReques';
import { useDispatch } from 'react-redux';

const ListComment = ({ isfetching, dataComment, dataAuth, idPosts }) => {
    const dispatch = useDispatch();
    const [isShowIPReply, setShowIPReply] = useState({});
    const [isShowIpReply2, setShowIpReply2] = useState({});
    const [isContextReply, setContextReply] = useState({});
    const [newComment, setNewComment] = useState('');
    const HandleShowReply = (inx) => {
        setShowIPReply((prev) => ({
            ...prev,
            [inx]: !prev[inx],
        }));
    };

    const HandleShowReplyChr = (commentID) => {
        setShowIpReply2((prev) => ({
            ...prev,
            [commentID]: !prev[commentID],
        }));
    };

    const HandleReply = (e, inx, commentID, useId, usernameReply) => {
        console.log(commentID);
        e.preventDefault();
        const data = {
            UserID: dataAuth?.id,
            PostID: idPosts,
            Content: newComment,
            // ParentCommentID: dataComment[inx]?.CommentID,
            ParentCommentID: commentID,
            UserIdReply: useId,
            Username_reply: usernameReply,
        };
        setContextReply((prev) => ({
            ...prev,
            [commentID]: [...(prev[commentID] || []), data],
        }));

        ApireplyComment(dispatch, data);
    };
    return (
        <>
            {dataComment?.map((data, inx) => (
                <li className="list-comment-wraper " key={inx}>
                    {isfetching ? (
                        'loading'
                    ) : (
                        <>
                            <div className="list-comment-box">
                                <div className="strong-commnet">
                                    <div className="list-comment-info">
                                        <img
                                            src="https://scontent.fbmv1-1.fna.fbcdn.net/v/t1.6435-9/113648944_3256090607781692_4790311711389984939_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHY3TpYO52HNc19Xd1dseu5rDeG_WIVB-KsN4b9YhUH4lIgT7Af9TR-AR-lNnaBz8ZzpUGWWUZx83yOVCKusKBx&_nc_ohc=e1_0OBIoDbIQ7kNvgF49gAS&_nc_ht=scontent.fbmv1-1.fna&oh=00_AYD2ToFpLGK7acvSFTcx_tJhERJWWESky3kGqvddSeJ5Ng&oe=66BF2259"
                                            alt=""
                                        />
                                        <div className="list-comment-info-r">
                                            <span>{data?.username}</span>
                                            <p>3h</p>
                                        </div>
                                    </div>
                                    <p className="list-comment-text">{data?.Content}</p>
                                    <div className="list-comment-bottom-box">
                                        <span>
                                            <i className="fa-regular fa-thumbs-up"></i>
                                            like
                                        </span>
                                        <span onClick={() => HandleShowReply(inx)}>
                                            <i className="fa-regular fa-comment-dots"></i>
                                            reply
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-share-from-square"></i>
                                            share
                                        </span>
                                    </div>
                                </div>
                                {data?.replies?.map((dataReplys, replyInx) => (
                                    <>
                                        <div className="list-comment-box" key={replyInx} style={{ marginLeft: '70px' }}>
                                            <div className="list-comment-info">
                                                <img src="https://wallpaperaccess.com/full/3274603.jpg" alt="" />
                                                <div className="list-comment-info-r">
                                                    <span>
                                                        {dataReplys?.user_username} send3 {dataReplys?.reply_username}{' '}
                                                    </span>
                                                    <p>3h</p>
                                                </div>
                                            </div>
                                            <p className="list-comment-text">{dataReplys?.Content}</p>
                                            <div className="list-comment-bottom-box">
                                                <span>
                                                    <i className="fa-regular fa-thumbs-up"></i>
                                                    like
                                                </span>
                                                <span onClick={() => HandleShowReplyChr(dataReplys?.CommentID)}>
                                                    <i className="fa-regular fa-comment-dots"></i>
                                                    reply
                                                </span>
                                                <span>
                                                    <i className="fa-regular fa-share-from-square"></i>
                                                    share
                                                </span>
                                            </div>
                                            {dataReplys?.replies?.map((dataEsx) => {
                                                return (
                                                    <>
                                                        <div
                                                            className="list-comment-box"
                                                            key={replyInx}
                                                            style={{ marginLeft: '70px' }}
                                                        >
                                                            <div className="list-comment-info">
                                                                <img
                                                                    src="https://wallpaperaccess.com/full/3274603.jpg"
                                                                    alt=""
                                                                />
                                                                <div className="list-comment-info-r">
                                                                    <span>
                                                                        {dataEsx?.user_username} send3{' '}
                                                                        {dataEsx?.reply_username}{' '}
                                                                    </span>
                                                                    <p>3h</p>
                                                                </div>
                                                            </div>
                                                            <p className="list-comment-text">{dataEsx?.Content}</p>
                                                            <div className="list-comment-bottom-box">
                                                                <span>
                                                                    <i className="fa-regular fa-thumbs-up"></i>
                                                                    like
                                                                </span>
                                                                <span
                                                                    onClick={() =>
                                                                        HandleShowReplyChr(dataEsx?.CommentID)
                                                                    }
                                                                >
                                                                    <i className="fa-regular fa-comment-dots"></i>
                                                                    reply
                                                                </span>
                                                                <span>
                                                                    <i className="fa-regular fa-share-from-square"></i>
                                                                    share
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                            {isShowIpReply2[dataReplys?.CommentID] && (
                                                <form
                                                    className="comment-submit-box"
                                                    onSubmit={(e) =>
                                                        HandleReply(
                                                            e,
                                                            inx,
                                                            dataReplys?.CommentID,
                                                            dataReplys?.UserID,
                                                            dataReplys?.username,
                                                        )
                                                    }
                                                >
                                                    <textarea
                                                        name="Content"
                                                        onChange={(e) => setNewComment(e.target.value)}
                                                    ></textarea>
                                                    <button>send</button>
                                                </form>
                                            )}
                                        </div>
                                    </>
                                ))}
                                {isContextReply[data?.CommentID]?.map((dataReply, replyInx) => (
                                    <div className="list-comment-box" key={replyInx} style={{ marginLeft: '70px' }}>
                                        <div className="list-comment-info">
                                            <img src="https://wallpaperaccess.com/full/3274603.jpg" alt="" />
                                            <div className="list-comment-info-r">
                                                <span>{dataReply?.username}</span>
                                                <p>3h</p>
                                            </div>
                                        </div>
                                        <p className="list-comment-text">{dataReply?.Content}</p>
                                        <div className="list-comment-bottom-box">
                                            <span>
                                                <i className="fa-regular fa-thumbs-up"></i>
                                                like
                                            </span>
                                            <span onClick={() => HandleShowReply(inx)}>
                                                <i className="fa-regular fa-comment-dots"></i>
                                                reply
                                            </span>
                                            <span>
                                                <i className="fa-regular fa-share-from-square"></i>
                                                share
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {isShowIPReply[inx] && (
                                    <form
                                        className="comment-submit-box"
                                        onSubmit={(e) =>
                                            HandleReply(e, inx, data?.CommentID, data?.UserID, data?.username)
                                        }
                                    >
                                        <textarea
                                            name="Content"
                                            onChange={(e) => setNewComment(e.target.value)}
                                        ></textarea>
                                        <button>send</button>
                                    </form>
                                )}
                            </div>
                        </>
                    )}
                </li>
            ))}
        </>
    );
};

export default ListComment;
