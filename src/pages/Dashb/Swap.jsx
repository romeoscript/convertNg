import React, { useState } from "react";
import GradientLineChart from "../../components/GradientLineChart";
import { Select, InputNumber } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { IoIosSwap } from "react-icons/io";


const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const Swap = () => {

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between my-[2rem]">
        <aside className="flex gap-2 ">
          <Dropdown menu={menuProps}  className="bg-black text-white">
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>

          <InputNumber
            // addonAfter={suffixSelector}
            style={{
              width: "100%",
            }}
          />
        </aside>
        <IoIosSwap className="text-3xl font-bold" />
        <aside className="flex gap-2 ">
   
            <Dropdown menu={menuProps} className="bg-black text-white">
              <Button>
                <Space>
                  Button
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>


          <InputNumber
            // addonAfter={suffixSelector}
            style={{
              width: "100%",
            }}
          />
        </aside>
      </div>
      <Button className="w-full my-[2rem] bg-black text-white">Swap Coin</Button>
      <GradientLineChart />
    </div>
  );
};

export default Swap;
