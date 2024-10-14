import "./ProfileWorkerPage.scss";
import React, { useState, useRef } from "react";
import type { MenuProps } from "antd";
import { Menu, Tabs } from "antd";
import {
  UserOutlined,
  UsergroupAddOutlined,
  MoneyCollectOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Ava from "../../assets/images/ava.jpg";
import Edit from "../../assets/icons/edit.svg";
import logoStar from "../../assets/icons/star.svg";
import logoCheck from "../../assets/icons/check.svg";
import Phone from "../../assets/icons/phone.svg";
import Address from "../../assets/icons/address.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Tài Khoản Của Tôi",
  },
  {
    key: "2",
    icon: <UsergroupAddOutlined />,
    label: "Quản Lí Công Việc",
  },
  {
    key: "3",
    icon: <MoneyCollectOutlined />,
    label: "Quản Lí Ngân Sách",
  },
];

const ProfileWorkerPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("2");
  const [activeTab, setActiveTab] = useState<string>("1");
  const [showApplicants, setShowApplicants] = useState<boolean>(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);
  const applicantsListRef = useRef<HTMLDivElement>(null);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setActiveMenuItem(e.key);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleApplicantsClick = () => {
    setShowApplicants(true);
  };

  const handleSelectWorker = (workerId: string) => {
    setSelectedWorkerId(workerId);
  };

  const handleGoBack = () => {
    setSelectedWorkerId(null);
    // Scroll to top of the applicants list after a short delay
    setTimeout(() => {
      applicantsListRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const renderWorkerDetail = () => {
    return (
      <div className="page-detail-worker w-11/12 bg-white m-auto">
        <div className="content-detail-worker w-full m-auto pt-10 pb-4 flex flex-col gap-5">
          <Card className="w-full h-full border border-[#cacaca] rounded-[24px]">
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
          </Card>
          <Card className="w-full h-full border border-[#cacaca] rounded-[24px]">
            <div className="flex flex-col gap-5">
              <div className="row1 flex gap-4">
                <div className="w-1/3">
                  <h3 className="font-semibold text-lg mb-2">Ngày sinh</h3>
                  <Card className="w-full border border-[#cacaca]">
                    <p className="font-light text-base">10-10-2024</p>
                  </Card>
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold text-lg mb-2">Địa chỉ</h3>
                  <Card className="w-full border border-[#cacaca] ">
                    <p className="font-light text-base">
                      123 Likelion, Q7, HoChiMinh
                    </p>
                  </Card>
                </div>
              </div>
              <div className="row2 flex gap-4">
                <div className="w-1/3">
                  <h3 className="font-semibold text-lg mb-2">Đánh giá</h3>
                  <Card className="w-full border border-[#cacaca] ">
                    <div className="flex flex-row gap-2 items">
                      <img src={logoStar} alt="Đánh giá" className="w-5 h-5" />
                      <p className="font-light text-lg">4.0</p>
                    </div>
                  </Card>
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold text-lg mb-2">Kỹ năng</h3>
                  <Card className="w-full border border-[#cacaca] ">
                    <div className="flex flex-row gap-3 flex-wrap">
                      <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                        Dọn vệ sinh
                      </p>
                      <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                        Phục vụ
                      </p>
                      <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                        Bảo vệ
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
          <Card className="w-full h-full  border border-[#cacaca] rounded-[24px]">
            <h3 className="font-semibold text-lg mb-3">Đã hoàn thành</h3>
            <div className="flex flex-row gap-4 flex-wrap">
              <Card className="w-[48%] h-full border border-[#cacaca] rounded-[24px]">
                <div className="title-job flex justify-between">
                  <h1 className="font-semibold text-lg">Giao hàng</h1>
                  <div className="rate-job flex flex-row gap-1 items-baseline">
                    <img src={logoStar} alt="Đánh giá" className="w-4 h-4" />
                    <p className="font-semibold text-lg">4.0</p>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="content-job flex flex-col mt-2">
                  <p className="font-light text-base text-center px-4 py-1 border bg-gray-200 rounded-2xl w-2/5 mb-2">
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
          <div className="flex gap-2">
            <Button
              title="Quay Lại"
              className="w-2/4 h-12"
              onClick={handleGoBack}
            />
            <Button
              title="Chọn Ứng Viên"
              className="w-2/4 h-12 bg-blue-500 text-white font-bold"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case "1":
        return <div>Nội dung Tài Khoản Của Tôi</div>;
      case "2":
        return (
          <Tabs
            style={{
              backgroundColor: "white",
              paddingBottom: "40px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              borderRadius: "8px",
              marginBottom: "50px",
            }}
            activeKey={activeTab}
            onChange={handleTabChange}
            centered={true}
            items={[
              {
                key: "1",
                label: (
                  <span className="custom-tab-label">
                    Công việc đang hoạt động
                  </span>
                ),
                children: selectedWorkerId ? (
                  renderWorkerDetail()
                ) : showApplicants ? (
                  <div ref={applicantsListRef}>
                    <ApplicantsList
                      onBack={() => setShowApplicants(false)}
                      onSelectWorker={handleSelectWorker}
                    />
                  </div>
                ) : (
                  <Card className="w-11/12 m-auto relative mt-6 shadow ">
                    <div className="infor-work flex gap-4">
                      <img
                        src={Ava}
                        alt="Ảnh công việc"
                        className="rounded-xl w-32 h-32"
                      />
                      <div className="infor-work-detail flex flex-col gap-2">
                        <h1 className="text-xl font-medium">
                          Phục vụ ngoài trời
                        </h1>
                        <p className="text-base">SL: 2</p>
                        <p className="text-base">Địa điểm: Q7, TP.HCM</p>
                        <p className="text-base">
                          Thời gian: 15h-22h, ngày 10/10/2024
                        </p>
                      </div>
                    </div>
                    <hr className="mt-3 " />
                    <div className="infor-work-detail2 flex gap-2 mt-4">
                      <h3 className="text-base font-medium">Mô tả:</h3>
                      <p className="text-base font-light">
                        phục vụ bàn, lên món, đón khách, dọn vệ sinh...
                      </p>
                    </div>

                    <Button
                      title="Người ứng tuyển"
                      color="delete"
                      className="absolute right-8 top-5"
                      onClick={handleApplicantsClick}
                    />
                  </Card>
                ),
              },
              {
                key: "2",
                label: (
                  <span className="custom-tab-label">
                    Công việc đã hoàn tất
                  </span>
                ),
                children: "Nội dung công việc đã hoàn tất",
              },
            ]}
          />
        );
      case "3":
        return <div>Nội dung Quản Lí Ngân Sách</div>;
      default:
        return null;
    }
  };

  return (
    <div className="page-profile-worker w-11/12 custom-background m-auto flex gap-6 mt-14">
      <div className="col1 w-1/4 flex flex-col">
        <div className="col1-infor flex flex-row gap-2">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <img
              src={Ava}
              alt="Ảnh đại diện"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col1-infor-name flex flex-col gap-2">
            <h3 className="font-medium text-xl">Nguyễn Văn A</h3>
            <button className="flex gap-1 ">
              <img src={Edit} alt="Chỉnh sửa icon" />
              <p className="text-sm font-medium text-gray-700">Sửa Hồ Sơ</p>
            </button>
          </div>
        </div>
        <hr className="mt-4 mb-2 w-11/12" />

        <Menu
          onClick={handleMenuClick}
          className="custom-menu"
          style={{
            width: 256,
            backgroundColor: "#F4F9FD",
            border: "none",
          }}
          selectedKeys={[activeMenuItem]}
          mode="inline"
          items={items}
        />
      </div>

      <div className="col2 w-3/4 flex flex-col gap-10">{renderContent()}</div>
    </div>
  );
};

const ApplicantsList: React.FC<{
  onBack: () => void;
  onSelectWorker: (workerId: string) => void;
}> = ({ onBack, onSelectWorker }) => {
  return (
    <div className="w-11/12 m-auto mt-6">
      <div className="flex items-center mb-4 relative">      
        <Button
          icon={<ArrowLeftOutlined />}
          iconPosition="left"
          onClick={onBack}
          className="absolute left-0"
          color="custom"
        />
        <h2 className="text-xl font-medium w-full text-center">
          Danh sách người ứng tuyển
        </h2>
      </div>
      <div className="listworker-detail flex flex-wrap justify-between gap-y-6">
        {[1, 2, 3].map((id) => (
          <Card
            key={id}
            className="listworker-card  w-[48%] cursor-pointer shadow-md transition-transform duration-300 ease-in-out overflow-hidden hover:scale-105 hover:shadow-lg"
            onClick={() => onSelectWorker(id.toString())}
          >
            <div className="flex flex-row gap-3">
              <div className="col-left w-2/5 flex flex-col items-center">
                <div className="relative flex-grow">
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
                <div className="rate flex items-center mt-auto">
                  <img src={logoStar} alt="Đánh giá" className="w-5 h-5" />
                  <p className="text-lg font-semibold ml-1 mt-1.5">4.0</p>
                </div>
              </div>
              <div className="col-right w-3/5 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-3">
                    Nguyen Van {String.fromCharCode(64 + id)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm pb-1">Kỹ năng</h5>
                    <div className="flex gap-2 flex-wrap">
                      <p className="skills">Dọn vệ sinh</p>
                      <p className="skills">Phục vụ</p>
                      <p className="skills">Giao hàng</p>
                      <p className="skills">...</p>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-sm">
                  Số việc đã hoàn thành:{" "}
                  <span className="font-semibold text-red-500">18</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileWorkerPage;
