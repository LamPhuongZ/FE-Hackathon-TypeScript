import CandiCard from "../../components/card-candidates/CandiCard";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Content,
  getDataCandidateAPI,
} from "../../redux/reducers/candidateReducer";
import { DispatchType, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

export default function ListCandidatedPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get("id");

  const navigate = useNavigate();

  const dispatch: DispatchType = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;

  const { objCandidate } = useSelector(
    (state: RootState) => state.candidateReducer
  );

  const getDataCandidateList = async (
    id: number,
    page: number,
    size: number
  ) => {
    const actionAPI = getDataCandidateAPI(id, page, size);
    dispatch(actionAPI);
  };

  useEffect(() => {
    if (jobId) {
      getDataCandidateList(Number(jobId), currentPage - 1, pageSize);
    }
  }, [jobId, currentPage]);

  const renderCandidates = (): JSX.Element[] => {
    return (objCandidate?.content ?? []).map((item: Content) => {
      return (
        <div key={item.id}>
          <CandiCard
            className="cursor-pointer"
            item={item}
            showAmount={true}
            onSelect={() =>
              navigate(`/card-candidate-detail-job/${jobId}/${item.id}`)
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-medium">Danh sách ứng viên</h1>
        </div>
        <div className="flex flex-col gap-10 mt-10">{renderCandidates()}</div>
      </div>
      <Pagination
        style={{
          padding: "30px 20px",
          borderRadius: "5px",
          fontSize: "20px",
        }}
        align="center"
        current={currentPage}
        pageSize={pageSize}
        total={objCandidate?.totalElements}
        onChange={(page) => setCurrentPage(page)}
        itemRender={(page, type, originalElement) => {
          if (type === "page") {
            return (
              <span
                style={{
                  fontSize: "20px",
                  padding: "0 20px",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </span>
            );
          }
          return originalElement;
        }}
        prevIcon={
          <span
            style={{
              fontSize: "30px",
            }}
          >
            {"<"}
          </span>
        }
        nextIcon={
          <span
            style={{
              fontSize: "30px",
            }}
          >
            {">"}
          </span>
        }
      />
    </div>
  );
}
