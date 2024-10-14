import React from "react";
import { UserOutlined, UsergroupAddOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuItems: MenuItem[] = [
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