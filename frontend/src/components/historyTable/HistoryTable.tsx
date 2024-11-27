import { IHistory } from "@/interface/IHistory";

function HistoryTable(data: IHistory[]) {
  const list_headers = [
    "ID",
    "Data",
    "Origem",
    "Destino",
    "Distância",
    "Tempo",
    "Valor",
  ];

  return (
    <div className="text-sm text-left text-gray-600 bg-slate-100 mx-3 rounded-md overflow-hidden">
      <table
        key={data[0].id}
        className="table-auto border-collapse border border-slate-500 h-full w-full rounded-md overflow-hidden"
      >
        <thead className="text-sm text-black m-2 uppercase h-7 p-2 w-full bg-gray-500">
          <tr>
            {list_headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.id}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { HistoryTable };
