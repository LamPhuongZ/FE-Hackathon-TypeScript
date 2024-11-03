import checked from "../../assets/images/checked.png";
import phone from "../../assets/icons/phone.svg";
import star from "../../assets/icons/star.svg";
import Button from "../button/Button";
import { Content } from "../../redux/reducers/candidateReducer";

type Props = {
  item: Content;
  className?: string;
};

export default function CandiCardDetail({ item, className }: Props) {
  return (
    <div className={`bg-white rounded-2xl shadow-md py-12 px-7 small-tablet:w-full flex flex-col justify-evenly gap-10 ${className}`}>
      <div className="flex gap-5">
        <div className="w-[180px] h-[150px]">
          <img
            src={item.avatar}
            alt="avatar"
            className="w-full h-full object-cover rounded-full bg-[#E8E8E8]"
          />
        </div>
        <div className="flex flex-col gap-10 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-medium">{item.fullname}</h1>

            {item.isVerified ? (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 small-tablet:w-4 small-tablet:h-4">
                  <img src={checked} alt="" className="w-full h-full" />
                </div>
                <p className="font-medium">Đã xác thực</p>
              </div>
            ) : (
              <p className="font-medium">Chưa xác thực</p>
            )}
          </div>
          <div className="flex gap-2 items-center justify-end">
            <div className="w-6 h-6">
              <img src={phone} alt="" className="w-full h-full" />
            </div>
            <p className="text-2xl font-medium pt-2">0909090909</p>
          </div>
        </div>
      </div>
      <div className="border border-solid border-[#E4E6E8]"></div>
      <div className="flex justify-between small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Ngày sinh
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium  small-tablet:text-sm">
              {item.age}
            </p>
          </div>
        </div>
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Địa chỉ
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium small-tablet:text-sm">
              {item.address}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Đánh giá
          </h1>
          <div className="py-[15px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6">
                <img src={star} alt="" className="w-full h-full" />
              </div>
              <p className="text-2xl font-medium small-tablet:text-sm pt-1">
                {item.star}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Tham gia
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium small-tablet:text-sm">
              {new Date(item.createdDate).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </div>
      </div>
      <div className=" small-tablet:w-full">
        <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
          Kĩ năng
        </h1>
        <div className="py-[10px] flex justify-center gap-5">
          <div className="bg-[#E8E8E8] rounded-[20px]">
            <p className="text-xl font-medium px-[10px] py-[5px]">
              {" "}
              {item.jobSkills && item.jobSkills.length > 0
                ? item.jobSkills[0].skill
                : "Kỹ năng"}
            </p>
          </div>
        </div>
      </div>
      <div className="border border-solid border-[#E4E6E8]"></div>
      <div className="flex justify-between small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Tổng cộng công việc
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium  small-tablet:text-sm">5</p>
          </div>
        </div>
        <div className="w-[350px] large-desktop:w-[380px] small-tablet:w-full">
          <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
            Tổng giờ
          </h1>
          <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="text-xl font-medium small-tablet:text-sm">{item.hourOfWork}</p>
          </div>
        </div>
      </div>
      <div className=" small-tablet:w-full">
        <h1 className="text-xl mb-2 font-medium small-tablet:text-sm">
          Số lượng công việc hoàn thành
        </h1>
        <div className="py-[20px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
          <p className="text-xl font-medium small-tablet:text-sm">{item.numOfJob}</p>
        </div>
      </div>
      <Button title="Chọn ứng viên" className="w-full h-16 mt-9 uppercase" />
    </div>
  );
}
