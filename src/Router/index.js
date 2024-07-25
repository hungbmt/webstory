import CreateCategory from "../Page/AdminPage/CreateCategory/CreateCategory";
import ListPage from "../Page/AdminPage/CreateList/listPage";
import Categoty from "../Page/CategoryPage/Category";
import ChapterPage from "../Page/ChapterPage/ChapterPage";
import Crawl from "../Page/Crawl/Crawl";
import HomePage from "../Page/HomePage/HomePage";
import SearchPage from "../Page/SearchPage/Search";
import SubPage from "../Page/SubPage/SubPage";
import LoginPage from "../Page/authPage/login/LoginPage";

export const defaultRouter = [
  { Patch: "/", Element: HomePage },
  { Patch: "/book/:sub", Element: SubPage },
  { Patch: "/book/:sub/:chapter", Element: ChapterPage },
  { Patch: "/:category/:sub", Element: Categoty },
  { Patch: "/search/", Element: SearchPage },
];

export const autheUer = [{ Patch: "/login", Element: LoginPage }];

export const authAdminRouter = [
  { Patch: "/admin/create-category", Element: CreateCategory },
  { Patch: "/admin/create-list", Element: ListPage },
  { Patch: "/admin/crawl", Element: Crawl },
];
