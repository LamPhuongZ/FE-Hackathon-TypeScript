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
import DashboardLayout from "./pages/ProfileVersion2/dashboardLayout";


const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ListJobPage = lazy(() => import("./pages/ListJobPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ListCardPage = lazy(() => import("./pages/ListCardPage"));
const JobCardDetailPage = lazy(() => import("./pages/JobCardDetailPage"));
const LoginAndRegister = lazy(() => import("./pages/AuthPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ProfileEmployerPage = lazy(() => import("./pages/ProfileEmployer"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const EmployeeDashboard= lazy(() => import("./pages/Employee/employee"));
const EmployerDashboard = lazy(() => import("./pages/Employer/employer"));
const Authenticate = lazy(() => import("./pages/AuthPage/Authenticate"));
const FormApplicationPage = lazy(() => import("./pages/FormApplicationPage"));

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
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            <Route path="/more-card" element={<ListCardPage />} />
            <Route
              path="/card-detail-job/:jobId"
              element={<JobCardDetailPage />}
            />
            <Route path="/form-application" element={<FormApplicationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/policy-page" element={<PolicyPage />} />
          </Route>
          
          <Route path="/login" element={<LoginAndRegister />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
            <Route
              path="/task"
              element={<EmployeeDashboard></EmployeeDashboard>}
            ></Route>
          </Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/profile-employer"
              element={<ProfileEmployerPage></ProfileEmployerPage>}
            ></Route>
            <Route
              path="/task-employer"
              element={<EmployerDashboard></EmployerDashboard>}
            ></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </HistoryRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
