import { ridesStore } from "@/store/rides";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { PoiMarkers } from "../poiMakers/PoiMarkers";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

console.log("StaticMap", GOOGLE_API_KEY);

// const origin = { lat: -23.5505, lng: -46.6333 }; // Exemplo: São Paulo, SP

type Poi = { key: string; location: google.maps.LatLngLiteral };

function StaticMap() {
  const { estimate } = ridesStore();

  const [locations, setLocations] = useState<Poi[]>([]);
  const [defaultCenterMap, setDefaultCenterMap] =
    useState<google.maps.LatLngLiteral>({
      lat: -23.5505,
      lng: -46.6333,
    });
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    if (estimate) {
      setDefaultCenterMap({
        lat: estimate.origin.latitude,
        lng: estimate.origin.longitude,
      });

      setZoom(12);

      return setLocations([
        {
          key: "origin",
          location: {
            lat: estimate.origin.latitude,
            lng: estimate.origin.longitude,
          },
        },
        {
          key: "destination",
          location: {
            lat: estimate.destination.latitude,
            lng: estimate.destination.longitude,
          },
        },
      ]);
    }

    return;
  }, [estimate]);

  return (
    <APIProvider
      apiKey={GOOGLE_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div
        id="google-map"
        className="flex flex-col justify-center mx-auto max-h-[400px] w-full p-3 box-border m-2"
      >
        <h1 className="text-md"> Mapa Interativo</h1>
        <Map
          defaultZoom={zoom}
          defaultCenter={defaultCenterMap} // Exemplo: São Paulo, SP
          onCenterChanged={(event: MapCameraChangedEvent) => {
            setDefaultCenterMap(event.detail.center);
            setZoom(event.detail.zoom);
          }}
          mapId="google-map"
          style={{ height: "500px", width: "100%" }}
          onCameraChanged={(event: MapCameraChangedEvent) =>
            setZoom(event.detail.zoom)
          }
        >
          <PoiMarkers pois={locations} />
        </Map>
      </div>
    </APIProvider>
  );
}

export { StaticMap };
