import { HistoryTable } from "@/components/historyTable/HistoryTable";
import type { IHistory } from "@/interface/IHistory";

function TravelHistory() {
  const data_list: IHistory[] = [
    {
      id: 81,
      date: "2024-11-27T03:48:27.731Z",
      origin: "Amparo, SP",
      destination: "Pedreira, SP",
      distance: 16798,
      duration: "null",
      driver: {
        id: 1,
        name: "Homer Simpson",
      },
      value: 41.99,
    },
    {
      id: 80,
      date: "2024-11-27T03:44:41.054Z",
      origin: "Amparo, SP",
      destination: "Pedreira, SP",
      distance: 16798,
      duration: "null",
      driver: {
        id: 3,
        name: "James Bond",
      },
      value: 167.98,
    },
    {
      id: 79,
      date: "2024-11-27T03:44:40.928Z",
      origin: "Amparo, SP",
      destination: "Pedreira, SP",
      distance: 16798,
      duration: "null",
      driver: {
        id: 3,
        name: "James Bond",
      },
      value: 167.98,
    },
  ];

  return (
    <div
      id="travel-history"
      className="flex align-middle justify-start items-center flex-col p-2 h-[550px] w-full box-border"
    >
      <h1 className="text-lg font-medium p-2 m-2">Histórico de Viagens</h1>
      <HistoryTable data={data_list} />
    </div>
  );
}
export { TravelHistory };
