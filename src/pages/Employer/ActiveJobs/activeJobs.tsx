import { useEffect, useState } from "react";
// import Card from "../../../components/card/Card";
// import Button from "../../../components/button/Button";
// import Address from "../../../assets/icons/icon-red-address.svg";
// import Calender from "../../../assets/icons/calendar.svg";
// import JobCard from "../../../components/card-job/JobCard";

// interface ActiveJobsProps {
//   onApplicantsClick: () => void;
// }

// export const ActiveJobs: React.FC<ActiveJobsProps> = ({ onApplicantsClick }) => {

//   return (
//     <Card className="w-11/12 m-auto mt-6 shadow-xl rounded-[12px] p-4">
//       <div className="flex flex-row gap-4">
//         <div className="col1 w-4/5">
//           <div className="row1 flex flex-between">
//             <h1 className="text-xl font-semibold">Phục vụ ngoài trời</h1>
//             <div className="flex items-center gap-1">
//               <img src={Calender} alt="" className="h-4 w-4" />
//               <p className="pt-2">10/10/2024</p>
//             </div>
//           </div>
//           <hr className="mt-2 mb-3" />
//           <div className="row2 flex flex-between">
//             <p className="p-2 rounded-full bg-gray-200 w-1/4 text-center">
//               Giao hàng
//             </p>
//             <div className="flex items-center gap-1">
//               <img src={Address} alt="" className="h-4 w-4" />
//               <p className="pt-2">Quận 7, TP.HCM</p>
//             </div>
//           </div>
//         </div>
//         <div className="col2 w-1/5 text-base">
//           <Button
//             title="Ứng viên"
//             color="custom"
//             className="custom-btn absolute top-2.5 bg-red-500"
//             onClick={onApplicantsClick}
//             circle={false}
//           />
//         </div>
//       </div>
//     </Card>

//   );
// };

import { useDispatch, useSelector } from "react-redux";
import {  DispatchType, RootState } from "../../../redux/configStore";
import { Content, getDataJobAPI } from "../../../redux/reducers/jobReducer";
import JobCard from "../../../components/card-job/JobCard";
import { Pagination } from "antd";
import "../../SearchPage/SearchPage.scss"

export default function ActiveJobs() {
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
    <div className="search__content w-11/12 m-auto grid grid-cols-1 gap-6">
      {objJob?.content.map((item: Content) => (
        <div key={item.jobId}>
          <JobCard item={item} showImages={true}  showButton={true}/>
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
  );
}
