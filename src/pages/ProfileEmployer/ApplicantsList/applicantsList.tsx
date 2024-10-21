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
    <div className="w-11/12 m-auto mt-2">
      {/* Header */}
      <div className="flex items-center mb-6 relative">
        <div className="w-20">
          <Button
            icon={<ArrowLeftOutlined className="text-black text-xl" />}
            onClick={onBack}
            className="absolute border-none hover:shadow-lg"
            color="custom"
            circle={false}
          />
        </div>
        <h2 className="text-xl font-medium w-full ml-60">
          Danh sách ứng viên
        </h2>
      </div>

      {/* Applicants list */}
      <div className="listworker-detail flex flex-col items-center justify-center gap-6">
        {[1, 2, 3].map((id) => (
          <Card
            key={id}
            className="listworker-card rounded-lg p-4 w-full cursor-pointer shadow-md transition-transform duration-300 ease-in-out overflow-hidden hover:scale-105 hover:shadow-lg"
            onClick={() => onSelectWorker(id.toString())}
          >
            {/* ... (applicant card content) */}
            <div className="flex flex-row">
              <div className="col1 w-1/5">
                <img src={Ava} alt="" className="h-32 w-32 rounded-full" />
              </div>
              <div className="col2 w-4/5 flex flex-col justify-center">
                <div className="row1 flex justify-between items-center">
                  <div className="flex gap-2 flex-row items-center justify-center">
                    <h1 className="text-xl font-semibold">Dương Văn A</h1>
                    <img src={logoCheck} alt="" className="h-5 w-5"/>
                  </div>
                    <p className="font-medium text-base">Số việc hoàn thành: <span className="font-semibold">20</span></p>
                 
                </div>
                <hr className="my-2" />
                <div className="row2 flex justify-between items-center">
                  <div className="flex gap-4">
                     <p className="py-1 px-2 rounded-full bg-gray-200 w-auto text-center">
                  Giao hàng tận nơi
                  </p> <p className="py-1 px-2 rounded-full bg-gray-200 w-auto text-center">
                  Dọn nhà
                  </p>
                  </div>
                 
                  <div className="flex items-center gap-1">
                    <img src={logoStar} alt="" className="h-6 w-6" />
                    <p className="pt-2 font-semibold text-lg">4.0</p>
                  </div>
                </div>
              </div>
            </div>


          </Card>
        ))}
      </div>
    </div>
  );
};
