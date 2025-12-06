import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LiveMapLocation({ position }) {
  return (
    <MapContainer
      center={position}
      zoom={100}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>This is the nearest location to the office.</Popup>
      </Marker>
    </MapContainer>
  );
}
