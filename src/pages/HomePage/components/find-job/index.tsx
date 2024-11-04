import "./find-job.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { getDataJobAPI } from "../../../../redux/reducers/jobReducer";
import { useNavigate, Link } from "react-router-dom";
import { Content } from "../../../../redux/reducers/jobReducer";
import JobCard from "../../../../components/card-job/JobCard";
import useLoading from "../../../../hooks/useLoading";
import LoadingData from "../../../../components/loading-data/loadingData";
import { useRole } from "../../../../hooks/useRole";
import { UserRole } from "../../../../enums/role.enum";
import { toast } from "react-toastify";

export default function FindJob() {
  const page = 0;
  const size = 8;
  const navigate = useNavigate();
  const showLoading = useLoading();
  const dispatch: DispatchType = useDispatch();
  const { objJob } = useSelector((state: RootState) => state.jobReducer);

  const { role } = useRole();
  const isEmployer = role === UserRole.ROLE_EMPLOYER;

  console.log("🚀 ~ FindJob ~ role:", role);

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList(page, size);
  }, []);

  const handleJobSelect = (jobId: number) => {
    if (isEmployer) {
      toast.info("Bạn không thể truy cập vào công việc này"); 
    } else {
      navigate(`/card-detail-job/${jobId}`); 
    }
  };


  if (!objJob || !objJob.content.length) {
    return <div className="px-[50%]">{showLoading && <LoadingData />}</div>;
  }

  return (
    <section className="findJob">
      <div className="findJob__top">
        <h1 className="title ">Tìm việc</h1>
        <Link
          to={`/list-job/jobId=${objJob.content[0].jobId}`}
          className="findJob__link"
        >
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

      {/* Job Item */}
      <div className="findJob__content">
        {objJob?.content.map((item: Content) => (
          <div key={item.jobId}>
            <JobCard
              item={item}
              onSelect={() => handleJobSelect(item.jobId)}
              showImages={true}
              width="w-[250px]"
              widthAddress="w-auto max-w-[160px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
