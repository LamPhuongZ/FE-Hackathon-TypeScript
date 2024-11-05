import {
  applyForJobAPI,
  Content,
  setHasApplied,
} from "../../redux/reducers/jobReducer";
import Button from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";
import { toast } from "react-toastify";
import { useRole } from "../../hooks/useRole";
import { UserRole } from "../../enums/role.enum";

type Props = {
  item: Content;
};

export default function JobCardDetail({ item }: Props) {
  const { jobId } = useParams();
  const { sub, role } = useRole();
  const navigate = useNavigate();
  const location = useLocation(); // Lấy thông tin vị trí hiện tại
  const dispatch: DispatchType = useDispatch();
  const token = getCookie(ACCESS_TOKEN);

  // Kiểm tra phân quyền
  const isApplier = role === UserRole.ROLE_APPLIER;
  const isEmployer = role === UserRole.ROLE_EMPLOYER;
  console.log("🚀 ~ JobCardDetail ~ role:", role);

  const { hasApplied, isLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );

  useEffect(() => {
    if (token && sub) {
      // Kiểm tra trạng thái ứng tuyển từ localStorage và cập nhật vào Redux
      const hasApplied = localStorage.getItem(`hasApplied_${jobId}_${sub}`);

      if (hasApplied === "true") {
        dispatch(setHasApplied(true)); // Cập nhật trạng thái vào Redux
      } else {
        dispatch(setHasApplied(false)); // Cập nhật trạng thái vào Redux
      }
    }
  }, [jobId, sub, dispatch, token]);

  const handleApply = async (jobId: number) => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!token) {
      toast.info("Vui lòng đăng nhập để được ứng tuyển công việc này!!");
      return navigate("/login", { state: { from: location } });
    }

    if (!isApplier) {
      return toast.error("Bạn không có quyền ứng tuyển vào công việc này.");
    }

    // Gọi API ứng tuyển và cập nhật trạng thái sau khi ứng tuyển thành công
    await dispatch(applyForJobAPI(jobId));

    localStorage.setItem(`hasApplied_${jobId}_${sub}`, "true"); // Lưu trạng thái ứng tuyển vào localStorage
    dispatch(setHasApplied(true)); // Cập nhật trạng thái ứng tuyển trong Redux
  };

  return (
    <div className="bg-white rounded-2xl shadow-md py-12 px-7 small-tablet:w-full">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex gap-16 small-tablet:gap-8 small-tablet:justify-between">
          <h1 className="text-[30px] font-semibold small-tablet:text-xl">
            {item.title}
          </h1>
        </div>
        <Button
          title={!hasApplied ? "Ứng Tuyển" : "Đã Ứng Tuyển"}
          className="w-full h-16 mt-9"
          onClick={() => handleApply(Number(jobId))}
          disabled={hasApplied || isLoading || isEmployer} // Disable nút nếu đã ứng tuyển, đang loading hoặc là nhà tuyển dụng
        />
        <div className="border border-solid mt-4"></div>
      </div>
        <div className="flex flex-col gap-7 mt-7">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2 small-tablet:text-sm">
              <h1 className="font-medium ">Loại công việc:</h1>
              <div className="px-4 py-2 rounded-[10px] border border-solid flex">
                <p className="font-medium text-sm">{item.jobType.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 small-tablet:text-sm">
              <h1 className="font-medium ">Mức phí dịch vụ:</h1>
              <div className="px-4 py-2 rounded-[10px] border border-solid flex">
                <p className="font-medium text-xl">
                  {item.jobType.minPrice} - {item.jobType.maxPrice} / Giờ
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 items-center small-tablet:text-sm small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-y-2">
            <h1 className="font-medium">Đăng:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid small-tablet:text-center">
              <p className="font-medium">
                {new Date(item.postedDate)
                  .toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}{" "}
                -{" "}
                {new Date(item.postedDate).toLocaleTimeString("vi-VN", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: false, // Sử dụng định dạng 24 giờ
                })}
              </p>
            </div>
            <div className="border border-solid border-black w-16 mx-11 small-tablet:hidden"></div>
            <h1 className="font-medium">Hạn ứng tuyển:</h1>
            <div className="px-4 py-2 rounded-[10px] border border-solid small-tablet:text-center">
              <p className="font-medium">
                {new Date(item.endDate)
                  .toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}{" "}
                -{" "}
                {new Date(item.endDate).toLocaleTimeString("vi-VN", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: false, // Sử dụng định dạng 24 giờ
                })}
              </p>
            </div>
          </div>
          <div className="border border-solid"></div>
        </div>
        <div className="my-7">
          <h1 className="mb-2 font-medium small-tablet:text-sm">
            Địa chỉ làm việc:
          </h1>
          <div className="py-[10px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
            <p className="font-medium text-lg small-tablet:text-sm">
              {item.address}
            </p>
          </div>
        </div>
        <div className="flex justify-between my-7 small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
          <div className="w-[350px] large-desktop:w-[350px] small-tablet:w-full">
            <h1 className="mb-2 font-medium small-tablet:text-sm">
              Số điện thoại:
            </h1>
            <div className="py-[10px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-lg font-medium  small-tablet:text-sm">
                {item.phone}
              </p>
            </div>
          </div>
          <div className="w-[350px] large-desktop:w-[350px] small-tablet:w-full">
            <h1 className=" mb-2 font-medium small-tablet:text-sm">
              Người liên hệ:
            </h1>
            <div className="py-[10px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-lg font-medium  small-tablet:text-sm">
                {item.contactPerson}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-10 small-tablet:grid small-tablet:grid-cols-1 small-tablet:gap-7">
          <div className="w-[350px] large-desktop:w-[350px] small-tablet:w-full">
            <h1 className="mb-2 font-medium small-tablet:text-sm">
              Ngày bắt đầu làm việc:
            </h1>
            <div className="py-[10px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-lg font-medium  small-tablet:text-sm">
                {new Date(item.startDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
          <div className="w-[350px] large-desktop:w-[350px] small-tablet:w-full">
            <h1 className="mb-2 font-medium small-tablet:text-sm">
              Thời gian làm việc (Đơn vị: <strong>Giờ</strong>):
            </h1>
            <div className="py-[10px] flex items-center justify-center border border-solid rounded-[20px] small-tablet:py-[10px] small-tablet:rounded-[10px]">
              <p className="text-lg font-medium  small-tablet:text-sm">
                {item.duration / 60}
              </p>
            </div>
          </div>
        </div>
        <div className="border border-solid"></div>
        <div className="mt-[30px]">
          {item.images && item.images.length > 0 ? (
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
            >
              {item.images.slice(0, 4).map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="min-w-[80%] h-[400px] 2xl:w-full small-tablet:min-w-[300px] small-tablet:h-[200px] mb-10">
                    <img
                      src={image.url || "https://via.placeholder.com/350"}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full rounded-[20px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          ) : (
            <p className="mb-10">Không tồn tại hình ảnh</p>
          )}
          <div>
            <h1 className="text-[20px] font-semibold mb-2 small-tablet:text-sm">
              Mô tả
            </h1>
            <div className="border border-solid rounded-[20px] px-[26px] py-[18px] h-[170px] small-tablet:px-[10px] small-tablet:py-[10px]">
              <p className=" font-medium text-[#91929E] small-tablet:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
