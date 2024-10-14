import checked from "../../assets/images/checked.png";
import { Content } from "../../redux/reducers/jobReducer";
import Button from "../button/Button";

type Props = {
  item: Content;
};
export default function JobCardDetail({ item }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md py-12 px-7">
      <div className="flex gap-16">
        <h1 className="text-[40px] font-semibold">{item.title}</h1>
        <div className="flex gap-2 items-center">
          {item.verified ? (
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
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
            <p className="font-medium">{item.jobType.name}</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="font-medium">Đăng:</h1>
          <div className="px-4 py-2 rounded-[10px] border border-solid">
            <p className="font-medium">
              {new Date(item.postedDate).toLocaleDateString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="border border-solid border-black w-16 mx-11"></div>
          <h1 className="font-medium">Hạn ứng tuyển:</h1>
          <div className="px-4 py-2 rounded-[10px] border border-solid">
            <p className="font-medium"></p>
          </div>
        </div>
        <div className="border border-solid"></div>
      </div>
      <div className="my-7">
        <h1 className="text-xl mb-2 font-medium">Địa chỉ làm việc:</h1>
        <div className="h-14 flex items-center justify-center border border-solid rounded-[20px]">
          <p className="text-xl font-medium">{item.address}</p>
        </div>
      </div>
      <div className="flex justify-between my-7">
        <div className="w-[350px] 2xl:w-[600px]">
          <h1 className="text-xl mb-2 font-medium">Số điện thoại:</h1>
          <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
            <p className="text-xl font-medium">{item.phone}</p>
          </div>
        </div>
        <div className="w-[350px] 2xl:w-[600px]">
          <h1 className="text-xl mb-2 font-medium">Người liên hệ:</h1>
          <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
            <p className="text-xl font-medium">{item.contactPerson}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <div className="w-[350px] 2xl:w-[600px]">
          <h1 className="text-xl mb-2 font-medium">Ngày bắt đầu làm việc:</h1>
          <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
            <p className="text-xl font-medium">
              {new Date(item.startDate).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </div>
        <div className="w-[350px] 2xl:w-[600px]">
          <h1 className="text-xl mb-2 font-medium">
            Thời gian làm việc (Đơn vị: <strong>Giờ</strong>):
          </h1>
          <div className="h-14 flex items-center justify-center border border-solid rounded-[20px] ">
            <p className="text-xl font-medium">{item.duration / 60}</p>
          </div>
        </div>
      </div>
      <div className="border border-solid"></div>
      <div className="mt-[30px]">
        <div className="min-w-[800px] h-[350px] 2xl:w-full">
          <img
            src={item.images[0].url}
            alt=""
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
        <div className="flex justify-evenly gap-8 mt-7 mb-9">
          <div className="w-[250px] h-[128px] 2xl:w-full">
            <img
              src={item.images[1].url}
              alt=""
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div className="w-[250px] h-[128px] 2xl:w-full">
            <img
              src={item.images[2].url}
              alt=""
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div className="w-[250px] h-[128px] 2xl:w-full">
            <img
              src={item.images[3].url}
              alt=""
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold mb-2">Mô tả</h1>
          <div className="border border-solid rounded-[20px] px-[26px] py-[18px]">
            <p className=" font-medium text-[#91929E]">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
