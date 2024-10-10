import "./styles/_all.scss";
import { FloatButton } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store";
import Loading from "./components/loading";

const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ListWorkerPage = lazy(() => import("./pages/ListWorkerPage"));
const ListJobPage = lazy(() => import("./pages/ListJobPage"));
const DetailWorkerPage = lazy(() => import("./pages/DetailWorkerPage"));


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
              <Route path="/list-job" element={<ListJobPage/>} />
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/list-worker" element={<ListWorkerPage />} />
              <Route path="/detail-worker" element={<DetailWorkerPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </PersistGate>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
