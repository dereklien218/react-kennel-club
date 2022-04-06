import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Badge } from "reactstrap";
import "mapbox-gl/dist/mapbox-gl.css";

const mapboxApiKey =
  "pk.eyJ1IjoiZGVyZWtsaWVuMjE4IiwiYSI6ImNrdXlibTZ4eDcweTcydm1uMmoyYmZrczkifQ.fVJsr2u2-oesyCuGLoyt9A";

function MapboxMap() {
  const [viewport, setViewport] = React.useState({
    longitude: -96.9306221,
    latitude: 46.8743112,
    zoom: 13,
  });

  const [showPopup, togglePopup] = React.useState(false);

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="400px"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapboxApiKey}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker
        latitude={46.8743112}
        longitude={-96.9306221}
        onClick={togglePopup}
      >
        <div className="marker">
          <span></span>
        </div>
        <div style={{ cursor: "pointer" }}>
          <strong>FM Kennel Club</strong>
        </div>
      </Marker>
      {showPopup && (
        <Popup
          latitude={46.8743112}
          longitude={-96.9306221}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top"
        >
          <Badge pill color="info" className="mt-3 mb-2" href="/about#location">
            Get directions
          </Badge>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default MapboxMap;
