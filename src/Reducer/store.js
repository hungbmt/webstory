import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import getHome from './getHomeSlice';
import subpage from './GetSubPageSlice';
import chapter from './chapterSlice';
import category from './categorySlice';
import createCategory from './createCategoryslice';
import createList from './CreateListSlice';
import getList from './getListSlice';
import login from './authenSlice';
import search from './searchSlice';
import crwal from './CrawlSlice';
import comment from './CommentSlice';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const rootReducer = combineReducers({
    loginReducer: login,
    getHomeReducer: getHome,
    subpageReducer: subpage,
    chapterReducer: chapter,
    categoryReducer: category,
    createCategoryReducer: createCategory,
    createListReducer: createList,
    getListReducer: getList,
    searchReducer: search,
    crawlReducer: crwal,
    CommentReducer: comment,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
