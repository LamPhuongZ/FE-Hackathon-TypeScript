import React, { useEffect } from "react";
import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getDataCandidateDetailAPI } from "../../redux/reducers/candidateReducer";
import { useParams } from "react-router-dom";

export default function CandidateDetailPage() {
  const dispatch: DispatchType = useDispatch();
  const { id } = useParams();
  const { objCandiDetails } = useSelector(
    (state: RootState) => state.candidateReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(getDataCandidateDetailAPI(32, Number(id)));
    }
  }, [id, dispatch]);

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 rounded-[20px]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-medium">Thông tin ứng viên</h1>
        </div>
        <div className="flex justify-center">
          {objCandiDetails && <CandiCardDetail item={objCandiDetails} />}
        </div>
      </div>
    </div>
  );
}
