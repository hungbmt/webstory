import { Link, useParams } from "react-router-dom";
import "./Chapter.css";

const Chapter = ({ itemChapter }) => {
  const { sub, chapter } = useParams();
  const chap = Number(chapter.split("-")[1]);
  const nextChap = chap + 1;
  const prewchap = chap - 1;
  return (
    <>
      <div className="chapter-box">
        <div className="chapter-top d-flex flex-column justify-content-center text-center">
          <div className="chapter-title" style={{ marginBottom: 10 }}>
            <h3>{itemChapter?.title}</h3>
          </div>
          <div className="chapter-name" style={{ marginBottom: 10 }}>
            <h6>{itemChapter?.nameChapter}</h6>
          </div>
          <div className="btn-nav">
            {prewchap <= 1 ? (
              <button>prews</button>
            ) : (
              <>
                <Link to={`/book/${sub}/chuong-${prewchap}`}>
                  <button>prew</button>
                </Link>
              </>
            )}

            <button className="m-3">list</button>
            <Link to={`/book/${sub}/chuong-${nextChap}`}>
              <button>next</button>
            </Link>
          </div>
        </div>
        <div className="chapter-body">
          {itemChapter?.body === null ? (
            "vui lòng chờ đợi tác giả"
          ) : (
            <>
              <p dangerouslySetInnerHTML={{ __html: itemChapter?.body }}></p>
            </>
          )}
        </div>
        <div className="btn-nav text-center">
          {prewchap <= 1 ? (
            <button>prews</button>
          ) : (
            <>
              <Link to={`/book/${sub}/chuong-${prewchap}`}>
                <button>prew</button>
              </Link>
            </>
          )}

          <button className="m-3">list</button>
          <Link to={`/book/${sub}/chuong-${nextChap}`}>
            <button>next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Chapter;
