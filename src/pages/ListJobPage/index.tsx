import { useEffect, useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  Content,
  getDataJobAPI,
  getDataJobDetailAPI,
} from "../../redux/reducers/jobReducer";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";

export default function ListJobPage() {
  const navigate = useNavigate();
  const [selectedJobCard, setSelectedJobCard] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;

  const { objJob, objJobDetails } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  const getDataJobDetail = async (id: number) => {
    const actionAPI = getDataJobDetailAPI(id);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList(currentPage - 1, pageSize);
  }, [currentPage]);

  useEffect(() => {
    if (objJob?.content?.length) {
      const newItem = objJob.content[objJob.content.length - 7];
      if (newItem) {
        setSelectedJobCard(newItem.jobId);
        getDataJobDetail(newItem.jobId);
      }
    }
  }, [objJob]);

  //
  // const fetchJobDetails = async (id: number) => {
  //   try {
  //     const response = await fetch(`https://api.easyjob.io.vn/api/jobs/${id}`);
  //     const data = await response.json();
  //     setJobDetails(data.data);
  //   } catch (error) {
  //     console.error('Error fetching job details:', error);
  //   }
  // };

  //
  const handleSelectJobCard = (id: number) => {
    setSelectedJobCard(id);
    getDataJobDetail(id);
  };

  const renderJobs = (): JSX.Element[] => {
    // Use nullish coalescing to ensure `renderJobs` always returns an array
    return (objJob?.content ?? []).map((item: Content) => {
      const handleJobClick = () => {
        if (window.innerWidth <= 840) {
          navigate(`/card-detail-job/${item.jobId}`);
        } else {
          handleSelectJobCard(item.jobId);
        }
      };

      return (
        <div key={item.jobId}>
          <JobCard
            item={item}
            isSelected={
              window.innerWidth > 840 ? selectedJobCard === item.jobId : false
            }
            onSelect={handleJobClick}
            width="w-[191px]"
          />
        </div>
      );
    });
  };

  //
  return (
    <div>
      <div className="grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]">
        <div className="flex flex-col gap-8">{renderJobs()}</div>
        <div className="small-tablet:hidden">
          {/* {objJobDetails && <JobCardDetail item={objJobDetails} />} */}
          <CandiCardDetail />
        </div>
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
        total={objJob?.totalElements}
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
