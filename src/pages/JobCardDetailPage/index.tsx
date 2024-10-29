import Card from "../../components/card/Card";
import imgJob from "../../assets/images/img-job.png";
import redAddress from "../../assets/icons/icon-red-address.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getDataJobDetailAPI } from "../../redux/reducers/jobReducer";
// import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";
// import CandiCard from "../../components/card-candidates/CandiCard";
// import {
//   getDataCandidateDetailAPI,
// } from "../../redux/reducers/candidateReducer";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import JobCard from "../../components/card-job/JobCard";

export default function JobCardDetailPage() {
  const { jobId } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { objJobDetails } = useSelector((state: RootState) => state.jobReducer);
  // const { objCandiDetails } = useSelector(
  //   (state: RootState) => state.candidateReducer
  // );

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getDataCandidateDetailAPI(Number(id))); 
  //   }
  // }, [id, dispatch]);

  useEffect(() => {
    if (jobId) {
      dispatch(getDataJobDetailAPI(Number(jobId)));
    }
  }, [jobId, dispatch]);

 

  // const renderCandiCards = (): JSX.Element[] => {
  //   return Array.from({ length: 7 }, (_, index) => (
  //     <CandiCard key={index} className="h-[200px]" textWidthName="text-2xl" />
  //   ));
  // };

  return (
    <div className="grid grid-cols-[867px_minmax(0,_1fr)] gap-x-7 py-20 px-[72px] 2xl:grid-cols-[1300px_minmax(0,_1fr)] small-tablet:grid-cols-[minmax(0,_1fr)] small-tablet:px-2 small-tablet:py-5 ">
      <div>{objJobDetails && <JobCardDetail item={objJobDetails} />}</div>
      {/* <div>{objCandiDetails && <CandiCardDetail item={objCandiDetails} />}</div> */}
      <div className="flex flex-col gap-6 small-tablet:hidden">
        <div className="flex flex-col items-end">
          <h1 className="text-2xl font-medium">Việc liên quan</h1>
          <div className="border-2 border-solid border-[#2EE498] w-[292px] "></div>
        </div>
        <div className=" flex flex-col gap-10">
          {objJobDetails && <JobCard item={objJobDetails} />}

          {/* {renderCandiCards()} */}
        </div>
      </div>
    </div>
  );
}
