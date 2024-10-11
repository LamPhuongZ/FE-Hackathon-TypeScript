import Ava from "../../assets/images/ava.jpg"
import Edit from "../../assets/icons/edit.svg"
// import User from "../../assets/icons/user.svg"
// import Worker from "../../assets/icons/worker.svg"
// import Money from "../../assets/icons/money.svg"
// import Card from "../../components/card"



// export default function ProfileWorkerPage() {
//     return (
//       <div className="page-profile-worker w-11/12 custom-background m-auto flex gap-6 mt-14">
//         <div className="col1 w-1/4 flex flex-col">
//           <div className="col1-infor flex flex-row gap-2">
//             <div className="w-14 h-14 overflow-hidden rounded-full">
//               <img
//                 src={Ava}
//                 alt="Ảnh đại diện"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="col1-infor-name flex flex-col gap-2">
//               <h3 className="font-medium text-xl">Nguyễn Văn A</h3>
//               <button className="flex gap-1 ">
//                 <img src={Edit} alt="Chỉnh sửa icon" />
//                 <p className="text-sm font-medium text-gray-700">Sửa Hồ Sơ</p>
//               </button>
//             </div>
//           </div>
//           <hr className="my-4" />
//           <div className="flex flex-col gap-6 mt-4">
//             <button className="flex flex-row gap-2">
//               <img src={User} alt="Account" className="w-6 h-6" />
//               <p className="text-xl font-normal">Tài Khoản Của Tôi</p>
//             </button>

//             <button className="flex flex-row gap-2">
//               <img src={Worker} alt="Worker" className="w-6 h-6" />
//               <p className="text-xl font-medium text-blue-800 ">
//                 {" "}
//                 Quản Lí Công Việc
//               </p>
//             </button>

//             <button className="flex flex-row gap-2">
//               <img src={Money} alt="Money" className="w-6 h-6" />
//               <p className="text-xl font-normal"> Quản Lí Ngân Sách</p>
//             </button>
//           </div>
//         </div>
//         <div className="col2 w-3/4 flex flex-col gap-10">
//           <div className="col2-row1 bg-white w-full flex justify-evenly py-4">
//             <button className="font-medium text-2xl bg-gray-300">
//               Công việc đang hoạt động
//             </button>
//             <button className="font-medium text-2xl">
//               Công việc đã hoàn tất
//             </button>
//           </div>
//           <div className="col2-row2 bg-white py-10 ">
//             <div className="w-11/12 flex flex-col m-auto relative">
//               <Card width="100%" height="100%">
//                 <div className="infor-work flex gap-4">
//                   <img
//                     src={Ava}
//                     alt="Ảnh công việc"
//                     className="rounded-xl w-32 h-32"
//                   />
//                   <div className="infor-work-detail flex flex-col gap-2">
//                     <h1 className="text-xl font-medium">Phục vụ ngoài trời</h1>
//                     <p>SL: 2</p>
//                     <p>Địa điểm: Q7, TP.HCM</p>
//                     <p>Thời gian: 15h-22h, ngày 10/10/2024</p>
//                   </div>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="infor-work-detail2 flex gap-2">
//                   <h3 className="text-base font-medium">Mô tả:</h3>
//                   <p className="text-base font-light">
//                     phục vụ bàn, lên món, đón khách, dọn vệ sinh...
//                   </p>
//                 </div>

//                 {/* <Button className="bg-red-700 ">Người ứng tuyển</Button> */}

//                 <button className="absolute translate-y-1/4 translate-x-full w-1/5 bg-red-500 rounded-xl py-1">
//                   Người ứng tuyển
//                 </button>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }


import React from "react";
import {
  EuroCircleFilled,
SlidersFilled,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "30%",
  position: "absolute",
  insetInlineStart: 0,
  top: 500,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const items: MenuProps["items"] = [
  UserOutlined,
  SlidersFilled,
  EuroCircleFilled,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `Tài Khoản Của Tôi`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
    <Layout hasSider>
      <div className="col1-infor flex flex-row gap-2">
           <div className="w-14 h-14 overflow-hidden rounded-full">
             <img
               src={Ava}
                alt="Ảnh đại diện"
               className="w-full h-full object-cover"             />
           </div>

           <div className="col1-infor-name flex flex-col gap-2">
           <h3 className="font-medium text-xl">Nguyễn Văn A</h3>
           <button className="flex gap-1 ">
             <img src={Edit} alt="Chỉnh sửa icon" />
              <p className="text-sm font-medium text-gray-700">Sửa Hồ Sơ</p>             </button>
            </div>
         </div>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;