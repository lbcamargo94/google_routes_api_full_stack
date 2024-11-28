import { AdvancedMarker, useMap, Pin } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useCallback, useEffect, useRef } from "react";

type Poi = { key: string; location: google.maps.LatLngLiteral };

const PoiMarkers = (props: { pois: Poi[] }) => {
  const map = useMap();
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  const handleClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (!map) return;
      if (!event.latLng) return;
      map.panTo(event.latLng);
    },
    [map]
  );

  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          clickable={true}
          onClick={handleClick}
        >
          <Pin
            background={"#c72323"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export { PoiMarkers };
