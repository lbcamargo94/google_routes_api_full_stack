import { StaticMap } from "@/components/staicMap/StaticMap";
import { ridesStore } from "@/store/rides";

function TravelOptions() {
  const { estimate } = ridesStore();

  return (
    <div>
      <div className="w-full flex align-middle justify-start flex-col p-5 h-[550px] bg-slate-500">
        Opções de Viagem
        {estimate && <StaticMap />}
      </div>
    </div>
  );
}

export { TravelOptions };
