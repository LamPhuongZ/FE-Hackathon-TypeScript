import "./JobCardStyles.scss";
import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calendar.png";
import { Content } from "../../redux/reducers/jobReducer";

type Props = {
  item: Content;
  isSelected?: boolean;
  className?: string;
  onSelect?: () => void;
  onClick?: () => void;
  width?: string;
  showImages?: boolean;
};

export default function JobCard({
  item,
  isSelected,
  onSelect,
  className,
  width = "w-full",
  showImages = false,
}: Props) {
  return (
    <div
      className={`cursor-pointer w-full h-[203px] px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${className} ${
        isSelected ? "selectCard" : ""
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-center items-center gap-5">
        {/* Kiểm tra nếu `showImages` là true thì hiển thị hình ảnh */}
        {showImages && item.images && item.images.length > 0 && (
          <img
            src={item.images[0].url}
            alt={`Job Image 1`}
            className="w-[158px] h-[135px] rounded-3xl small-tablet:hidden"
          />
        )}
        <div className="w-full flex flex-col justify-between gap-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <p
                className={`text-3xl font-semibold truncate ${width} small-tablet:text-base small-tablet:w-[130px]`}
              >
                {item.title}
              </p>
              {item.verified ? (
                <div className="w-6 h-6 small-tablet:w-4 small-tablet:h-4">
                  <img
                    src={checked}
                    alt="checked"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 small-tablet:w-4 small-tablet:h-4">
                <img
                  src={calendar}
                  alt="calendar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-medium pt-1 small-tablet:text-base">
                {new Date(item.startDate)
                  .toLocaleDateString("vi-VN")
                  .replace(/\//g, "-")}
              </p>
            </div>
          </div>
          <div className="border border-solid border-[#E4E6E8] w-full"></div>
          <div className="flex justify-between">
            <div className="bg-[#E8E8E8] rounded-[20px]">
              <p className="text-lg font-semibold px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
                Giao hàng
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 small-tablet:w-4 small-tablet:h-4">
                <img
                  src={location}
                  alt="location"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className=" pt-1 small-tablet:text-sm">
                số 5, phường 5, quận 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
