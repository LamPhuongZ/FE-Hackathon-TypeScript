import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { Content, getDataJobAPI } from "../../redux/reducers/jobReducer";
import { useEffect, useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import { Pagination } from "antd";


export default function SearchPage() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 10;

  const { objJob } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: DispatchType = useDispatch();

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobList(currentPage - 1, pageSize);
  }, [currentPage]);

  return (
    <div className="search">
      <div className="search__top">
        <h1 className="title">Công việc: </h1>
        <p>Giao Hàng</p>
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
  );
}
