import React from "react";
import JobCardComplete from "../../components/card-job/JobCardComplete";

type Props = {};

export default function ListCardPage({}: Props) {

  return (
    <div className="py-20 px-[72px]">
      <div className="bg-white py-4 shadow-md px-11">
        <h1 className="text-[40px] font-bold mb-5">
          Danh sách công việc đã hoàn thành
        </h1>
        <div className="w-[779px] border-[3px] border-solid border-[#2EE498] "></div>

        <div className="mt-14 flex flex-col gap-11">
        {[0, 1, 2, 3, 4].map((id) => (
          <JobCardComplete
            key={id}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
