import { Link, useLocation, useNavigate } from 'react-router-dom';
import './PaginationComponent.css';
const PaginationComponent = ({ totalPage, currenPage, rangePage, host, Hostpage }) => {
    // console.log(totalPage, currenPage, rangePage, host, Hostpage);
    const location = useLocation();
    const navigate = useNavigate();
    let mide = Math.ceil(rangePage / 2);
    let min = Math.max(1, currenPage - mide + 1);
    let max = Math.min(totalPage, min + rangePage - 1);
    let pages = [];
    let currenPages = Number(new URLSearchParams(location.search).get('page')) || 1;
    const handlePrev = () => {
        // Cập nhật trang hiện tại khi nhấp vào nút "prew"
        if (currenPages > 1) {
            navigate(`${host}${Hostpage}${currenPages - 1}`);
        }
    };

    const handleNext = () => {
        // Cập nhật trang hiện tại khi nhấp vào nút "next"
        if (currenPages < totalPage) {
            navigate(`${host}${Hostpage}${currenPages + 1}`);
        }
    };
    for (let i = min; i <= max; i++) {
        pages.push(i);
        // if (!isNaN(i)) {
        //   pages.push(Math.min(i, totalPage));
        // }
        // pages = pages.filter((page) => !isNaN(page));
    }

    return (
        <>
            <div className="pagination-subpage-box">
                <button onClick={handlePrev}>
                    <span>prew</span>
                </button>
                {pages.map((pagi, ix) => {
                    return (
                        <Link to={`${host}${Hostpage}${pagi}`}>
                            <button className={currenPages === pagi ? 'active' : ''} key={ix}>
                                <span>{pagi}</span>
                            </button>
                        </Link>
                    );
                })}
                <button onClick={handleNext}>
                    <span>next</span>
                </button>
            </div>
        </>
    );
};

export default PaginationComponent;
