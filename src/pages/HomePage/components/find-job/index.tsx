import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { getDataJobAPI } from "../../../../redux/reducers/jobReducer";
import { useNavigate, Link } from "react-router-dom";
import { Content } from "../../../../redux/reducers/jobReducer";
import JobCard from "../../../../components/card-job/JobCard";

export default function FindJob() {
  const page = 0;
  const size = 8;
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const { objJob } = useSelector((state: RootState) => state.jobReducer);

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList(page, size);
  }, []);

  if (!objJob || !objJob.content.length) {
    return <div>No job data available.</div>;
  }

  return (
    <section className="find-job flex flex-col justify-center gap-11 mx-10 pt-[70px] pb-[120px]">
      <div className="find-job-top flex flex-row justify-between items-center">
        <h1 className="text-[32px] font-semibold border-b-4 border-custom-blue border-solid pb-1 w-1/4 text-left">
          Tìm việc
        </h1>
        <Link
          to="/list-job"
          className="flex justify-center gap-1 hover:underline items-center"
        >
          <p className="text-2xl font-medium">Xem thêm</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="find-job-content grid grid-cols-2 gap-6">
        {objJob?.content.map((item: Content) => (
          <div key={item.jobId}>
            <JobCard
              item={item}
              onSelect={() => navigate(`/card-detail-job/${item.jobId}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
