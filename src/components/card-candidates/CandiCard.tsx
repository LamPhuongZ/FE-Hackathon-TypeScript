import checked from "../../assets/images/checked.png";
import star from "../../assets/icons/star.svg";
import { Content } from "../../redux/reducers/candidateReducer";
type Props = {
  item: Content;
  className?: string;
  showAmount?: boolean;
  textWidthName?: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onClick?: () => void;
};

export default function CandiCard({
  item,
  isSelected,
  onSelect,
  className,
  showAmount = false,
  textWidthName = "text-3xl",
}: Props) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-md hover:shadow-xl flex gap-5 py-6 px-9 ${className} ${
        isSelected ? "selectCard" : ""
      }`}
      onClick={onSelect}
    >
      <div className="my-auto">
        <div className="w-[130px] h-[130px]">
          <img
            src={item.avatar}
            alt="avatar"
            className="bg-[#E8E8E8] w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-evenly gap-2 w-[80%] mx-auto">
        <div className="flex justify-between items-center gap-5 ">
          <div className="flex items-center gap-5">
            <h1 className={`${textWidthName} font-semibold`}>{item.fullname}</h1>
            {item.isVerified ? (
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
          {showAmount && (
            <div className="font-semibold flex items-center gap-2">
              <p className="text-base">Số việc đã hoàn thành : </p>
              <p className="text-3xl">{item.numOfJob}</p>
            </div>
          )}
        </div>
        <div className="border border-solid border-[#E4E6E8]"></div>
        <div className="flex justify-between">
          <div className="bg-[#E8E8E8] rounded-[20px]">
            <p className="text-lg font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
              {item.jobSkills && item.jobSkills.length > 0 ? item.jobSkills[0].skill : "Kỹ năng"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img src={star} alt="" className="w-full h-full" />
            </div>
            <p className="text-3xl font-medium pt-1">{item.star && item.star ? item.star : 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
