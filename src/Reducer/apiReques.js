import axios from 'axios';

import { getHomeFault, getHomeStart, getHomeSuccess } from './getHomeSlice';
import { subpageFault, subpageStart, subpageSuccess, viewFault, viewStart, viewSuccess } from './GetSubPageSlice';
import { chapterFault, chapterStart, chapterSuccess } from './chapterSlice';
import {
    categoryFault,
    categoryStart,
    categorySuccess,
    // getcategoryFault,
    // getcategoryStart,
    // getcategorySuccess,
} from './categorySlice';
import {
    createCategoryStart,
    createCategorySuccess,
    deleteCategoryFault,
    deleteCategoryStart,
    deleteCategorySuccess,
    getCategoryFault,
    getCategoryStart,
    getCategorySuccess,
} from './createCategoryslice';
import { createListFault, createListStart, createListSuccess, deleteListStart } from './CreateListSlice';
import { getListFault, getListStart, getListSuccess } from './getListSlice';
import { loginFault, loginStart, loginSuccess } from './authenSlice';
import { searchtfFault, searchtfStart, searchtfSuccess } from './searchSlice';
import { CrawlTruyenFullFault, CrawlTruyenFullStart, CrawlTruyenFullSuccess } from './CrawlSlice';
import {
    CommentFault,
    CommentStart,
    CommentSuccess,
    getCommentFault,
    getCommentStart,
    getCommentSuccess,
    ReplyCommentFaulse,
    ReplyCommentStart,
    ReplyCommentSuccess,
} from './CommentSlice';

let apiTruyenFull = '/api/truyenfull/v2/';

// login

export const apiLogin = async (dispatch, data) => {
    dispatch(loginStart());
    try {
        const resp = await axios.post('/api/v1/auth/login', data);
        dispatch(loginSuccess(resp.data));
    } catch (error) {
        dispatch(loginFault(error));
    }
};

export const apiGetHome = async (dispatch) => {
    dispatch(getHomeStart());
    try {
        let reps = await axios.get('/api/v2/story/get-home');
        dispatch(getHomeSuccess(reps.data));
    } catch (error) {
        dispatch(getHomeFault(error));
        console.log(error);
    }
};
export const apigetSubpages = async (dispatch, sub, page = 1, search = '') => {
    dispatch(subpageStart());
    let hrref;
    if (!search) {
        hrref = `/api/v2/subpage/${sub}?page=${page}`;
    } else {
        hrref = `/api/v2/subpage/${sub}?page=${page}&search=${search}`;
    }
    try {
        let reps = await axios.get(hrref);
        console.log(reps);
        dispatch(subpageSuccess(reps.data));
    } catch (error) {
        dispatch(subpageFault(error));
    }
};

// api view subpage

export const apiviewSubpage = async (dispatch, sub) => {
    dispatch(viewStart());
    try {
        const resp = await axios.put('/api/v2/view/' + sub);
        dispatch(viewSuccess(resp.data));
    } catch (error) {
        dispatch(viewFault(error));
    }
};

// /api/v2/subpage/" + sub + "?page="
// api subpage /api/truyenfull/v2/subpage/:sub
export const apigetSubpage = async (dispatch, sub, page, search) => {
    dispatch(subpageStart());
    let hrref;
    if (!search) {
        hrref = `/api/v2/subpage/${sub}?page=${page}`;
    } else {
        hrref = `/api/v2/subpage/${sub}?page=${page}&search=${search}`;
    }
    if (search === '') {
        hrref = `/api/v2/subpage/${sub}?page=${page}`;
    }
    try {
        let reps = await axios.get(hrref);
        dispatch(subpageSuccess(reps.data));
    } catch (error) {
        dispatch(subpageFault(error));
    }
};

// api chappter /api/truyenfull/v2/story/:sub/:chapter

export const apichapter = async (dispatch, sub, page) => {
    dispatch(chapterStart());
    try {
        const resp = await axios.get(apiTruyenFull + 'chap/' + sub + '/' + page);

        dispatch(chapterSuccess(resp.data));
    } catch (error) {
        dispatch(chapterFault(error));
    }
};
// /v1/:category/:list/ api get category
export const apiCategory = async (dispatch, category, list, page) => {
    dispatch(categoryStart());
    try {
        let resp = await axios.get(
            '/api/truyenfull/v2/category/' + category + '/' + list + '?page=' + page || '?page=1',
        );
        dispatch(categorySuccess(resp.data));
    } catch (error) {
        dispatch(categoryFault(error));
    }
};

// v1
export const apicreateCategory = async (dispatch, data) => {
    dispatch(createCategoryStart());
    try {
        // const resp = await axios.post('/api/v1/create-category', {
        //     categories: data,
        //     slug: datas,
        // });
        const resp = await axios.post('/api/v1/create-category', data);
        dispatch(createCategorySuccess(resp.data));
    } catch (error) {
        console.log(error);
        dispatch(createCategorySuccess(error));
    }
};

// get all category /api/v1/get-category

export const apiGetCategory = async (dispatch) => {
    dispatch(getCategoryStart());
    try {
        const resp = await axios.get('/api/v1/get-category');
        dispatch(getCategorySuccess(resp.data));
    } catch (error) {
        console.log(error);
        dispatch(getCategoryFault(error));
    }
};

export const apicreatelist = async (dispatch, data) => {
    dispatch(createListStart());
    try {
        const reps = await axios.post('/api/v1/create-list', data);
        dispatch(createListSuccess(reps.data));
    } catch (error) {
        dispatch(createListFault(error));
    }
};

export const apiGetList = async (dispatch) => {
    dispatch(getListStart());
    try {
        const resp = await axios.get('/api/v1/get-list');
        dispatch(getListSuccess(resp.data));
    } catch (error) {
        console.log(error);
        dispatch(getListFault(error));
    }
};
// delete category /v1/api/delete/category/id
export const apiDeleteCategory = async (dispatch, id) => {
    dispatch(deleteCategoryStart());
    try {
        const resp = await axios.post('/api/v1/delete/category/' + id);
        dispatch(deleteCategorySuccess(resp.data));
    } catch (error) {
        console.log(error);
        dispatch(deleteCategoryFault(error));
    }
};

// delete List /api/v1/delete/list/id

export const apiDeleteList = async (dispatch, id) => {
    dispatch(deleteListStart());
    try {
        const resp = await axios.delete('/api/v1/delete/list/' + id);
        dispatch(deleteCategorySuccess(resp.data));
    } catch (error) {
        console.log(error);
        dispatch(deleteCategoryFault(error));
    }
};

// // search /api/truyenfull/v2/search/?search=tự&page=1
// export const apiSearchTf = async (dispatch, search, page) => {
//   dispatch(searchtfStart());
//   try {
//     let reps = await axios.get(
//       "/api/truyenfull/v2/search/" + "?search=" + search + "&page=" + page
//     );
//   } catch (error) {
//     dispatch(searchtfFault(error));
//   }
// };

export const apiSearchTf = async (dispatch, search, page) => {
    // Dispatches an action to indicate the start of a search
    dispatch(searchtfStart());

    try {
        // Makes a GET request to the search API with the provided search term and page number
        let reps = await axios.get('/api/truyenfull/v2/search/?search=' + search + '&page=' + page || '&page=1');
        dispatch(searchtfSuccess(reps.data));
        // The response from the API is stored in 'reps' but it's not being used in the current function
    } catch (error) {
        // If there's an error with the API request, it dispatches an action with the error
        dispatch(searchtfFault(error));
    }
};

// api crawl Truyeeenfull.vn
export const apiCrawlTruyenFull = async (dispatch, data) => {
    dispatch(CrawlTruyenFullStart());
    try {
        let resp = await axios.post('/api/truyenfull/v3/crawl', data);
        dispatch(CrawlTruyenFullSuccess(resp.data));
    } catch (error) {
        dispatch(CrawlTruyenFullFault());
    }
};

// api Comment /api/v1/comment/

export const ApiComment = async (dispatch, data) => {
    dispatch(CommentStart());
    try {
        let resp = await axios.post('/api/v1/comment', data);
        dispatch(CommentSuccess(resp.data));
    } catch (error) {
        dispatch(CommentFault(error));
    }
};

export const apiGetComment = async (dispatch, data, useId) => {
    dispatch(getCommentStart());
    try {
        let resp = await axios.get('/api/v1/get-comment/' + data, useId);
        dispatch(getCommentSuccess(resp.data));
        console.log(resp);
    } catch (error) {
        dispatch(getCommentFault(error));
    }
};

export const ApireplyComment = async (dispatch, data) => {
    dispatch(ReplyCommentStart());
    try {
        let reps = await axios.post('/api/v1/comment/reply', data);
        dispatch(ReplyCommentSuccess(reps.data));
    } catch (error) {
        dispatch(ReplyCommentFaulse(error));
    }
};
