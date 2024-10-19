import './find-job.scss';
import { useEffect } from "react";
import { Content } from "../../../../redux/reducers/jobReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { getDataJobAPI } from "../../../../redux/reducers/jobReducer";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../../../components/card/Card";
import redAddress from "../../../../assets/icons/icon-red-address.svg";
import arrowRight from "../../../../assets/icons/icon-arrow-right.svg";

export default function FindJob() {
  const page = 1;
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
  }, [dispatch]);

  if (!objJob || !objJob.content.length) {
    return <div>No job data available.</div>;
  }

  return (
    <section className="findJob">
      <div className="findJob__top">
        <h1 className="title">
          Tìm việc
        </h1>
        <Link
          to="/list-job"
          className="findJob__link"
        >
          Xem Thêm
          <img src={arrowRight} className='pb-1' alt="icon-arrow-right" width={24} height={20} />
        </Link>
      </div>
      <div className="findJob__content">
        {objJob.content.map((job: Content, index: number) => (
          <Card
            key={index}
            className="relative w-full h-auto p-[23px_43px_39px_31px] rounded-3xl bg-white shadow-[0px_18px_18px_0px_rgba(0,0,0,0.18)] hover:shadow-lg transition-shadow duration-300"
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
