import JobCardDetail from "../../components/card-job/JobCardDetail";
import Card from "../../components/card/Card";
import imgJob from "../../assets/images/img-job.png";
import redAddress from "../../assets/icons/icon-red-address.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getDataJobDetailAPI } from "../../redux/reducers/jobReducer";

export default function JobCardDetailPage() {
  const { jobId } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { objJobDetails } = useSelector((state: RootState) => state.jobReducer);

  useEffect(() => {
    if (jobId) {
      dispatch(getDataJobDetailAPI(Number(jobId)));
    }
  }, [jobId, dispatch]);

  const jobData = [
    {
      id: "1",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
    {
      id: "2",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
    {
      id: "3",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
    {
      id: "4",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ này cần thêm thông tin. Vui lòng xem thêm",
      image: imgJob,
    },
    {
      id: "5",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
    {
      id: "6",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
    {
      id: "7",
      title: "Vệ sinh căn hộ, gia đình",
      address: "Số 5 đường 5, phường 5",
      description:
        "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
      image: imgJob,
    },
  ];

  return (
    <div className="grid grid-cols-[867px_minmax(0,_1fr)] gap-x-7 py-20 px-[72px] 2xl:grid-cols-[1300px_minmax(0,_1fr)] small-tablet:grid-cols-[minmax(0,_1fr)] small-tablet:px-2 small-tablet:py-5 ">
      {objJobDetails && <JobCardDetail item={objJobDetails} />}

      <div className="flex flex-col gap-6 small-tablet:hidden">
        <div className="flex flex-col items-end">
          <h1 className="text-2xl font-medium">Việc liên quan</h1>
          <div className="border-2 border-solid border-[#2EE498] w-[292px] "></div>
        </div>
        <div className=" flex flex-col gap-10">
          {jobData.map((job, index) => (
            <Card
              key={index}
              className="w-full h-[205px] p-[23px_43px_39px_31px]  rounded-3xl bg-white shadow-md "
            >
              <div className="card-top flex flex-row items-center gap-5 pb-2 border-b-2">
                <div className="w-20 h-20">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src={job.image}
                    alt={`Image for ${job.title}`}
                    width={95}
                    height={70}
                  />
                </div>
                <div className="card-info flex flex-col gap-8">
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
                <p className="truncate text-sm text-[#91929e] ">
                  {job.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
