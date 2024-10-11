import "../../pages/DetailWorkerPage/detailWorkerPage.scss";
import Ava from "../../assets/images/ava.jpg";
import Card from "../../components/card";
import Star from "../../assets/icons/star.svg"
import Address from "../../assets/icons/icon-red-address.svg"
import Calendar from "../../assets/icons/calendar.svg"
import Button from "../../components/button/Button";
import Checked from "../../assets/images/checked.png";
import Phone from "../../assets/icons/phone.svg";

export default function DetailWorkerPage() {
  return (
    <div className="page-detail-worker w-11/12 bg-white	m-auto mt-10 mb-32">
      <div className="content-detail-worker w-11/12 m-auto pt-10 pb-10 flex flex-col gap-5">
        <Card
          width="100%"
          height="100%"
          padding="16px"
          border="1px solid"
          borderColor="#cacaca"
          borderRadius="24px"
        >
          <div className="flex flex-row items-center gap-6">
            <div className="col1 w-28 h-28 overflow-hidden rounded-full">
              <img
                src={Ava}
                alt="Ảnh đại diện"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col2 flex flex-col gap-2">
              <h1 className="font-semibold text-4xl">NGUYỄN VĂN A</h1>
              <div className="flex flex-row gap-2">
                <img src={Checked} alt="Đã xác thực" className="w-6 h-6" />
                <p className="font-normal text-xl">Đã xác thực</p>
              </div>
            </div>
            <div className="col3 ml-auto mr-4 flex gap-1 px-16 py-4 border rounded-xl shadow-lg shadow-blue-400 cursor-pointer">
              <img src={Phone} alt="Điện thoại" />
              <p className="text-xl font-semibold text-gray-600 ">
                123-456-789
              </p>
            </div>
          </div>
        </Card>
        <Card
          width="100%"
          height="100%"
          padding="24px"
         border="1px solid"
          borderColor="#cacaca"
          borderRadius="24px"
        >
          <div className="flex flex-col gap-5">
            <div className="row1 flex gap-4">
              <div className="w-1/3">
                <h3 className="font-semibold text-xl	">Ngày sinh</h3>
                <Card width="100%" height="50%" border="1px solid"
          borderColor="#cacaca">
                  <p className="font-light text-xl ">10-10-2024</p>
                </Card>
              </div>
              <div className="w-2/3">
                <h3 className="font-semibold text-xl">Địa chỉ</h3>
                <Card width="100%" height="50%" border="1px solid"
          borderColor="#cacaca">
                  <p className="font-light text-xl">
                    123 Likelion, Q7, HoChiMinh
                  </p>
                </Card>
              </div>
            </div>
            <div className="row2 flex gap-4">
              <div className="w-1/3">
                <h3 className="font-semibold text-xl">Đánh giá</h3>
                <Card width="100%" height="50%" border="1px solid"
          borderColor="#cacaca">
                  <div className="flex flex-row gap-2 items-baseline">
                    <img src={Star} alt="Đánh giá" className="w-5 h-5" />
                    <p className="font-light text-xl">4.0</p>
                  </div>
                </Card>
              </div>
              <div className="w-2/3">
                <h3 className="font-semibold text-xl">Kỹ năng</h3>
                <Card width="100%" height="50%" border="1px solid"
          borderColor="#cacaca">
                  <div className="flex flex-row gap-3">
                    <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl">
                      Dọn vệ sinh
                    </p>
                    <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl">
                      Phục vụ
                    </p>
                    <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl">
                      Bảo vệ
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
        <Card
          width="100%"
          height="100%"
          padding="24px"
          border="1px solid"
          borderColor="#cacaca"
          borderRadius="24px"
        >
          <h3 className="font-semibold text-xl mb-3">Đã hoàn thành</h3>
          <div className="flex flex-row gap-4 flex-wrap">
            <Card
              width="48%"
              height="100%"
              padding="16px"
              border="1px solid"
          borderColor="#cacaca"
              borderRadius="24px"
            >
              <div className="title-job flex justify-between">
                <h1 className="font-semibold text-2xl">Giao hàng</h1>
                <div className="rate-job flex flex-row gap-1 items-baseline">
                  <img src={Star} alt="Đánh giá" className="w-6 h-6" />
                  <p className="font-semibold text-2xl">4.0</p>
                </div>
              </div>
              <hr className="my-1" />
              <div className="content-job flex flex-col mt-2">
                <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl w-1/4 mb-2">
                  Giao hàng
                </p>
                <div className="flex flex-row gap-2 items-baseline">
                  <img src={Address} alt="" className="w-4 h-4" />
                  <p className="mb-1">Phường 5, Quận 5</p>
                </div>
                <div className="flex flex-row gap-1 items-baseline">
                  <img src={Calendar} alt="" className="w-4 h-4" />
                  <p>10/10/2024-11/10/2024</p>
                </div>
              </div>
            </Card>
            <Card
              width="48%"
              height="100%"
              padding="16px"
              border="1px solid"
          borderColor="#cacaca"
              borderRadius="24px"
            >
              <div className="title-job flex justify-between">
                <h1 className="font-semibold text-2xl">Giao hàng</h1>
                <div className="rate-job flex flex-row gap-1 items-baseline">
                  <img src={Star} alt="Đánh giá" className="w-6 h-6" />
                  <p className="font-semibold text-2xl">4.0</p>
                </div>
              </div>
              <hr className="my-1" />
              <div className="content-job flex flex-col mt-2">
                <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl w-1/4 mb-2">
                  Giao hàng
                </p>
                <div className="flex flex-row gap-2 items-baseline">
                  <img src={Address} alt="" className="w-4 h-4" />
                  <p className="mb-1">Phường 5, Quận 5</p>
                </div>
                <div className="flex flex-row gap-1 items-baseline">
                  <img src={Calendar} alt="" className="w-4 h-4" />
                  <p>10/10/2024-11/10/2024</p>
                </div>
              </div>
            </Card>
            <Card
              width="48%"
              height="100%"
              padding="16px"
             border="1px solid"
          borderColor="#cacaca"
              borderRadius="24px"
            >
              <div className="title-job flex justify-between">
                <h1 className="font-semibold text-2xl">Giao hàng</h1>
                <div className="rate-job flex flex-row gap-1 items-baseline">
                  <img src={Star} alt="Đánh giá" className="w-6 h-6" />
                  <p className="font-semibold text-2xl">4.0</p>
                </div>
              </div>
              <hr className="my-1" />
              <div className="content-job flex flex-col mt-2">
                <p className="font-light text-base px-4 py-1 border bg-gray-200 rounded-2xl w-1/4 mb-2">
                  Giao hàng
                </p>
                <div className="flex flex-row gap-2 items-baseline">
                  <img src={Address} alt="" className="w-4 h-4" />
                  <p className="mb-1">Phường 5, Quận 5</p>
                </div>
                <div className="flex flex-row gap-1 items-baseline">
                  <img src={Calendar} alt="" className="w-4 h-4" />
                  <p>10/10/2024-11/10/2024</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
        <Button className="w-2/4 mx-auto">Chọn ứng viên</Button>
      </div>
    </div>
  );
}
