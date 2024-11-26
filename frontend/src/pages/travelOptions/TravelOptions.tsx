// import MapComponent from "@/components/staicMap/MapComponent";
import { StaticMap } from "@/components/staicMap/StaticMap";
import { ridesStore } from "@/store/rides";

function TravelOptions() {
  const { estimate } = ridesStore();

  return (
    <div className="flex align-middle justify-start flex-col p-2 h-min-[500] w-full box-border bg-blue-950 text-slate-50 font-bold">
      Opções de Rotas
      {estimate && (
        <span className="text-slate-50">{estimate?.destination.latitude}</span>
      )}
      {/* https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js?hl=pt_BR#6 */}
      <StaticMap />
      {/* <MapComponent /> */}
    </div>
  );
}

export { TravelOptions };
