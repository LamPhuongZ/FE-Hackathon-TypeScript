import React, { useState } from "react";
import JobCard from "../../components/card_job/JobCard";
import JobCardDetail from "../../components/card_job/JobCardDetail";

type Props = {};

export default function ListJobPage({}: Props) {
  const [selectedJobCard, setSelectedJobCard] = useState<number>();

  const handleSelectJobCard = (id: number) => {
    setSelectedJobCard(id);
  };

  return (
    <div className="grid grid-cols-[447px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]">
      <div className="flex flex-col gap-8">
        {[0, 1, 2, 3, 4].map((id) => (
          <JobCard 
            key={id} 
            isSelected={selectedJobCard === id} 
            onSelect={() => handleSelectJobCard(id)}
          />
        ))}
      </div>

      <JobCardDetail></JobCardDetail>
    </div>
  );
}
