import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  Content,
  getSearchDataJobByJobSkillIdAPI,
  getSearchJobByTitle,
} from "../../redux/reducers/jobReducer";
import { useEffect, useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import { Pagination } from "antd";
import Banner from "../HomePage/components/banner";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function SearchPage() {
  const query = useQuery();
  const queryValue: string | null = query.get("jobSkillId");
  const skillName: string | null = query.get("skillName");

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 10;

  const { objJob, objTitle, province } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getDataJobList = async (
    page: number,
    size: number,
    objTitle?: string | null,
    province?: number | null
  ) => {
    const actionAPI = getSearchJobByTitle(page, size, objTitle, province);
    dispatch(actionAPI);
  };

  const getDataJobListBySkillId = async (
    page: number,
    size: number,
    jobSkillId: number | null
  ) => {
    const actionAPI = getSearchDataJobByJobSkillIdAPI(page, size, jobSkillId);
    dispatch(actionAPI);
  };

  useEffect(() => {
    if (queryValue) {
      const jobSkillId = Number(queryValue);
      getDataJobListBySkillId(currentPage - 1, pageSize, jobSkillId);
    } else {
      getDataJobList(currentPage - 1, pageSize, objTitle, province);
    }
  }, [currentPage, objTitle, province, queryValue]);

  return (
    <>
      <Banner />
      <div className="search">
        <div className="search__top">
          <h1 className="title">Công việc: </h1>
          <p>
            {queryValue ? `${skillName}` : `${objTitle}`}{" "}
          </p>
        </div>

        <div className="search__content">
          {objJob?.content.map((item: Content) => (
            <div key={item.jobId}>
              <JobCard item={item} showImages={true} />
            </div>
          ))}

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
      </div>
    </>
  );
}
