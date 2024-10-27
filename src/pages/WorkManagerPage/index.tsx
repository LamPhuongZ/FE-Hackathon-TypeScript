import { useState } from "react";
import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import star from "../../assets/icons/star.svg";
import phone from "../../assets/icons/phone.svg";
// import JobCardV2 from "../../components/card-candidates/JobCardV2";

export default function WorkManagerPage() {
  const [activeTab, setActiveTab] = useState<string>("completed");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-center items-center gap-20">
          <span
            className={`text-2xl font-medium cursor-pointer ${
              activeTab === "completed" ? "text-[#1890FF]" : ""
            }`}
            onClick={() => handleTabChange("completed")}
          >
            Công việc đã hoàn thành
          </span>
          <span
            className={`text-2xl font-medium cursor-pointer ${
              activeTab === "pending" ? "text-[#1890FF]" : ""
            }`}
            onClick={() => handleTabChange("pending")}
          >
            Công việc chờ duyệt
          </span>
        </div>
        <div className="flex flex-col gap-11 mt-10">
          {activeTab === "completed" ? (
            <div className="cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ">
              <div className="flex justify-center items-center gap-5">
                <div className="w-[158px] h-[135px]">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1729708654660-8c14ff5e408c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Job Image 1`}
                    className=" object-cover w-full h-full rounded-3xl small-tablet:hidden"
                  />
                </div>
                <div className="w-full flex flex-col justify-between gap-5">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <p
                        className={`text-3xl font-semibold truncate w-full small-tablet:text-base small-tablet:w-[130px]`}
                      >
                        Giao hàng
                      </p>

                      <div className="w-6 h-6 small-tablet:w-4 small-tablet:h-4">
                        <img
                          src={checked}
                          alt="checked"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6">
                        <img src={star} alt="" className="w-full h-full" />
                      </div>
                      <p className="text-3xl font-medium pt-1">4.0</p>
                    </div>
                  </div>
                  <div className="border border-solid border-[#E4E6E8] w-full"></div>
                  <div className="flex justify-between">
                    <div className="bg-[#E8E8E8] rounded-[20px]">
                      <p className="text-sm font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
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
          ) : (
            <div className="cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ">
              <div className="flex justify-center items-center gap-5">
                <div className="w-[158px] h-[135px]">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1729708654660-8c14ff5e408c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Job Image 1`}
                    className=" object-cover w-full h-full rounded-3xl small-tablet:hidden"
                  />
                </div>
                <div className="w-full flex flex-col justify-between gap-5">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <p
                        className={`text-3xl font-semibold truncate w-full small-tablet:text-base small-tablet:w-[130px]`}
                      >
                        Giao hàng
                      </p>

                      <div className="w-6 h-6 small-tablet:w-4 small-tablet:h-4">
                        <img
                          src={checked}
                          alt="checked"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-end">
                      <div className="w-6 h-6">
                        <img src={phone} alt="" className="w-full h-full" />
                      </div>
                      <p className="text-2xl font-medium pt-2">0909090909</p>
                    </div>
                  </div>
                  <div className="border border-solid border-[#E4E6E8] w-full"></div>
                  <div className="flex justify-between">
                    <div className="bg-[#E8E8E8] rounded-[20px]">
                      <p className="text-sm font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
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
          )}
          {/* {activeTab === "completed" ? <JobCardV2 /> : <JobCardV2 type={false} />} */}
          
        </div>
      </div>
    </div>
  );
}
