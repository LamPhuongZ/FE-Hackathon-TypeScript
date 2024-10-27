import "./styles/_all.scss";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Loading from "./components/loading";
import Authenticate from "./pages/AuthPage/Authenticate";

const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const DashboardLayout = lazy(() => import("./components/layout/DashboardLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ListJobPage = lazy(() => import("./pages/ListJobPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const JobCardDetailPage = lazy(() => import("./pages/JobCardDetailPage"));
const FormApplicationPage = lazy(() => import("./pages/FormApplicationPage"));
const LoginAndRegister = lazy(() => import("./pages/AuthPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const ListCandidatedPage = lazy(() => import("./pages/ListCandidatedPage"));
const WorkManagerPage = lazy(() => import("./pages/WorkManagerPage"));

export const routeLink: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <HistoryRouter history={routeLink}>
        <Routes>./pages/ListCandidatedPage
          <Route path="" element={<HomeTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/list-job" element={<ListJobPage />} />
            <Route path="/landing-page" element={<LandingPage />} />
            {/* <Route
              path="/card-detail-job/:jobId"
              element={<JobCardDetailPage />}
            /> */}
            <Route
              path="/card-detail-job/:id"
              element={<JobCardDetailPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route element={<DashboardLayout />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/work-manager" element={<WorkManagerPage />} />
              {/*list candidate của nhà tuyển dụng*/}
              <Route path="/list-candidated" element={<ListCandidatedPage />} />
            </Route>

            {/*form-application của nhà tuyển dụng*/}
            <Route path="/form-application" element={<FormApplicationPage />} />
            <Route path="/policy-page" element={<PolicyPage />} />
          </Route>

          <Route path="/login" element={<LoginAndRegister />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </HistoryRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Về đầu trang</div>} />
  </Provider>
);
