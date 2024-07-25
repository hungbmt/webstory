import { Col, Row } from "react-bootstrap";
import "./BannerComponent.css";
import { Link } from "react-router-dom";
const BannerHomeComponent = ({ isfetching, hotBook }) => {
  console.log(hotBook)
  console.log(isfetching)
  return (
    <>
      <Row>
        <div className="banner-box">
          <Col xl={11}>
            <div className="banner-left">
              {isfetching ? (
                <p>loading</p>
              ) : (
                hotBook?.map((itemBookHot, idx) => {
                  return (
                    <Link to={`${"/book" + itemBookHot.Link + "?page=1"}`}>
                      <div className="book-box">
                        {itemBookHot?.statusStory === "Full" ? (
                          <div className="book-tape-wraper">
                            <div className="book-tape">
                              {itemBookHot?.statusStory === "Full"
                                ? "Complete"
                                : ""}
                            </div>
                            <div className="book-tape-one"></div>
                          </div>
                        ) : (
                          ""
                        )}
                        <img src={itemBookHot.imgStory} alt="" />
                        <div className="title-book">
                          <h4>{itemBookHot.title}</h4>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default BannerHomeComponent;
