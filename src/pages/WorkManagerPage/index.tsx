// import JobCardV2 from "../../components/card-candidates/JobCardV2";

import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import { Content, getDataJobManagerAPI } from "../../redux/reducers/jobReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import JobCardV2 from "../../components/card-candidates/JobCardV2";
import { Pagination } from "antd";
// import { jobApprovalStatusEnum } from "./enum";

export default function WorkManagerPage() {
  const [selectedStatus, setSelectedStatus] = useState<Content>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;

  const { objJobManager } = useSelector((state: RootState) => state.jobReducer);

  const dispatch: DispatchType = useDispatch();

  const getDataStatus = async (page: number, size: number, status: string) => {
    const actionAPI = getDataJobManagerAPI(page, size, status);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataStatus(currentPage, pageSize, selectedStatus?.jobApprovalStatus ?? "PENDING");
  }, [currentPage, selectedStatus]);

  const renderJobManager = (): JSX.Element[] => {
    return (objJobManager?.content ?? []).map((item: Content) => {
      return <JobCardV2 key={item.jobId} item={item} />;
    });
  };

  const handleClickOption = async (item: Content) => {
    setSelectedStatus(item);
  };

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-center items-center gap-20">
          <Dropdown>
            <DropdownSelect
              value={`${selectedStatus?.jobApprovalStatus}`}
            ></DropdownSelect>
            <DropdownList>
            {(Array.isArray(objJobManager) ? objJobManager : []).map(
                    (item: Content) => (
                      <DropdownOption
                        name="jobApprovalStatus"
                        key={item.jobId}
                        onClick={() => handleClickOption(item)}
                      >
                        {item.jobApprovalStatus}
                      </DropdownOption>
                    )
                  )}
            </DropdownList>
          </Dropdown>
        </div>
        <div className="flex flex-col gap-11 mt-10">{renderJobManager()}</div>
        <Pagination
          style={{
            padding: "30px 20px",
            borderRadius: "5px",
            fontSize: "20px",
          }}
          align="center"
          current={currentPage}
          pageSize={pageSize}
          // total={objCandidate?.totalElements}
          total={objJobManager?.totalElements}
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
