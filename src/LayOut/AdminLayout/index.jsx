import { Col, Row } from "react-bootstrap";
import Header from "../DefaultLayOut/Header/Header";
import Sidebar from "./Sibar/Sidebar";
const AdminLayOut = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin-layout">
        <Row>
          <Col xl={2}>
            <Sidebar />
          </Col>
          <Col xl={10}>{children}</Col>
        </Row>
      </div>
    </>
  );
};

export default AdminLayOut;
