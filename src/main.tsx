import "./styles/_all.scss";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Loading from "./components/loading";


const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ProfileWorkerPage = lazy(() => import("./pages/ProfileWorkerPage"));
const ListJobPage = lazy(() => import("./pages/ListJobPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ListCardPage = lazy(() => import("./pages/ListCardPage"));
const JobCardDetailPage = lazy(() => import("./pages/JobCardDetailPage"));

export const routeLink: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
      <Suspense fallback={<Loading />}>
      <HistoryRouter history={routeLink}>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/list-job" element={<ListJobPage />} />
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/more-card" element={<ListCardPage />} />
              <Route path="/card-detail-job/:idJob" element={<JobCardDetailPage />} />
              <Route path="/profile-worker-page" element={<ProfileWorkerPage />} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer />
      </HistoryRouter>
      </Suspense>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
