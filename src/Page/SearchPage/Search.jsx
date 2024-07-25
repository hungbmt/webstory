import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHref, useSearchParams } from "react-router-dom";
import { apiSearchTf } from "../../Reducer/apiReques";
import { useDispatch, useSelector } from "react-redux";
import CategoryLeft from "../../Component/CategoryComponent/CategoryLeft/CategoryLeft";
import PaginationSubpage from "../../Component/PaginationComponent/PaginationComponent";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const keySearch = searchParams.get("search");
  const pages = searchParams.get("page");
  const numberPage = Number(pages);
  const data = useSelector((state) => state.searchReducer.searchtf);
  const item = data?.item?.listBooks;
  const totalPages = data?.item?.totalPages;
  const currentPage = data?.item?.currenpage;
  const rangePage = data?.item?.rangePage;
  const host = useHref();
  const hosts = host + "?search=" + keySearch + "&";
  const pageHost = "page=";
  useEffect(() => {
    apiSearchTf(dispatch, keySearch, numberPage);
  }, [dispatch, keySearch, numberPage]);
  console.log(">>>>>", keySearch, numberPage);
  return (
    <>
      <Container>
        <div className="category-wraper" style={{ paddingTop: 100 }}>
          <div className="title-category">
            <h6>{data?.item?.titleWraper}</h6>
          </div>
          <Row>
            <Col xl={9}>
              <div className="category-left">
                <CategoryLeft categoryAll={item} />
              </div>
            </Col>
            <Col xl={3}>
              <div className="category-right">{/* <CategoryRight /> */}</div>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <PaginationSubpage
            totalPage={totalPages}
            currenPage={currentPage}
            rangePage={rangePage}
            host={hosts}
            Hostpage={pageHost}
          />
        </div>
      </Container>
    </>
  );
};

export default SearchPage;
