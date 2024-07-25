import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { authAdminRouter, autheUer, defaultRouter } from "./Router";
import { DefaultLayOut, AdminLayout } from "./LayOut";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          {defaultRouter.map((data, inx) => {
            let Page = data.Element;
            let LayOut = DefaultLayOut;
            return (
              <>
                <Route
                  key={inx}
                  path={data.Patch}
                  element={
                    <LayOut>
                      <Page />
                    </LayOut>
                  }
                />
              </>
            );
          })}
          {autheUer.map((data, inx) => {
            let Page = data.Element;
            let LayOut = DefaultLayOut;
            return (
              <>
                <Route
                  key={inx}
                  path={data.Patch}
                  element={
                    <LayOut>
                      <Page />
                    </LayOut>
                  }
                />
              </>
            );
          })}
          {authAdminRouter.map((data, inx) => {
            let Page = data.Element;
            let LayOut = AdminLayout;
            return (
              <>
                <Route
                  key={inx}
                  path={data.Patch}
                  element={
                    <LayOut>
                      <Page />
                    </LayOut>
                  }
                />
              </>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
