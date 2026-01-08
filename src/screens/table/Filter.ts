import { useRef, useState } from "react";
import { TableData } from "../../../data/TableDataMock";

interface Table {
  id: number;
  tableNumber: number;
  statusTable: boolean;
}

type StatusFilter = "LIVRE" | "OCUPADA";

const table: Table[] = TableData;

export const useFilter = () => {
  const [tableFilter, setTableFilter] = useState<Table[]>(table);
  const [search, setSearch] = useState<string>("");
  const filterRef = useRef<string | undefined>(undefined);

  const tableOrder = (filter: StatusFilter) => {
    if (filterRef.current === filter) {
      filterRef.current = undefined;
      setTableFilter(table)
      return;
    }

    
  filterRef.current = filter;

    if (filter == "LIVRE") {
      const tableFilter = table.filter((item) => item.statusTable === false);
      setTableFilter(tableFilter);
    }
    if (filter == "OCUPADA") {
      const tableFilter = table.filter((item) => item.statusTable === true);
      setTableFilter(tableFilter);
    }

  
  };

  const searchTable = (value: string) => {
    const searchTable = table.filter((item) =>
      item.tableNumber.toString().includes(value)
    );
    setTableFilter(searchTable);
  };

  return { searchTable, tableOrder, tableFilter, search, setSearch };
};
