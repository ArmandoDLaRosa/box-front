import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Pit, Qual, Quant } from "./components";
import { useServiceWorker } from "./hooks/useServiceWorker";

import "antd/dist/reset.css";
import { Layout, Menu, Typography, notification} from "antd";
import { RobotOutlined, FileTextOutlined, NumberOutlined, ReloadOutlined, NotificationOutlined} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, items) {
  return {
    key,
    icon,
    items,
    label,
  };
}

const routes = [
  {
    path: '/',
    element: <div><Pit /></div>
  },
  {
    path: '/Qual',
    element: <div><Qual /></div>
  },
  {
    path: '/Quant',
    element: <div><Quant /></div>
  }
]

const items = [
  getItem("Pits", "1", <Link to="/"><RobotOutlined /></Link>),
  getItem("Qualitative", "2", <Link to="/Qual"><FileTextOutlined /></Link>),
  getItem("Quantitative", "3", <Link to="/Quant"><NumberOutlined /></Link>),

];

function App() {
  useEffect(() => {
    document.title = "Steamex Box App";
  }, []);

  const { waitingWorker, showReload, reloadPage } = useServiceWorker();
  const [collapsed, setCollapsed] = useState(false);

  // decides when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      notification.open({
        placement: "bottomRight",
        message: 'Update Available',
        description: <b> Click to reload </b>,
        duration:0,
        icon: <NotificationOutlined />,
        onClose: reloadPage,
        onClick: reloadPage,
        closeIcon: <ReloadOutlined />,
      });
    }
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 5,
              textAlign: "center"
            }}>
            <Title style={{ color: "white" }} >The Box</Title>
          </Header>
          <Content
            style={{
              margin: "0 16px",
              backgroundColor: "white"
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Routes>
                {
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))
                }
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
