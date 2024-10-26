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
import DashboardLayout from "./components/layout/DashboardLayout";
import WorkManagerPage from "./pages/WorkManagerPage";
import ListCandidatedPage from "./pages/ListCandidatedPage";

const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
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
            <Route
              path="/card-detail-job/:jobId"
              element={<JobCardDetailPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
              <Route
                path="/work-manager"
                element={<WorkManagerPage></WorkManagerPage>}
              ></Route>
              {/*list candidate của nhà tuyển dụng*/}
              <Route
                path="/list-candidated"
                element={<ListCandidatedPage />}
              ></Route>
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
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
