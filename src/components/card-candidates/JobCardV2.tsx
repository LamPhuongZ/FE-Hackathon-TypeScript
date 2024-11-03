import Button from "../button/Button";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calendar.png";
import { Content } from "../../redux/reducers/jobReducer";
import { useNavigate } from "react-router-dom";
import { JobApprovalStatusEnum } from "../../enums/jobApproval.enum";

type Props = {
  item: Content & { jobDetail?: { size: number } };
  width?: string;
  className?: string;
  type?: boolean;
};

export default function JobCardV2({
  item,
  width,
  className,
  type = true,
}: Props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/list-candidated?id=${item.jobId}`);
  };

  return (
    <div
      className={`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${className}`}
    >
      <div className="flex justify-center items-stretch gap-5">
        <div className="w-full flex flex-col justify-between gap-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <p
                className={`text-3xl font-semibold truncate ${width} small-tablet:text-base small-tablet:w-[130px]`}
              >
                {item.title}
              </p>
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
              <p className="text-sm font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
                {item.jobType.name}
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
              <p className=" pt-1 small-tablet:text-sm" title={item.address}>
                {item.address}
              </p>
            </div>
          </div>
        </div>

        {type && !(item.jobApprovalStatus === JobApprovalStatusEnum.PENDING || item.jobApprovalStatus === JobApprovalStatusEnum.REJECTED) && (
          <Button
            title="Ứng Viên"
            color="custom"
            className="w-1/6 bg-[#DC2E55]"
            circle={false}
            onClick={handleButtonClick}
          />
        )}
      </div>
    </div>
  );
}
