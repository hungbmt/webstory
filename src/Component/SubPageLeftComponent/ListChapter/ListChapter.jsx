import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./listChapter.css";
const ListChapter = ({ itemSubpage }) => {
  const chapterArray = itemSubpage?.item?.chapter 
  return (
    <>
      <Row>
        {chapterArray?.map((item, ix) => {
          return (
            <>
              <Col xl={6}>
                <Link className="subpage-chapter" to={`/book/${item.slug}/${item.slug_1}` }>
                  {item.title} {item.chapter}
                </Link>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ListChapter;
