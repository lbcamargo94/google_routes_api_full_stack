import { DataTable } from "@/components/dataTable/DataTable";
// import { StaticMap } from "@/components/staicMap/StaticMap";
import { ridesStore } from "@/store/rides";

interface optionsProps {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: {
    rating: number;
    comment: string;
  };
  value: number;
}

function TravelOptions() {
  const { estimate } = ridesStore();

  const formatData = (data: optionsProps[]) => {
    const formatedData: {
      id: string;
      name: string;
      description: string;
      vehicle: string;
      rating: number;
      comment: string;
      value: number;
    }[] = data.map((item) => ({
      id: String(item.id),
      name: item.name,
      description: item.description,
      vehicle: item.vehicle,
      rating: item.review.rating,
      comment: item.review.comment,
      value: String(item.value),
    }));

    console.table(formatedData);

    return formatedData;
  };

  return (
    <div className="flex align-middle justify-start flex-col p-2 h-min-[500] w-full box-border bg-blue-950 text-slate-50 font-bold">
      Opções de Rotas
      {estimate?.destination?.latitude ? (
        <span className="text-slate-50">{estimate.destination.latitude}</span>
      ) : (
        <span>Carregando informações...</span>
      )}
      {/* https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js?hl=pt_BR#6 */}
      {/* <StaticMap /> */}
      {estimate?.options && <DataTable data={formatData(estimate?.options)} />}
    </div>
  );
}

export { TravelOptions };
