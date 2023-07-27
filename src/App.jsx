import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";

import Map from "./components/Map/Map.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { getRoutesFetch } from "./store/reducers/routesReducer.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutesFetch());
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Map />
    </Layout>
  );
};

export default App;
