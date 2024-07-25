import { Link } from 'react-router-dom';
import './SearchChapterComponent.css';

const SearchChapterComponent = ({ host, Hostpage, totalPage, totalChapter, isSearchChapter }) => {
    const pageFirst = `${host}${Hostpage}1`;
    const pageEnd = `${host}${Hostpage}${totalPage}`;
    const chapterFirst = `${host}/chuong-1`;
    const chapterEnd = `${host}/chuong-${totalChapter}/`;
    return (
        <>
            <div className="input-serch-chapter">
                <div className="list-search-chapter-subpage-box">
                    <input type="text" onChange={(e) => isSearchChapter(e.target.value)} />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <button>
                    <Link to={pageFirst}>Trang Đầu</Link>
                </button>
                <button>
                    <Link to={pageEnd}>Trang Cuối</Link>
                </button>
                <button>
                    <Link to={chapterFirst}>Chương đầu</Link>
                </button>
                <button>
                    <Link to={chapterEnd}>Chương Cuối</Link>
                </button>
            </div>
        </>
    );
};

export default SearchChapterComponent;
