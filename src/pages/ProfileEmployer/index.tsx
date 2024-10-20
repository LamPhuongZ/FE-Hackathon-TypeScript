import "./ProfileEmployerPage.scss"
import type { MenuProps } from "antd";
import { Menu, Tabs } from "antd";
import { MenuItems } from "./MenuItems/menuItems";
import { WorkerDetail } from "./WorkerDetail/workerDetail";
import { ApplicantsList } from "./ApplicantsList/applicantsList";
import { ActiveJobs } from "./ActiveJobs/activeJobs";
import React, { useState, useRef } from "react";
import Ava from "../../assets/images/ava.jpg";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Add from "../../assets/icons/add.svg"

const ProfileEmployerPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("2");
  const [activeTab, setActiveTab] = useState<string>("1");
  const [showApplicants, setShowApplicants] = useState<boolean>(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);
  const applicantsListRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<File[]>([]); 
  const [name, setName] = useState<string>("Dương Văn A"); 

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setActiveMenuItem(e.key);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSelectWorker = (workerId: string) => {
    setSelectedWorkerId(workerId);
  };

  const handleGoBack = () => {
    setSelectedWorkerId(null);
    setTimeout(() => {
      applicantsListRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleImageUpload = (index: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const newImages = [...images];
        newImages[index] = file; // Update the specific index with the new image
        setImages(newImages);
      }
    };
    input.click();
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case "1":
        return (
          <div className="w11/12 bg-white mb-10 pb-10 pt-4">
            <div className="flex-col gap-4 m-auto w-11/12">
              <div>
                <h1 className=" mb-1 font-medium text-2xl">
                  THÔNG TIN TÀI KHOẢN
                </h1>
                <p className="font-semibold text-gray-400">
                  Cập nhật thông tin tài khoản
                </p>
              </div>
              <div className="mb-3">
                <img
                  src={Ava}
                  alt=""
                  className="h-40 w-40 rounded-full m-auto my-5"
                />
                <div className="w-24 m-auto">
                  <Button
                    title="Chọn ảnh"
                    className="btn-choose"
                    circle={false}
                  ></Button>
                </div>
              </div>
              <div>
                <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4 my-5">
                  <div className="flex flex-col gap-5">
                    <div className="row1 flex gap-4">
                      <div className="w-1/2">
                        <h3 className="font-semibold text-lg mb-2">
                          Họ tên
                        </h3>
                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                          <input
                            type="text"
                            value={name} // Sử dụng giá trị từ state
                            onChange={(e) => setName(e.target.value)} // Cập nhật state khi người dùng nhập
                            className="font-light text-base ml-4 w-full border-none outline-none"
                          />
                        </Card>
                      </div>
                      <div className="w-1/2">
                        <h3 className="font-semibold text-lg mb-2">Ngày sinh</h3>
                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                          <p className="font-light text-base ml-4">
                            123 Likelion, Q7, HoChiMinh
                          </p>
                        </Card>
                      </div>
                    </div>
                    <div className="row2 flex gap-4">
                      <div className="w-1/2">
                        <h3 className="font-semibold text-lg mb-2">Số điện thoại</h3>
                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                            <p className="font-light text-lg ml-4">4.0</p>                         
                        </Card>
                      </div>
                      <div className="w-1/2">
                        <h3 className="font-semibold text-lg mb-2">Email (nếu có)</h3>
                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                          <div className="flex flex-row gap-3 flex-wrap">
                            <p className="font-light text-base ml-4">
                              10/10/2024
                            </p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h1 className="font-semibold text-xl">Tải ảnh CCCD/CMND</h1>
                <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4 mt-2 mb-5">
                  <div className="flex gap-4 ">
                    {Array.from({ length: 2 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center w-1/2 h-40 border border-gray-300 rounded-md cursor-pointer bg-gray-300"
                        onClick={() => handleImageUpload(index)}
                      >
                        {images[index] ? (
                          <img
                            src={URL.createObjectURL(images[index])}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          <span className="text-gray-500 flex justify-center items-center gap-1"><img src={Add} alt="" /> Ảnh {index + 1}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <Button
                    title="Cập nhật"
                    className=""
                    circle={false}
                    color="primary"
                  ></Button>
            </div>
          </div>
        );
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
                label: <span className="custom-tab-label">Công việc đang hoạt động</span>,
                children: selectedWorkerId ? (
                  <WorkerDetail onGoBack={handleGoBack} />
                ) : showApplicants ? (
                  <div ref={applicantsListRef}>
                    <ApplicantsList
                      onBack={() => setShowApplicants(false)}
                      onSelectWorker={handleSelectWorker}
                    />
                  </div>
                ) : (
                  <ActiveJobs onApplicantsClick={() => setShowApplicants(true)} />
                ),
              },
              {
                key: "2",
                label: <span className="custom-tab-label">Công việc đã hoàn tất</span>,
                children: "Nội dung công việc đã hoàn tất",
              },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-blue-100 px-10 font-medium text-[32px] py-4">
        Quản Lí
      </div>
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
            <div className="col1-infor-name flex flex-col justify-center">
              <h3 className="font-semibold text-xl">Nguyễn Văn A</h3>
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
            items={MenuItems}
          />
        </div>
        <div className="col2 w-3/4 flex flex-col gap-10">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfileEmployerPage;
