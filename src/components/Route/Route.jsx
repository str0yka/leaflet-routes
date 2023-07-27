import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Rectangle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const Route = () => {
  let prevRoute = useRef(null);
  const currentRoute = useSelector((state) => state.routes.currentRoute);
  const map = useMap();

  useEffect(() => {
    if (prevRoute.current) {
      prevRoute.current.remove();
    }

    map.fitBounds(currentRoute);

    prevRoute.current = L.Routing.control({
      waypoints: currentRoute,
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      showAlternatives: false,
    }).addTo(map);
  }, [currentRoute]);

  return <Rectangle bounds={currentRoute} pathOptions={{ color: "none" }} />;
};

export default Route;
