import { useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import JobCardDetail from "../../components/card-job/JobCardDetail";

export default function ListJobPage() {
  const [selectedJobCard, setSelectedJobCard] = useState<number>(0);

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

      <JobCardDetail />
    </div>
  );
}
