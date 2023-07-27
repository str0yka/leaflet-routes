import { useSelector } from "react-redux";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Route from "../Route/Route.jsx";
import { DEFAULT_BOUNDS } from "../../helpers/index.js";

import s from "./Map.module.css";
const Map = () => {
  const currentRoute = useSelector((state) => state.routes.currentRoute);

  return (
    <MapContainer className={s.container} bounds={DEFAULT_BOUNDS}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentRoute && <Route />}
    </MapContainer>
  );
};

export default Map;
