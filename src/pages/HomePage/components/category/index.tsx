import Link from "antd/es/typography/Link";
import arrowRight from "../../../../assets/icons/icon-arrow-right.svg";
import building from "../../../../assets/icons/building-solid.svg";
import Card from "../../../../components/card/Card";
import { useState } from "react";
import { Pagination } from "antd";

interface ListJob {
  id: number;
  category: string;
  quantity: number;
}

const ListJob: ListJob[] = [
  { id: 1, category: "Xây dựng", quantity: 300 },
  { id: 2, category: "Kinh doanh", quantity: 200 },
  { id: 3, category: "Du lịch", quantity: 150 },
  { id: 4, category: "Thiết kế", quantity: 100 },
  { id: 5, category: "Làm đẹp", quantity: 50 },
  { id: 6, category: "Thời trang", quantity: 25 },
  { id: 7, category: "Sức khỏe", quantity: 10 },
  { id: 8, category: "Thể thao", quantity: 5 },
  { id: 9, category: "Xây dựng", quantity: 300 },
  { id: 10, category: "Kinh doanh", quantity: 200 },
  { id: 11, category: "Du lịch", quantity: 150 },
  { id: 12, category: "Thiết kế", quantity: 100 },
  { id: 13, category: "Làm đẹp", quantity: 50 },
  { id: 14, category: "Thời trang", quantity: 25 },
  { id: 15, category: "Sức khỏe", quantity: 10 },
  { id: 16, category: "Thể thao", quantity: 5 },
];

const ITEMS_PER_PAGE = 8; // Set how many items you want to display per page

const Category = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the index of the first and last job for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the job list based on the current page
  const currentJobs = ListJob.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col justify-center px-[81px] pb-[47px]">
      <div className="flex flex-row justify-between items-center mb-[63px]">
        <h1 className="text-2xl font-bold border-b-4 border-custom-blue border-solid pb-1">
          Danh mục ngành nghề
        </h1>
        <Link className="flex justify-center gap-4 text-blue-500 hover:underline">
          Xem Thêm
          <img src={arrowRight} alt="icon-arrow-right" />
        </Link>
      </div>

      <div className="form-layout-col4">
        {currentJobs.map((item) => {
          return (
            <Card key={item.id} className="bg-[#DEF5FF] rounded-[30px]">
              <div className="flex flex-col gap-5 justify-center items-center px-[50px] py-[20px]">
                <img src={building} alt={building} />
                <p className="text-[32px] font-bold">{item.category}</p>
                <p className="text-xl text-[#3F8CFF]">
                  {item.quantity} việc làm
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Pagination
        align="center"
        current={currentPage}
        total={ListJob.length} // Set the total number of jobs
        pageSize={ITEMS_PER_PAGE} // Number of items per page
        onChange={handlePageChange} // Handle page change
      />
    </section>
  );
};
export default Category;
