import div from "../../../components/div/div";
import Button from "../../../components/button/Button";
import Ava from "../../../assets/images/ava.jpg";
import logoCheck from "../../../assets/icons/check.svg";
import logoStar from "../../../assets/icons/star.svg";
import Phone from "../../../assets/icons/phone.svg";
import Address from "../../../assets/icons/icon-red-address.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface WorkerDetailProps {
  onGoBack: () => void;
  workerId: string; // Added workerId to props
}

export const WorkerDetail: React.FC<WorkerDetailProps> = ({ onGoBack, workerId }) => {
  console.log(workerId); 
  return (
    <div className="page-detail-worker w-11/12 bg-white m-auto">
      <div className="flex items-center mt-3">
        <div className="w-20">
          <Button
            icon={<ArrowLeftOutlined className="text-black text-xl" />}
            onClick={onGoBack}
            className="border-none hover:shadow-lg"
            color="custom"
            circle={false}
          />
        </div>
        <h2 className="text-xl font-medium w-full ml-60">Thông tin ứng viên</h2>
      </div>
      <div className="content-detail-worker w-full m-auto pt-2 pb-4 flex flex-col gap-5">
        {/* Worker info div */}
        <div className="w-full h-full border border-[#cacaca] rounded-[12px] p-4">
          <div className="flex flex-row items-center gap-6">
            <div className="col1 w-28 h-28 overflow-hidden rounded-full">
              <img
                src={Ava}
                alt="Ảnh đại diện"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col2 flex flex-col gap-2">
              <h1 className="font-semibold text-3xl">NGUYỄN VĂN A</h1>
              <div className="flex flex-row gap-2">
                <img src={logoCheck} alt="Đã xác thực" className="w-6 h-6" />
                <p className="font-normal text-lg">Đã xác thực</p>
              </div>
            </div>
            <div className="col3 ml-auto mr-4 flex gap-1 px-16 py-4 border rounded-xl shadow-lg shadow-blue-400 cursor-pointer">
              <img src={Phone} alt="Điện thoại" />
              <p className="text-xl font-semibold text-gray-600 ">
                123-456-789
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full border border-[#cacaca] rounded-[12px] p-4">
          <div className="flex flex-col gap-5">
            <div className="row1 flex gap-4">
              <div className="w-1/3">
                <h3 className="font-semibold text-lg mb-2">Ngày sinh</h3>
                <div className="w-full border border-[#cacaca] rounded-[12px] p-2">
                  <p className="font-light text-base ml-4">10-10-2024</p>
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="font-semibold text-lg mb-2">Địa chỉ</h3>
                <div className="w-full border border-[#cacaca] rounded-[12px] p-2">
                  <p className="font-light text-base ml-4">
                    123 Likelion, Q7, HoChiMinh
                  </p>
                </div>
              </div>
            </div>
            <div className="row2 flex gap-4">
              <div className="w-1/3">
                <h3 className="font-semibold text-lg mb-2">Đánh giá</h3>
                <div className="w-full border border-[#cacaca] rounded-[12px] p-2">
                  <div className="flex flex-row gap-2 items ml-4">
                    <img src={logoStar} alt="Đánh giá" className="w-5 h-5" />
                    <p className="font-light text-lg">4.0</p>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="font-semibold text-lg mb-2">Tham gia</h3>
                <div className="w-full border border-[#cacaca] rounded-[12px] p-2">
                  <div className="flex flex-row gap-3 flex-wrap">
                    <p className="font-light text-base ml-4">10/10/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full border border-[#cacaca] rounded-[12px] p-4">
          <h3 className="font-semibold text-lg mb-2">Kỹ năng</h3>
          <div className="flex flex-row gap-3 flex-wrap ml-4">
            <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
              Dọn v sinh
            </p>
            <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
              Phục vụ
            </p>
            <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
              Bảo vệ
            </p>
          </div>
        </div>
        <div className="w-full h-full  border border-[#cacaca] rounded-[12px] p-4">
          <h3 className="font-semibold text-lg mb-3">Đã hoàn thành</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="w-[90%] border border-[#cacaca] rounded-[12px] p-4 my-2 shadow-xl">
              <div className="flex flex-row gap-1">
                <div className="col1 w-1/5">
                  <img src={Ava} alt="" className="h-28 w-28 rounded-xl" />
                </div>
                <div className="col2 w-4/5 flex flex-col justify-center">
                  <div className="row1 flex justify-between items-center">
                    <div className="flex gap-2 flex-row items-center justify-center">
                      <h1 className="text-xl font-semibold">Giao hàng</h1>
                      <img src={logoCheck} alt="" className="h-5 w-5" />
                    </div>
                    <div className="flex gap-1 flex-row items-center justify-center">
                      <img src={Address} alt="" className="h-5 w-5" />
                      <h1 className="font-normal text-sm">Quận 7, TP.HCM</h1>
                    </div>
                  </div>
                  <hr className="mt-2 mb-6" />
                  <div className="row2 flex justify-between items-center">
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <p className="py-1 px-2 rounded-full bg-gray-200 w-auto text-center font-medium">
                        Dọn nhà
                      </p>
                      <div className="h-7 w-px bg-black" />
                      <div className="flex justify-center items-center gap-1">
                        <p>10/10/2024 - 14:00</p>
                        <hr className="w-8 bg-black border-none h-[1px]" />
                        <p>10/10/2024 - 22:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={logoStar} alt="" className="h-6 w-6" />
                      <p className="pt-2 font-semibold text-lg">4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          title="CHỌN ỨNG VIÊN"
          className="custom-btn w-11/12"
          circle={false}
        />
      </div>
    </div>
  );
};
