import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentRoute } from "../../store/reducers/routesReducer.js";
import {
  ROUTES_STATUS_ERROR,
  ROUTES_STATUS_LOADING,
} from "../../helpers/index.js";

const Sidebar = () => {
  const { routes, status } = useSelector((state) => state.routes);
  const dispatch = useDispatch();

  const onSelectRoute = (route) => {
    dispatch(setCurrentRoute(route));
  };

  return (
    <Layout.Sider theme="light">
      <Menu>
        {routes.map((route, index) => (
          <Menu.Item key={index} onClick={() => onSelectRoute(route)}>
            Маршрут №{index + 1}
          </Menu.Item>
        ))}
      </Menu>
      {status === ROUTES_STATUS_ERROR && <p>Ошибка</p>}
      {status === ROUTES_STATUS_LOADING && <p>Загрузка...</p>}
    </Layout.Sider>
  );
};

export default Sidebar;
