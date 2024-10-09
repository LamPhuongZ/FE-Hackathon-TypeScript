import { Link } from "react-router-dom";
import Card from "../../../../components/card";
import redAddress from "../../../../assets/icons/icon-red-address.svg";
import imgJob from "../../../../assets/images/img-job.png";

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
        <h1 className="text-2xl font-bold">Tìm việc</h1>
        <Link to="" className="text-blue-500 hover:underline">
          Xem Thêm
        </Link>
      </div>
      <div className="find-job-content grid grid-cols-2 gap-6">
        {jobData.map((job, index) => (
          <Card
            key={index}
            width="100%"
            height="200px"
            borderRadius="24px"
            bgColor="#ffffff"
            boxShadow="0px 6px 58px 0px rgba(196, 203, 214, 0.10)"
            padding="23px 43px 39px 31px"
          >
            <div className="card-top flex flex-row items-center gap-5">
              <img src={job.image} alt="card-img" width={95} height={70} />

              <div className="card-info flex flex-col gap-3">
                <h4 className="text-[18px] font-bold">{job.title}</h4>
                <p className="flex justify-start items-center gap-2">
                  <img src={redAddress} alt="icon-address" />
                  <small>{job.address}</small>
                </p>
              </div>
            </div>
            <div className="card-desc flex flex-col gap-3">
              <h3>Mô tả</h3>
              <p className="truncate overflow-hidden whitespace-nowrap text-ellipsis">{job.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
