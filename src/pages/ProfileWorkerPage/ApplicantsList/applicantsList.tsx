import React from "react";
import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import Ava from "../../../assets/images/ava.jpg";
import logoCheck from "../../../assets/icons/check.svg";
import logoStar from "../../../assets/icons/star.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface ApplicantsListProps {
  onBack: () => void;
  onSelectWorker: (workerId: string) => void;
}

export const ApplicantsList: React.FC<ApplicantsListProps> = ({ onBack, onSelectWorker }) => {
  return (
    <div className="w-11/12 m-auto mt-6">
      {/* Header */}
      <div className="flex items-center mb-6 relative">
        <Button
          icon={<ArrowLeftOutlined />}
          iconPosition="left"
          onClick={onBack}
          className="absolute left-0 h-10"
          color="custom"
        />
        <h2 className="text-xl font-medium w-full text-center">
          Danh sách người ứng tuyển
        </h2>
      </div>
      
      {/* Applicants list */}
      <div className="listworker-detail flex flex-wrap justify-between gap-y-6">
        {[1, 2, 3].map((id) => (
          <Card
            key={id}
            className="listworker-card rounded-lg p-4 w-[48%] cursor-pointer shadow-md transition-transform duration-300 ease-in-out overflow-hidden hover:scale-105 hover:shadow-lg"
            onClick={() => onSelectWorker(id.toString())}
          >
            {/* ... (applicant card content) */}
            <div className="flex flex-row gap-3">
              <div className="col-left w-2/5 flex flex-col items-center">
                <div className="relative flex-grow">
                  <div className="w-32 h-32 overflow-hidden rounded-full">
                    <img
                      src={Ava}
                      alt="Ảnh đại diện"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3 transform translate-x-1/4 translate-y-1/4">
                    <img src={logoCheck} alt="Kiểm tra" />
                  </div>
                </div>
                <div className="rate flex items-center mt-auto">
                  <img src={logoStar} alt="Đánh giá" className="w-5 h-5" />
                  <p className="text-lg font-semibold ml-1 mt-1.5">4.0</p>
                </div>
              </div>
              <div className="col-right w-3/5 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-3">
                    Nguyen Van {String.fromCharCode(64 + id)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm pb-1">Kỹ năng</h5>
                    <div className="flex gap-2 flex-wrap">
                      <p className="skills">Dọn vệ sinh</p>
                      <p className="skills">Phục vụ</p>
                      <p className="skills">Giao hàng</p>
                      <p className="skills">...</p>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-sm">
                  Số việc đã hoàn thành:{" "}
                  <span className="font-semibold text-red-500">18</span>
                </div>
              </div>
            </div>

          </Card>
        ))}
      </div>
    </div>
  );
};