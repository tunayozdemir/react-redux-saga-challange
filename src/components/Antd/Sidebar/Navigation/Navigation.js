import React from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Navigation(props) {

  const handleClick = e => {
    console.log('click ', e);
  };


  return (
    <div>
      <Menu
        {...props}
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        inlineIndent={24}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="Antd Components">
          <Menu.ItemGroup key="g1">
            <Menu.Item key="1">
              <Link to="/Buttons">Buttons</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <SubMenu key="sub2" title="Tablolar">
            <Menu.Item key="2">
              <Link to="/TablePageV1">Table V1</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Navigation