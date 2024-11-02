import React, { useEffect } from "react";
import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getDataCandidateDetailAPI } from "../../redux/reducers/candidateReducer";
import { useLocation, useParams } from "react-router-dom";

export default function CandidateDetailPage() {
  const { id, jobId } = useParams();
  console.log("🚀 ~ CandidateDetailPage ~ jobId:", jobId)
  console.log("🚀 ~ CandidateDetailPage ~ id:", id)
  const dispatch: DispatchType = useDispatch();
  const { objCandiDetails } = useSelector(
    (state: RootState) => state.candidateReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(getDataCandidateDetailAPI(Number(jobId), Number(id)));
    }
  }, [id, dispatch]);

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md pt-2 rounded-[20px]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-medium">Thông tin ứng viên</h1>
        </div>
        <div className="flex">
          {objCandiDetails && <CandiCardDetail item={objCandiDetails} className="w-full" />}
        </div>
      </div>
    </div>
  );
}
