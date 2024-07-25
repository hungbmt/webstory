import { Col, Row } from "react-bootstrap";
import "./bookComplete.css";
import { Link } from "react-router-dom";
const BookComplete = ({ bookcomplete }) => {
  return (
    <>
      <Row>
        {bookcomplete?.map((item, ix) => {
          return (
            <Col className="bookcomplete-mb" xl={2} md={3} sm={6} xs={12}>
              <Link to={"/book/" + item.link}>
                <div className="book-complete-box">
                  <img src={item?.imgStory} alt="" />
                  <div className="name-book-complete">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="chapter-book-complete">
                    <span>chương: {item.totalChapters}</span>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default BookComplete;
