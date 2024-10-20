import React from "react";
import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import Address from "../../../assets/icons/icon-red-address.svg";
import Calender from "../../../assets/icons/calendar.svg";

interface ActiveJobsProps {
  onApplicantsClick: () => void;
}

export const ActiveJobs: React.FC<ActiveJobsProps> = ({ onApplicantsClick }) => {
  return (
    <Card className="w-11/12 m-auto mt-6 shadow-xl rounded-[12px] p-4">
      <div className="flex flex-row gap-4">
        <div className="col1 w-4/5">
          <div className="row1 flex flex-between">
            <h1 className="text-xl font-semibold">Phục vụ ngoài trời</h1>
            <div className="flex items-center gap-1">
              <img src={Calender} alt="" className="h-4 w-4" />
              <p className="pt-2">10/10/2024</p>
            </div>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="row2 flex flex-between">
            <p className="p-2 rounded-full bg-gray-200 w-1/4 text-center">
              Giao hàng
            </p>
            <div className="flex items-center gap-1">
              <img src={Address} alt="" className="h-4 w-4" />
              <p className="pt-2">Quận 7, TP.HCM</p>
            </div>
          </div>
        </div>
        <div className="col2 w-1/5 text-base">
          <Button
            title="Ứng viên"
            color="custom"
            className="custom-btn absolute top-2.5 bg-red-500"
            onClick={onApplicantsClick}
            circle={false}
          />
        </div>
      </div>
    </Card>
  );
};
