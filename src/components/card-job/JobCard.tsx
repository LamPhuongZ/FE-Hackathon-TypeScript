import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calender.png";
import "./JobCardStyles.scss";
import { Content, Job } from "../../redux/reducers/jobReducer";

type Props = {
  item: Content;
  isSelected: boolean;
  onSelect: () => void;
};

export default function JobCard({ item, isSelected, onSelect }: Props) {
  return (
    <div
      className={`w-[447px] h-[327px] px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-xl ${
        isSelected ? "selectCard" : ""
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col gap-y-5">
        <p className="text-[#CCC] text-xl font-medium">Đăng: {item.postedDate} </p>
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <div className="w-6 h-6">
            <img src={checked} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-5 h-5">
            <img src={location} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-xl font-semibold text-[#5B5B5B]">
            {item.address}
          </h1>
        </div>
        <div className="border border-solid"></div>
        <div className="flex gap-4">
          <div className="w-5 h-5">
            <img src={calendar} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-xl font-semibold text-[#5B5B5B]">
            Ngày bắt đầu làm việc
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[340px] h-[70px] rounded-[20px] border border-solid">
            <p className="text-2xl font-semibold flex justify-center py-5">
            {new Date(item.startDate).toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
