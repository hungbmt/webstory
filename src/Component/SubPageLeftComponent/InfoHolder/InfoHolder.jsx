// import { Link } from "react-router-dom";
import "./InfoHolder.css";
const InfoHolder = ({ itemSubpage }) => {
 const data = itemSubpage?.item?.data

  return (
    <>
      <div className="book">
        <img src={data?.imgStory} alt="" />
      </div>
      <div className="info" style={{ marginTop: "40px" }}>
        <div>
          <h3>Tác Giả:</h3>
          <span>{data?.author}</span>
        </div>
        <div>
          <h3>Thể Loại:</h3>
            {/* {itemSubpage?.genres?.map((item, ix) => {
              return (
                <>
                  <Link>{item} , </Link>
                </>
              );
            })} */}
        </div>
        
        <div>
          <h3>Nguồn:</h3>
          <span>{data?.source}</span>
        </div>
        <div>
          <h3>Trạng Thái:</h3>
          <span>{data?.statusStory}</span>
        </div>
      </div>
    </>
  );
};

export default InfoHolder;
