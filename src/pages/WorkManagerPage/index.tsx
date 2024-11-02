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
import { jobApprovalStatusEnum } from "./enum";
import Label from "../../components/label/Label";

export default function WorkManagerPage() {
  const [selectedStatus, setSelectedStatus] = useState<jobApprovalStatusEnum>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 4;

  const { objJobManager } = useSelector((state: RootState) => state.jobReducer);

  const dispatch: DispatchType = useDispatch();

  const getDataStatus = async (page: number, size: number, status: string) => {
    const actionAPI = getDataJobManagerAPI(page, size, status);
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataStatus(
      currentPage,
      pageSize,
      selectedStatus ?? jobApprovalStatusEnum.PENDING
    );
  }, [currentPage, selectedStatus]);

  const renderJobManager = (): JSX.Element[] => {
    return (objJobManager?.content ?? []).map((item: Content) => {
      return <JobCardV2 key={item.jobId} item={item} />;
    });
  };

  const handleClickOption = async (item: jobApprovalStatusEnum) => {
    setSelectedStatus(item);
  };

  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-between items-center gap-10">
          <Label marginBottom="mb-0">Trạng thái công việc</Label>
          <div>
            <Dropdown width="w-[600px]">
              <DropdownSelect
                value={`${selectedStatus ?? jobApprovalStatusEnum.PENDING}`}
              ></DropdownSelect>
              <DropdownList height="h-[170px]">
                {Object.values(jobApprovalStatusEnum).map((item) => (
                  <DropdownOption
                    name="jobApprovalStatus"
                    key={item}
                    onClick={() => handleClickOption(item)}
                  >
                    {item}
                  </DropdownOption>
                ))}
              </DropdownList>
            </Dropdown>
          </div>
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
