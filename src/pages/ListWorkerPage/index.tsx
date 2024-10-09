import Banner from "../HomePage/components/banner/index";
import "../../pages/ListWorkerPage/listWorkerPage.scss";
import Ava from "../../assets/images/ava.jpg";
import logoStar from "../../assets/icons/star.svg";
import logoHaftStar from "../../assets/icons/half-star.svg";
import logoCheck from "../../assets/icons/check.svg";

export default function ListWorkerPage() {
  return (
    <div className="page-content">
      <Banner />
      <div className="listworker mt-20 ">
        <h1 className="text-center text-3xl font-medium max-md:text-2xl">
          DANH SÁCH NGƯỜI LÀM ỨNG TUYỂN
        </h1>
        <h3 className="ml-10 font-bold text-xl py-10 max-md:text-center max-md:font-medium max-md:text-lg max-xl:text-center">
          Khu vực: Thành phố HỒ CHÍ MINH
        </h3>
        <div className="listworker-detail ml-10 flex justify-start gap-4 flex-wrap pb-14 max-md:flex-col max-md:justify-center max-md:items-center max-md:m-auto max-xl:justify-center">
          <div className="listworker-card w-96 rounded-xl flex py-4 mb-8 relative duration-300 bg-white	max-md:w-11/12 max-md:mb-4">
            <div className="col-left w-2/5 flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={Ava}
                    alt="Ảnh đại diện"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 right-3 transform translate-x-1/4 translate-y-1/4">
                  <img src={logoCheck} alt="Kiểm tra" />
                </div>
              </div>
              <div className="rate flex gap-1">
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
              </div>
            </div>
            <div className="col-right w-3/5 flex flex-col gap-3">
              <div className="font-bold text-xl">Nguyen Van A</div>
              <div className="">
                <h5 className="font-semibold text-base">Kỹ năng</h5>
                <div className="flex gap-2 flex-wrap">
                  <p className="skills">Dọn vệ sinh</p>
                  <p className="skills">Phục vụ</p>
                  <p className="skills">Giao hàng</p>
                  <p className="skills">...</p>
                </div>
              </div>
              <div className="font-semibold text-base mt-auto">
                Số việc đã hoàn thành:{" "}
                <span className="font-semibold text-red-500	">18</span>
              </div>
            </div>

            <div className="overlay rounded-xl z-10 absolute inset-0 bg-gray-600 bg-opacity-95 flex justify-center items-center opacity-0 transition-opacity duration-300">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer	">
                Chi tiết
              </button>
            </div>
          </div>
          <div className="listworker-card w-96 rounded-xl flex py-4 mb-8 relative duration-300 bg-white	max-md:w-11/12 max-md:mb-4">
            <div className="col-left w-2/5 flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={Ava}
                    alt="Ảnh đại diện"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 right-3 transform translate-x-1/4 translate-y-1/4">
                  <img src={logoCheck} alt="Kiểm tra" />
                </div>
              </div>
              <div className="rate flex gap-1">
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
              </div>
            </div>
            <div className="col-right w-3/5 flex flex-col gap-3 justify-between">
              <div className="font-bold text-xl">Nguyen Van A</div>
              <div className="">
                <h5 className="font-semibold text-base">Kỹ năng</h5>
                <div className="flex gap-2 flex-wrap">
                  <p className="skills">Dọn vệ sinh</p>
                </div>
              </div>
              <div className="font-semibold text-base mt-auto">
                Số việc đã hoàn thành:{" "}
                <span className="font-semibold text-red-500	">18</span>
              </div>
            </div>
              <div className="overlay rounded-xl z-10 absolute inset-0 bg-gray-600 bg-opacity-95 flex justify-center items-center opacity-0 transition-opacity duration-300">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer	">
                Chi tiết
              </button>
            </div>
          </div>
          <div className="listworker-card w-96 rounded-xl flex py-4 mb-8 relative duration-300 bg-white	max-md:w-11/12 max-md:mb-4">
            <div className="col-left w-2/5 flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={Ava}
                    alt="Ảnh đại diện"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 right-3 transform translate-x-1/4 translate-y-1/4">
                  <img src={logoCheck} alt="Kiểm tra" />
                </div>
              </div>
              <div className="rate flex gap-1">
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoHaftStar} alt="Đánh giá" />
              </div>
            </div>
            <div className="col-right w-3/5 flex flex-col gap-3">
              <div className="font-bold text-xl">Nguyen Van A</div>
              <div className="">
                <h5 className="font-semibold text-base">Kỹ năng</h5>
                <div className="flex gap-2 flex-wrap">
                  <p className="skills">Dọn vệ sinh</p>
                  <p className="skills">Phục vụ</p>
                  <p className="skills">Giao hàng</p>
                </div>
              </div>
              <div className="font-semibold text-base mt-auto">
                Số việc đã hoàn thành:{" "}
                <span className="font-semibold text-red-500	">18</span>
              </div>
            </div>
              <div className="overlay rounded-xl z-10 absolute inset-0 bg-gray-600 bg-opacity-95 flex justify-center items-center opacity-0 transition-opacity duration-300">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer	">
                Chi tiết
              </button>
            </div>
          </div>
          <div className="listworker-card w-96 rounded-xl flex py-4 mb-8 relative duration-300 bg-white	max-md:w-11/12 max-md:mb-4">
            <div className="col-left w-2/5 flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={Ava}
                    alt="Ảnh đại diện"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 right-3 transform translate-x-1/4 translate-y-1/4">
                  <img src={logoCheck} alt="Kiểm tra" />
                </div>
              </div>
              <div className="rate flex gap-1">
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoStar} alt="Đánh giá" />
                <img src={logoHaftStar} alt="Đánh giá" />
              </div>
            </div>
            <div className="col-right w-3/5 flex flex-col gap-3">
              <div className="font-bold text-xl">Nguyen Van A</div>
              <div className="">
                <h5 className="font-semibold text-base">Kỹ năng</h5>
                <div className="flex gap-2 flex-wrap">
                  <p className="skills">Dọn vệ sinh</p>
                  <p className="skills">Phục vụ</p>
                  <p className="skills">Giao hàng</p>
                </div>
              </div>
              <div className="font-semibold text-base mt-auto">
                Số việc đã hoàn thành:{" "}
                <span className="font-semibold text-red-500	">18</span>
              </div>
            </div>
              <div className="overlay rounded-xl z-10 absolute inset-0 bg-gray-600 bg-opacity-95 flex justify-center items-center opacity-0 transition-opacity duration-300">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer	">
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
