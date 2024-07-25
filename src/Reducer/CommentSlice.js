import { createSlice } from '@reduxjs/toolkit';

export const CommentSlice = createSlice({
    name: 'Comment',
    initialState: {
        Comment: {
            isfetching: false,
            item: null,
            error: false,
        },
        replyComment: {
            isfetching: false,
            item: null,
            error: false,
        },
        getComment: {
            isfetchings: false,
            item: null,
            error: false,
        },
    },
    reducers: {
        CommentStart: (state) => {
            state.Comment.isfetching = true;
        },
        CommentSuccess: (state, action) => {
            state.Comment.isfetching = false;
            state.Comment.item = action.payload;
            state.Comment.error = false;
        },
        CommentFault: (state) => {
            state.Comment.isfetching = false;
            state.Comment.error = true;
        },
        ReplyCommentStart: (state) => {
            state.replyComment.isfetching = true;
        },
        ReplyCommentSuccess: (state, action) => {
            state.replyComment.isfetching = false;
            state.replyComment.error = false;
            state.replyComment.item = action.payload;
        },
        ReplyCommentFaulse: (state) => {
            state.replyComment.isfetching = false;
            state.replyComment.error = true;
        },
        getCommentStart: (state) => {
            state.getComment.isfetchings = true;
        },
        getCommentSuccess: (state, action) => {
            state.getComment.isfetchings = false;
            state.getComment.item = action.payload;
            state.getComment.error = false;
        },
        getCommentFault: (state) => {
            state.getComment.isfetchings = false;
            state.getComment.error = true;
        },
    },
});

export const {
    CommentStart,
    CommentSuccess,
    CommentFault,
    ReplyCommentStart,
    ReplyCommentSuccess,
    ReplyCommentFaulse,
    getCommentStart,
    getCommentSuccess,
    getCommentFault,
} = CommentSlice.actions;

export default CommentSlice.reducer;
