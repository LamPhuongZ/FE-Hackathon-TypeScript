import { Link } from "react-router-dom";
import Card from "../../../../components/card/Card";
import redAddress from "../../../../assets/icons/icon-red-address.svg";
import imgJob from "../../../../assets/images/img-job.png";
import arrowRight from "../../../../assets/icons/icon-arrow-right.svg";

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
];

export default function FindJob() {
  return (
    <section className="find-job flex flex-col justify-center gap-11 px-[81px] pt-[70px] pb-[120px]">
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
        {jobData.map((job, index) => (
          <Card
            key={index}
            className="w-full h-auto p-[23px_43px_39px_31px]  rounded-3xl bg-white shadow-[0px_18px_18px_0px_rgba(0,0,0,0.18)] "
          >
            <div className="card-top flex flex-row items-center gap-5 pb-2 border-b-2">
              <img
                className="object-cover"
                src={job.image}
                alt={`Image for ${job.title}`}
                width={95}
                height={70}
              />
              <div className="card-info flex flex-col gap-1">
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
