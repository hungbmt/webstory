import "./Description.css";
const Description = ({ itemSubpage }) => {
 const data = itemSubpage?.item?.data

  return (
    <>
      <div className="title-Subpage">
        <h2>{data?.title}</h2>
      </div>
      <div className="desc-subpage">
        <div className="text-desc">
          <span
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Description;
