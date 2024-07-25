import { useRef, useState } from "react";
import "./Crawl.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { apiCrawlTruyenFull } from "../../Reducer/apiReques";
const socket = io("http://localhost:3000");

const Crawl = () => {
  const dispatch = useDispatch();
  const getState = useSelector((state) => state.crawlReducer.CrawlTruyenFull);

  const itemLoading = getState?.isfetching;

  const [messages, setMessages] = useState([]);
  // dùng useRef tránh làm rò gỉ bổ nhớ
  const messagesRef = useRef(messages);
  const messageEl = useRef(null);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);
  useEffect(() => {
    socket.on("successChapter", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `Chapter "${data.nameChapter}" of "${data.title}" crawled successfully`,
      ]);
    });
    return () => {
      socket.off("successChapter");
    };
  }, []);
  console.log(messages);
  // apiCrawlTruyenFull
  const [showInput, setShowInput] = useState(true);
  const [truyenfull, setTruyenfull] = useState("");
  const handleshowCrawlTf = () => {
    setShowInput(!showInput);
  };
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  const HanderSubmitTf = (e) => {
    e.preventDefault();
    const newdata = {
      story: truyenfull,
    };
    apiCrawlTruyenFull(dispatch, newdata);
  };
  return (
    <>
      <div className="crawl-wraper d-flex justify-content-center flex-column mt-5">
        <h4 className="text-center fs-3 fw-bold" style={{ color: "444" }}>
          Crawl
        </h4>
        <span>select server</span>
        <select
          className="mx-4 mt-3 mb-5 py-3 px-2 fs-5 "
          style={{ fontWeight: 500 }}
        >
          <option value="0" onClick={handleshowCrawlTf}>
            truyện full
          </option>
        </select>
        {showInput && (
          <>
            <form
              onSubmit={HanderSubmitTf}
              className="crawl-form-box"
              style={{ width: "100%", padding: "20px" }}
            >
              <span>Note: https://truyenfull.vn/binh-sua-cua-nguoi-yeu/</span>
              <input
                type="text"
                onChange={(e) => setTruyenfull(e.target.value)}
                className="crawl-input"
              />
              <button className="d-flex m-auto my-3 btn-sm-crawl">
                Submit
              </button>
              {!itemLoading ? "" : "loading"}
            </form>
          </>
        )}
      </div>
      <div className="info-crawl-chapter-wrapper" ref={messageEl}>
        {messages.map((data) => {
          return (
            <div className="info-crawl-chapter">
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Crawl;
