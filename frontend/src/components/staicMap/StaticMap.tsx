import { IEstimateRides } from "@/interface/IRides";
import { ridesStore } from "@/store/rides";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function StaticMap() {
  const { estimate } = ridesStore();

  const { routeResponse, origin, destination } = estimate as IEstimateRides;

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=enc:${routeResponse.polyline}&markers=color:red|${origin}|${destination}&key=${GOOGLE_MAPS_API_KEY}`;

  return (
    <div>
      <h1>Mapa Estático OpenStreetMap</h1>
      <iframe
        src={mapUrl}
        style={{ width: "100%", height: "400px", border: "none" }}
        title="OpenStreetMap"
      />
    </div>
  );
}
export { StaticMap };
