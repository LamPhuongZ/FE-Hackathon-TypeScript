import "./find-job.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { getDataJobAPI } from "../../../../redux/reducers/jobReducer";
import { useNavigate, Link } from "react-router-dom";
import { Content } from "../../../../redux/reducers/jobReducer";
import JobCard from "../../../../components/card-job/JobCard";
import CandiCard from '../../../../components/card-candidates/CandiCard';
import useLoading from "../../../../hooks/useLoading";
import LoadingData from "../../../../components/loading-data/loadingData";

export default function FindJob() {
  const page = 0;
  const size = 8;
  const navigate = useNavigate();
  const showLoading = useLoading();
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
    return <div className="px-[50%]">{showLoading && <LoadingData />}</div>;
  }

  return (
    <section className="findJob">
      <div className="findJob__top">
        <h1 className="title ">Tìm việc</h1>
        <Link to="/list-job" className="findJob__link">
          <p className="see__more">Xem thêm</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 small-phone:w-4 small-phone:h-4"
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
      <div className="findJob__content">
        {objJob?.content.map((item: Content) => (
          <div key={item.jobId}>
            <JobCard
              item={item}
              onSelect={() => navigate(`/card-detail-job/${item.jobId}`)}
              showImages={true}
            />
          </div>
        ))}
      </div>

      
      {/* <div className="flex flex-col gap-11">
        {Array.from({ length: 7 }, (_, index) => (
          <CandiCard key={index} showAmount={true} />
        ))}
      </div> */}
      
    </section>
  );
}
