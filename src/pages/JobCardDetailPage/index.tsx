import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  getDataJobDetailAPI,
  getDataJobTypeAPI,
} from "../../redux/reducers/jobReducer";
// import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";
// import CandiCard from "../../components/card-candidates/CandiCard";
// import {
//   getDataCandidateDetailAPI,
// } from "../../redux/reducers/candidateReducer";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import JobCard from "../../components/card-job/JobCard";

export default function JobCardDetailPage() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { objJobDetails, objJobType } = useSelector(
    (state: RootState) => state.jobReducer
  );
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
      if (objJobDetails) {
        dispatch(getDataJobTypeAPI(objJobDetails.jobType.id));
      }
    }
  }, [jobId, dispatch, objJobDetails]);

  const renderJobCards = (): JSX.Element[] => {
    return (objJobType?.content ?? [])
          .filter((item) => item.jobId !== objJobDetails?.jobId)
          .slice(0, 7)
          .map((item) => (
            <JobCard
              key={item.jobId}
              item={item}
              width="w-[191px]"
              widthAddress="w-auto max-w-[160px]"
              onSelect={() => navigate(`/card-detail-job/${item.jobId}`)}
        />
      ));
  };

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
          <h1 className="text-2xl font-medium">Loại công việc liên quan</h1>
          <div className="border-2 border-solid border-[#2EE498] w-[292px] "></div>
        </div>
        <div className=" flex flex-col gap-8">
          {renderJobCards()}
          {/* {renderCandiCards()} */}
        </div>
      </div>
    </div>
  );
}
