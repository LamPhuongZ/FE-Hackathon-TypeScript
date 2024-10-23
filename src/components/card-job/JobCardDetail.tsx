import checked from "../../assets/images/checked.png";
import { Content } from "../../redux/reducers/jobReducer";
import Button from "../button/Button";

type Props = {
  item: Content;
};
export default function JobCardDetail({ item }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md py-12 px-7 small-tablet:w-full">
      <div className="sticky top-0 bg-white">
        <div className="flex gap-16 small-tablet:gap-8 small-tablet:justify-between">
          <h1 className="text-[40px] font-semibold small-tablet:text-xl">
            {item.title}
          </h1>
          <div className="flex gap-2 items-center small-tablet:text-sm">
            {item.verified ? (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 small-tablet:w-4 small-tablet:h-4">
                  <img src={checked} alt="" className="w-full h-full" />
                </div>
                <p className="font-medium">Đã xác thực</p>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <p className="font-medium text-gray-400">Chưa xác thực</p>
              </div>
            )}
          </div>
        </div>
        <Button title="Ứng Tuyển" className="w-full h-16 mt-9" />
        <div className="border border-solid mt-4"></div>
      </div>
      <div className="h-auto max-h-[1230px] overflow-y-auto px-2">
        <div className="flex flex-col gap-7 mt-7">
          <div className="flex gap-x-2 small-tablet:text-sm">
            <h1 className="font-medium ">Loại công việc:</h1>
            <div className="px-4 rounded-[10px] border border-solid flex">
              <p className="font-medium">{item.jobType.name}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center small-tablet:text-sm small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-y-2">
            <h1 className="font-medium">Đăng:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid small-tablet:text-center">
              <p className="font-medium">
                {new Date(item.postedDate)
                  .toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}{" "}
                -{" "}
                {new Date(item.postedDate).toLocaleTimeString("vi-VN", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: false, // Sử dụng định dạng 24 giờ
                })}
              </p>
            </div>
            <div className="border border-solid border-black w-16 mx-11 small-tablet:hidden"></div>
            <h1 className="font-medium">Hạn ứng tuyển:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid small-tablet:text-center">
              <p className="font-medium"></p>
            </div>
          </div>
          <div className="border border-solid"></div>
        </div>
        <div className="my-7">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Địa chỉ làm việc:
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium small-tablet:text-sm">
              {item.address}
            </p>
          </div>
        </div>
        <div className="flex justify-between my-7 small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
          <div className="w-[350px] 2xl:w-[600px] small-tablet:w-full">
            <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
              Số điện thoại:
            </h1>
            <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-xl font-medium  small-tablet:text-sm">
                {item.phone}
              </p>
            </div>
          </div>
          <div className="w-[350px] 2xl:w-[600px] small-tablet:w-full">
            <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
              Người liên hệ:
            </h1>
            <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-xl font-medium small-tablet:text-sm">
                {item.contactPerson}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-10 small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
          <div className="w-[350px] 2xl:w-[600px] small-tablet:w-full">
            <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
              Ngày bắt đầu làm việc:
            </h1>
            <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-xl font-medium small-tablet:text-sm">
                {new Date(item.startDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
          <div className="w-[350px] 2xl:w-[600px] small-tablet:w-full">
            <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
              Thời gian làm việc (Đơn vị: <strong>Giờ</strong>):
            </h1>
            <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-xl font-medium small-tablet:text-sm">
                {item.duration / 60}
              </p>
            </div>
          </div>
        </div>
        <div className="border border-solid"></div>
        <div className="mt-[30px]">
          <div className="min-w-[80%] h-[350px] 2xl:w-full small-tablet:min-w-[300px] small-tablet:h-[200px]">
            <img
              src={item.images[0].url}
              alt=""
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div className="flex justify-evenly gap-8 mt-7 mb-9">
            <div className="w-[250px] h-[128px] 2xl:w-full small-tablet:w-full small-tablet:h-[100px]">
              <img
                src={item.images[1].url}
                alt=""
                className="w-full h-full rounded-[20px] object-cover"
              />
            </div>
            <div className="w-[250px] h-[128px] 2xl:w-full small-tablet:w-full small-tablet:h-[100px]">
              <img
                src={item.images[2].url}
                alt=""
                className="w-full h-full rounded-[20px] object-cover"
              />
            </div>
            <div className="w-[250px] h-[128px] 2xl:w-full small-tablet:w-full small-tablet:h-[100px]">
              <img
                src={item.images[3].url}
                alt=""
                className="w-full h-full rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold mb-2 small-tablet:text-sm">
              Mô tả
            </h1>
            <div className="border border-solid rounded-[20px] px-[26px] py-[18px] small-tablet:px-[10px] small-tablet:py-[10px]">
              <p className=" font-medium text-[#91929E] small-tablet:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
