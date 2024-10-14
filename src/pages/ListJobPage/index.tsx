import { useEffect, useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { Content, getDataJobAPI, Job } from "../../redux/reducers/jobReducer";

export default function ListJobPage() {
  const [selectedJobCard, setSelectedJobCard] = useState<number>(0);

  const handleSelectJobCard = (id: number) => {
    setSelectedJobCard(id);
  };
  
  const { arrJob } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: DispatchType = useDispatch(); 
  
  const jobs = arrJob?.content || []
  
  const getDataJobList = async () => {
    // type ActionType = ReturnType<typeof getDataJobAPI>
    const actionAPI = getDataJobAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList();
  }, []);

  const renderJobs = (): JSX.Element[] => {
    if (!jobs || !Array.isArray(jobs)) {
      return [];
    }
    return jobs.map((item: Content) => {
      return (
        <div key={item.jobId}>
          <JobCard
            item={item}
            isSelected={selectedJobCard === item.jobId}
            onSelect={() => handleSelectJobCard(item.jobId)}
          />
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-[447px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]">
      <div className="flex flex-col gap-8">{renderJobs()}</div>

      <JobCardDetail />
    </div>
  );
}
