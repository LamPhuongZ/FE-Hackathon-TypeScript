import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { getDataJobAPI } from "../../../../redux/reducers/jobReducer";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../../../components/card/Card";
import redAddress from "../../../../assets/icons/icon-red-address.svg";
import arrowRight from "../../../../assets/icons/icon-arrow-right.svg";
import { Content } from "../../../../redux/reducers/jobReducer";

export default function FindJob() {
  const page = 1;
  const size = 6;
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const { objJob } = useSelector((state: RootState) => state.jobReducer);

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList(page, size);
  }, [dispatch]);

  if (!objJob || !objJob.content.length) {
    return <div>No job data available.</div>;
  }

  return (
    <section className="find-job flex flex-col justify-center gap-11 px-[81 px] pt-[70px] pb-[120px]">
      <div className="find-job-top flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold border-b-4 border-custom-blue border-solid pb-1">
          Tìm việc
        </h1>
        <Link
          to="/list-job"
          className="flex justify-center gap-4 text-blue-500 hover:underline"
        >
          Xem Thêm
          <img src={arrowRight} alt="icon-arrow-right" />
        </Link>
      </div>
      <div className="find-job-content grid grid-cols-2 gap-6">
        {objJob.content.map((job: Content, index: number) => (
          <Card
            key={index}
            className="relative w-full h-auto p-[23px_43px_39px_31px] rounded-3xl bg-white shadow-[0px_18px_18px_0px_rgba(0,0,0,0.18)] hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
            onClick={() => navigate(`/card-detail-job/${job.jobId}`)}
          >
            <div className="card-top flex flex-row items-center gap-5 pb-2 border-b-2">
              <img
                className="object-cover rounded-3xl"
                src={job.images[0]?.url || "default-image-url"}
                alt={`Image for ${job.title}`}
                width={95}
                height={70}
              />
              <div className="card-info flex flex-col gap-5">
                <h4 className="text-[18px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                  {job.title}
                </h4>
                <p className="flex justify-start items-center gap-2">
                  <img src={redAddress} alt="icon-address" />
                  <small>{job.address}</small>
                </p>
              </div>
            </div>
            <div className="card-desc pt-2 flex flex-col gap-1">
              <h3 className="text-base font-semibold">Mô tả</h3>
              <p className="truncate text-sm text-[#91929e] overflow-hidden whitespace-nowrap text-ellipsis">
                {job.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
