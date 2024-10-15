import "./activeJobs.scss"
import React from "react";
import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import Ava from "../../../assets/images/ava.jpg";

interface ActiveJobsProps {
  onApplicantsClick: () => void;
}

export const ActiveJobs: React.FC<ActiveJobsProps> = ({ onApplicantsClick }) => {
  return (
    <Card className="w-11/12 m-auto relative mt-6 shadow rounded-[12px] p-4">
      <div className="infor-work flex gap-4">
        <img
          src={Ava}
          alt="Ảnh công việc"
          className="rounded-xl w-32 h-32"
        />
        <div className="infor-work-detail flex flex-col gap-2">
          <h1 className="text-xl font-medium">Phục vụ ngoài trời</h1>
          <p className="text-base">SL: 2</p>
          <p className="text-base">Địa điểm: Q7, TP.HCM</p>
          <p className="text-base">Thời gian: 15h-22h, ngày 10/10/2024</p>
        </div>
      </div>
      <hr className="mt-3 " />
      <div className="infor-work-detail2 flex gap-2 mt-4">
        <h3 className="text-base font-medium">Mô tả:</h3>
        <p className="text-base font-light">
          phục vụ bàn, lên món, đón khách, dọn vệ sinh...
        </p>
      </div>
      <Button
        title="Người ứng tuyển"
        color="delete"
        className="custom-btn absolute right-5 top-5 h-1/6 w-1/4 flex items-center justify-center"
        onClick={onApplicantsClick}
      />
    </Card>
  );
};
