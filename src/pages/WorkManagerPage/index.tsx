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
import { JobApprovalStatusEnum } from "../../enums/jobApproval.enum";
import Label from "../../components/label/Label";
import { useRole } from "../../hooks/useRole";
import { UserRole } from "../../enums/role.enum";
import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import star from "../../assets/icons/star.svg";


export default function WorkManagerPage() {
  const [selectedStatus, setSelectedStatus] = useState<JobApprovalStatusEnum>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { role, isTokenExp } = useRole();

  // Kiểm tra phân quyền
  const isEmployer = role === UserRole.ROLE_EMPLOYER;
  // const isApplier = role === UserRole.ROLE_APPLIER;

  const pageSize = 4;

  const { objJobManager } = useSelector((state: RootState) => state.jobReducer);

  const dispatch: DispatchType = useDispatch();

  const getDataStatus = async (page: number, size: number, status: string) => {
    const actionAPI = getDataJobManagerAPI(page, size, status);
    dispatch(actionAPI);
  };

  useEffect(() => {
    if (isEmployer) {
      getDataStatus(
        currentPage,
        pageSize,
        selectedStatus ?? JobApprovalStatusEnum.APPROVED
      );
    } 
  }, [isEmployer, currentPage, selectedStatus]);

  if (isTokenExp) {
    return <div>Token đã hết hạn, vui lòng đăng nhập lại.</div>;
  }

  // if (!isEmployer) {
  //   return <div>Bạn không có quyền truy cập vào trang này.</div>;
  // }

  const renderJobManager = (): JSX.Element[] => {
    return (objJobManager?.content ?? []).map((item: Content) => {
      return <JobCardV2 key={item.jobId} item={item} />;
    });
  };

  const handleClickOption = async (item: JobApprovalStatusEnum) => {
    setSelectedStatus(item);
  };

  return (
    <div className="px-[30px]">
      {isEmployer ? (
        <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
          <div className="flex justify-between items-center gap-10">
            <Label marginBottom="mb-0">Trạng thái công việc</Label>
            <div>
              <Dropdown width="w-[600px]">
                <DropdownSelect
                  value={`${selectedStatus ?? JobApprovalStatusEnum.APPROVED}`}
                ></DropdownSelect>
                <DropdownList height="h-[170px]">
                  {Object.values(JobApprovalStatusEnum).map((item) => (
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
      ) : (
        <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
          <div className="flex justify-between items-center gap-10">
            <Label marginBottom="mb-0">Trạng thái công việc</Label>
            <div>
              <Dropdown width="w-[600px]">
                <DropdownSelect
                  value={`${selectedStatus ?? JobApprovalStatusEnum.APPROVED}`}
                ></DropdownSelect>
                <DropdownList height="h-[170px]">
                  {Object.values(JobApprovalStatusEnum).map((item) => (
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
          <div className="flex flex-col gap-11 mt-10">
          <div
      className={`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px]`}
    >
      <div className="flex justify-center items-center gap-5">
            <img     
              src={"https://via.placeholder.com/250x250"}
              alt={`Job Image 1`}
              className="w-[150px] h-[135px] rounded-3xl small-tablet:hidden"
            />
        <div className="w-full flex flex-col justify-between gap-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <p
                className={`text-lg font-semibold truncate small-tablet:text-base small-tablet:w-[130px]`}
              >
                Giao hàng
              </p>
              
                <div className="w-6 h-6 small-tablet:w-4 small-tablet:h-4">
                  <img
                    src={checked}
                    alt="checked"
                    className="w-full h-full object-cover"
                  />
                </div>

            </div>
            <div className={`flex items-center justify-end text-end gap-1`}>
              <div className="w-5 h-5 small-tablet:w-4 small-tablet:h-4 flex items-center justify-end">
                <img
                  src={location}
                  alt="location"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`pt-1 text-sm truncate`}
                
              >
                số 5, phường 5, quận 5
              </p>
            </div>
          </div>
          <div className="border border-solid border-[#E4E6E8] w-full"></div>
          <div className="flex justify-between">
            <div className="bg-[#E8E8E8] rounded-[20px] flex items-center">
              <p className="text-xs font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
                Giao hàng
              </p>
            </div>
            <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img src={star} alt="" className="w-full h-full" />
            </div>
            <p className="text-2xl font-medium pt-1">4.0</p>
          </div>
          </div>
        </div>
      </div>
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
      )}
    </div>
  );
}
