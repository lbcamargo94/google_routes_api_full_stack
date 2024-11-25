// import { ridesStore } from "@/store/rides";
// import { useEffect, useState } from "react";

function StaticMap() {
  // const [latitude, setLatitude] = useState<string>("");
  // const [longitude, setLongitude] = useState<string>("");

  // const ridesStore();

  // useEffect(() => {
  //   const
  // }, [latitude]);

  // const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${latitude}%2C-23.55052%2C-46.543308%2C-23.46052&layer=mapnik`;

  return (
    <div>
      <h1>Mapa Estático OpenStreetMap</h1>
      <iframe
        // src={mapUrl}
        style={{ width: "100%", height: "400px", border: "none" }}
        title="OpenStreetMap"
      />
    </div>
  );
}
export { StaticMap };
