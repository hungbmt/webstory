import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHref, useLocation, useParams } from 'react-router-dom';
import InfoHolder from '../../Component/SubPageLeftComponent/InfoHolder/InfoHolder';
import Description from '../../Component/SubPageLeftComponent/Description/Descriptinon';
import ListChapter from '../../Component/SubPageLeftComponent/ListChapter/ListChapter';
import PaginationSubpage from '../../Component/PaginationComponent/PaginationComponent';
import SearchChapterComponent from '../../Component/SearchChapterComponent/SearchChapterComponent';
import { apigetSubpage, apiviewSubpage } from '../../Reducer/apiReques';
import './Subpage.css';
import CommentLibrary from '../../Component/commentlibrary/Commentlibrary';

const SubPage = () => {
    const itemSubpage = useSelector((state) => state.subpageReducer.subpage);
    const [searchChapter, isSearchChapter] = useState('');
    const [showSearch, isShowSearch] = useState(false);
    const [heightSearch, setHeightHearch] = useState(0);
    const heighred = useRef();
    const dispatch = useDispatch();
    const { sub } = useParams();
    const host = useHref();
    const Location = useLocation().search;
    const searchParams = new URLSearchParams(Location);
    const page = searchParams.get('page') || 1;
    const pages = Number(page);
    const totalPage = itemSubpage?.item?.totalPage;
    const currenPage = itemSubpage?.item?.curenPage;
    const totalChapter = itemSubpage?.item?.totalChapter;
    const rangePage = Number(3);
    const Hostpage = '?page=';

    useEffect(() => {
        apigetSubpage(dispatch, sub, pages, searchChapter);
    }, [dispatch, sub, pages, searchChapter]);

    useEffect(() => {
        if (showSearch) {
            setHeightHearch(heighred.current.clientHeight + 50);
        } else {
            setHeightHearch(0);
        }
    }, [showSearch]);

    useEffect(() => {
        apiviewSubpage(dispatch, sub);
    }, [dispatch, sub]);

    const HandleSearch = () => {
        isShowSearch(!showSearch);
    };
    const url = window.location.href;
    return (
        <div className="subpage-wrapper">
            <Container>
                <Row>
                    <Col xl={9}>
                        <div className="title-subpae-shared" style={{ marginBottom: '20px' }}>
                            <h6>Thông Tin Truyện</h6>
                        </div>

                        <Row>
                            <Col xl={4} className="info-holder">
                                <InfoHolder itemSubpage={itemSubpage} />
                            </Col>
                            <Col xl={8} className="decription-wrapper">
                                <Description itemSubpage={itemSubpage} />
                            </Col>
                            <div className="title-subpae-shared" style={{ marginTop: '40px' }}>
                                <h6>Danh Sách Truyện </h6>
                                <button className="btn" onClick={HandleSearch}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>

                            <div className="search-chapter-subpage" style={{ height: heightSearch }}>
                                <div ref={heighred} className="list-search-chapter-subpage">
                                    <SearchChapterComponent
                                        heightSearch={heightSearch}
                                        host={host}
                                        Hostpage={Hostpage}
                                        totalPage={totalPage}
                                        totalChapter={totalChapter}
                                        isSearchChapter={isSearchChapter}
                                    />
                                </div>
                            </div>
                            <div className="subpage-chapter-box mb-5">
                                <ListChapter itemSubpage={itemSubpage} />
                            </div>
                            <div className="paginarion-wraper text-center" style={{ marginBottom: 20 }}>
                                <PaginationSubpage
                                    totalPage={totalPage}
                                    currenPage={currenPage}
                                    rangePage={rangePage}
                                    host={host}
                                    Hostpage={Hostpage}
                                />
                            </div>
                            <CommentLibrary host={url} />
                        </Row>
                    </Col>
                    <Col xl={3}>2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubPage;
