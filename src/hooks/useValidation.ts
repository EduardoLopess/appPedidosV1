import { useControllOrder } from "../context/controllOrder";
import { Table } from "../utils/types/ProductType";

interface ValidationProps {
  tableAvailable: (idTable: number) => ValidationResult;
}


type ValidationResult =
  | { ok: true; table: Table}
  | { ok: false; error: "INVALID_ID" | "NOT_FOUND" | "OCCUPIED" | "LOCKED" };

// useValidation.ts
export const createValidation = (tableData: Table[], currentControlValue?: number) => {
  const tableAvailable = (idTable: number) => {
    if (!idTable) return { ok: false, error: "INVALID_ID" };
    if (currentControlValue !== undefined) return { ok: false, error: "LOCKED" };
    
    const table = tableData.find(t => t.id === idTable);
    if (!table) return { ok: false, error: "NOT_FOUND" };
    if (table.statusTable) return { ok: false, error: "OCCUPIED" };

    return { ok: true, table };
  };

  return { tableAvailable };
};


