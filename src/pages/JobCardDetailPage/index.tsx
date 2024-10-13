// import checked from "../../assets/images/checked.png";
// import Button from "../../components/button/Button";

import JobCardDetail from "../../components/card-job/JobCardDetail";
import Card from "../../components/card/Card";
import imgJob from "../../assets/images/img-job.png";
import redAddress from "../../assets/icons/icon-red-address.svg";

export default function JobCardDetailPage() {
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
    <div className=" grid grid-cols-[867px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]">
      {/* <div className="bg-white rounded-2xl shadow-md py-12 px-7">
        <div className="flex gap-16">
          <h1 className="text-[40px] font-semibold">
            Vệ sinh căn hộ, gia đình
          </h1>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8">
              <img src={checked} alt="" className="w-full h-full" />
            </div>
            <p className="font-medium">Đã xác thực</p>
          </div>
        </div>
        <Button title="Ứng Tuyển" className="w-full h-16 mt-9"/>
        <div>
          <textarea
            name=""
            id=""
            placeholder="Ghi chú ..."
            className="w-full h-[90px] mt-6 border border-solid rounded-xl px-4 pt-3"
          ></textarea>
        </div>
        <div className="border border-solid mt-4"></div>
        <div className="flex flex-col gap-7 mt-7">
          <div className="flex gap-x-2">
            <h1 className="font-medium">Loại công việc:</h1>
            <div className="px-4 rounded-[10px] border border-solid flex">
              <p className="font-medium">Vệ sinh</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <h1 className="font-medium">Đăng:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid">
              <p className="font-medium">05-10-2024 - 6:00</p>
            </div>
            <div className="border border-solid border-black w-16 mx-11"></div>
            <h1 className="font-medium">Hạn ứng tuyển:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid">
              <p className="font-medium">05-10-2024 - 20:00</p>
            </div>
          </div>
          <div className="border border-solid"></div>
        </div>
        <div className="my-7">
          <h1 className="text-xl mb-2 font-medium">Địa chỉ làm việc:</h1>
          <div className="h-14 flex items-center justify-center border border-solid rounded-[20px]">
            <p className="text-xl font-medium">
              Số 5 đường 5, phường 5, quận 5
            </p>
          </div>
        </div>
        <div className="flex justify-between my-7">
          <div className="w-[350px] 2xl:w-[600px]">
            <h1 className="text-xl mb-2 font-medium">Số điện thoại:</h1>
            <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
              <p className="text-xl font-medium">1234-567-890</p>
            </div>
          </div>
          <div className="w-[350px] 2xl:w-[600px]">
            <h1 className="text-xl mb-2 font-medium">Người liên hệ:</h1>
            <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
              <p className="text-xl font-medium">Nguyễn Sơn</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-[350px] 2xl:w-[600px]">
            <h1 className="text-xl mb-2 font-medium">Ngày bắt đầu làm việc:</h1>
            <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
              <p className="text-xl font-medium">07-10-2024 - 14:00</p>
            </div>
          </div>
          <div className="w-[350px] 2xl:w-[600px]">
            <h1 className="text-xl mb-2 font-medium">
              Thời gian làm việc (Đơn vị: <strong>Giờ</strong>):
            </h1>
            <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
              <p className="text-xl font-medium">3</p>
            </div>
          </div>
        </div>
        <div className="border border-solid"></div>
        <div className="mt-[30px]">
          <div className="min-w-[800px] h-[350px] 2xl:w-full">
            <img
              src="https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"
              alt=""
              className="w-full h-full rounded-[20px]"
            />
          </div>
          <div className="flex justify-evenly gap-8 mt-7 mb-9">
            <div className="w-[250px] h-[128px] 2xl:w-full">
              <img
                src="https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"
                alt=""
                className="w-full h-full rounded-[20px]"
              />
            </div>
            <div className="w-[250px] h-[128px] 2xl:w-full">
              <img
                src="https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"
                alt=""
                className="w-full h-full rounded-[20px]"
              />
            </div>
            <div className="w-[250px] h-[128px] 2xl:w-full">
              <img
                src="https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"
                alt=""
                className="w-full h-full rounded-[20px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold mb-2">Mô tả</h1>
            <div className="border border-solid rounded-[20px] px-[26px] py-[18px]">
              <p className=" font-medium text-[#91929E]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since Lorem Ipsum is simply dummy text of the printing
                and typesetting industry
                {}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur accusantium excepturi ducimus deserunt aliquid
                dolores provident a eveniet, cum aut rem iure doloribus
                asperiores. Pariatur iusto nulla maxime voluptate porro?
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <JobCardDetail />

      <div className="flex flex-col gap-10">
        {jobData.map((job, index) => (
          <Card
            key={index}
            className="w-full h-[205px] p-[23px_43px_39px_31px]  rounded-3xl bg-white shadow-[0px_18px_18px_0px_rgba(0,0,0,0.18)] "
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
  );
}
