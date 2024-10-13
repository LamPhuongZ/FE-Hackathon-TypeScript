import { useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { Job } from "../../redux/reducers/productReducer";

export default function ListJobPage() {

  const [selectedJobCard, setSelectedJobCard] = useState<number>(0);
  
  const handleSelectJobCard = (id: number) => {
    setSelectedJobCard(id);
  };

  const {arrJob} = useSelector((state:RootState) => state.productReducer)
  const renderJobs = (): JSX.Element[] =>{
    return arrJob.map((item:Job, index))=>{
      return <JobCard
      key={item.id}
      isSelected={selectedJobCard === id}
      onSelect={() => handleSelectJobCard(id)}
    />
    }
      
  
  }

  return (
    <div className="grid grid-cols-[447px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]">
      <div className="flex flex-col gap-8">

      {renderJobs()}
      </div>

      <JobCardDetail />
    </div>
  );
}
