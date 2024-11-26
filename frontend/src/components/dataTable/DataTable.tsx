type DataTableProps = {
  id: string;
  name: string;
  description: string;
  vehicle: string;
  rating: number;
  comment: string;
  value: number;
};

function DataTable(data: DataTableProps[]) {
  console.table(data);

  return (
    <div className="overflow-x-auto">
      {data.map(
        (item) => (
          console.log(item),
          (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.vehicle}</p>
              <p>{item.rating}</p>
              <p>{item.comment}</p>
              <p>{item.value}</p>
            </div>
          )
        )
      )}
    </div>
  );
}
export { DataTable };
