import "./JobCardStyles.scss";
import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calendar.png";
import { Content } from "../../redux/reducers/jobReducer";
import Button from "../button/Button";
import { jwtDecode } from "jwt-decode";

type Props = {
  item: Content;
  isSelected?: boolean;
  className?: string;
  onSelect?: () => void;
  onClick?: () => void;
  width?: string;
  showImages?: boolean;
  showButton?: boolean;
  widthAddress?: string;
};

export default function JobCard({
  item,
  isSelected,
  onSelect,
  className,
  width = "w-full",
  showImages = false,
  showButton = false,
  widthAddress = "",
}: Props) {
  const token = localStorage.getItem("access_token");

  const decodedToken = jwtDecode(token as string) as { role?: string };
  console.log("🚀 ~ decodedToken:", decodedToken);
  const role = decodedToken?.role;

  if (!role) {
    console.error("Không tìm thấy vai trò trong token.");
    return null;
  }

  return (
    <div>
      {role === "ROLE_APPLIER" ? (
        <div
          className={`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${className} ${
            isSelected ? "selectCard" : ""
          }`}
          onClick={onSelect}
        >
          <div className="flex justify-center items-center gap-5">
            {showImages &&
              (item.images && item.images.length > 0 ? (
                <img
                  src={item.images[0].url}
                  alt={`Job Image 1`}
                  className="w-[150px] h-[135px] rounded-3xl small-tablet:hidden"
                />
              ) : (
                <img
                  src={"https://via.placeholder.com/250x250"}
                  alt={`Job Image 1`}
                  className="w-[150px] h-[135px] rounded-3xl small-tablet:hidden"
                />
              ))}
            <div className="w-full flex flex-col justify-between gap-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <p
                    className={`text-lg font-semibold truncate ${width} small-tablet:text-base small-tablet:w-[130px]`}
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
                  <p className="text-sm font-medium pt-1 small-tablet:text-base">
                    {new Date(item.startDate)
                      .toLocaleDateString("vi-VN")
                      .replace(/\//g, "-")}
                  </p>
                </div>
              </div>
              <div className="border border-solid border-[#E4E6E8] w-full"></div>
              <div className="flex justify-between">
                <div className="bg-[#E8E8E8] rounded-[20px]">
                  <p className="text-xs font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
                    {item.jobType.name}
                  </p>
                </div>
                <div className={`flex items-center justify-end text-end gap-1`}>
                  <div className="w-5 h-5 small-tablet:w-4 small-tablet:h-4 flex items-center justify-end">
                    <img
                      src={location}
                      alt="location"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className={`pt-1 text-sm truncate ${widthAddress}`}
                    title={item.address}
                  >
                    {item.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Kiểm tra nếu `showButton` là true thì hiển thị button */}
            {showButton && (
              <Button
                title="Ứng Viên"
                color="delete"
                className="w-1/5"
                circle={false}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="ROLE_EMPLOYER">
          <p>Đây là nội dung dành cho nhà tuyển dụng hoặc role khác</p>
        </div>
      )}
    </div>
  );
}
