import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 23.64379404778919,
    longitude: 90.48188003758624,
    zoom: 3,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default App;
