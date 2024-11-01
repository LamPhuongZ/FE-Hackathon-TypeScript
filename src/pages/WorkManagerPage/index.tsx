// import JobCardV2 from "../../components/card-candidates/JobCardV2";

import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import { Content, getDataJobManagerAPI } from "../../redux/reducers/jobReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";

export default function WorkManagerPage() {
  const [selectedStatus, setSelectedStatus] = useState<Content>();
  const dispatch: DispatchType = useDispatch();

  const getDataStatus = async () => {
    const actionAPI = getDataJobManagerAPI(1, 10, "PENDING");
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataStatus();
  }, []);
  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-center items-center gap-20">
          <Dropdown>
            <DropdownSelect
              value={`${selectedStatus?.jobApprovalStatus}`}
            ></DropdownSelect>
            {/* <DropdownList>
             
            </DropdownList> */}
          </Dropdown>
        </div>
        <div className="flex flex-col gap-11 mt-10"></div>
      </div>
    </div>
  );
}
