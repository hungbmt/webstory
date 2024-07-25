import { Col } from 'react-bootstrap';
import './BookHomeUpdata.css';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

const BookHomeUpdata = ({ newBook }) => {
    return (
        <>
            {newBook?.map((item, i) => {
                const genresArray = JSON.parse(`${item.genres}`);

                return (
                    <div className="new-book-wraper">
                        <Col xl={5} lg={5} md={6} sm={6} xs={6}>
                            <Link to={`${'/book/' + item.slug + '?page=1'}`}>
                                <div className="title-home-new">
                                    <span className="home-shared">{item.title}</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xl={3} lg={3} className="d-md-none d-sm-none d-none d-lg-block">
                            <div className="genre-home-new">
                                {genresArray?.map((data, i) => {
                                    return (
                                        <>
                                            {/* /:category/:sub */}
                                            <Link key={i} to={'/'}>
                                                <span className="home-shared">{data.genres}, </span>
                                            </Link>
                                        </>
                                    );
                                })}
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={3} xs={3}>
                            <div className="chapter-home-new">
                                <span className="home-shared chapter">Chương: {item?.totalChapters}</span>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={3} xs={3}>
                            <div className="time-home-new">
                                <span className="home-shared">
                                    <TimeAgo date={item?.time_update} />
                                </span>
                            </div>
                        </Col>
                    </div>
                );
            })}
        </>
    );
};

export default BookHomeUpdata;
