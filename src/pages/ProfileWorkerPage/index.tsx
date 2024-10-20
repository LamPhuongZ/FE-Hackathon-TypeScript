import "./profileWorkerPage.scss"
import type { MenuProps } from "antd";
import { Menu, Tabs } from "antd";
import { MenuItems } from "./MenuItems/menuItems";
import { WorkerDetail } from "./WorkerDetail/workerDetail";
import { ApplicantsList } from "./ApplicantsList/applicantsList";
import { ActiveJobs } from "./ActiveJobs/activeJobs";
import React, { useState, useRef } from "react";
import Ava from "../../assets/images/ava.jpg";
import Edit from "../../assets/icons/edit.svg";

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

  const handleSelectWorker = (workerId: string) => {
    setSelectedWorkerId(workerId);
  };

  const handleGoBack = () => {
    setSelectedWorkerId(null);
    setTimeout(() => {
      applicantsListRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
      case "3":
        return <div>Nội dung Quản Lí Ngân Sách</div>;
      default:
        return null;
    }
  };

  return (
    <div className="page-profile-worker w-11/12 custom-primary m-auto flex gap-6 mt-14">
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
          items={MenuItems}
        />
      </div>
      <div className="col2 w-3/4 flex flex-col gap-10">{renderContent()}</div>
    </div>
  );
};

export default ProfileWorkerPage;