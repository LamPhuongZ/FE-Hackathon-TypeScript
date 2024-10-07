import "./styles/_all.scss";
import { FloatButton } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store";
import Loading from "./components/loading";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route path="/" element={<HomePage />} />
            </Route>

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </PersistGate>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
