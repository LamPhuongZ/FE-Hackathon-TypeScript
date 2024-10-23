import { useState } from 'react'
import { Tabs } from 'antd'
import { DoneJobs } from './DoneJobs/doneJobs';
import { WaitJobs } from './WaitJobs/waitJobs';

export default function Employee() {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

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
            <span className="custom-tab-label font-medium text-2xl py-2 px-4 text-[#333]">
              Công việc đã hoàn thành
            </span>
          ),
          children: (
            <DoneJobs />
          ),
        },
        {
          key: "2",
          label: (
            <span className="custom-tab-label font-medium text-2xl py-2 px-4 text-[#333]">
              Công việc chờ duyệt
            </span>
          ),
          children: (
            <WaitJobs />
          ),
        },
      ]}
    />
  );
}
