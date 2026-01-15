import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { TableData } from "../../data/TableDataMock";
import { Table } from "../utils/types/ProductType";
import { useDialogController } from "../components/dialog/useDialog";

interface OrderFlowProps {
  tableAvailable: (idTable: number) => ValidationResult;
  orderTableNumber?: number
  resetOrder: () => void;
  isTableDialogVisibily: boolean;
  openTableDialog: () => void;
  closeTableDialog: () => void;
}

interface OrderFlowProviderProps {
  children: ReactNode;
}

type ValidationResult =
  | { ok: true; table: Table }
  | { ok: false; error: "INVALID_ID" | "NOT_FOUND" | "OCCUPIED" | "LOCKED" };

const OrderFlowContext = createContext<OrderFlowProps | undefined>(undefined);

const tableData: Table[] = TableData;

export const OrderProvider = ({ children }: OrderFlowProviderProps) => {
  const { isDialogVisibily, openDialog, closeDialog } = useDialogController();

  const orderStartLockRef = useRef<number | undefined>(undefined);
  const [orderTableNumber, setOrderTableNumber] = useState<number | undefined>()

  const tableAvailable = (idTable: number): ValidationResult => {
    if (!idTable) return { ok: false, error: "INVALID_ID" };

    if (orderStartLockRef.current !== undefined) {
      return { ok: false, error: "LOCKED" };
    }

    const table = tableData.find((item) => item.id === idTable);

    if (!table) return { ok: false, error: "NOT_FOUND" };

    if (table.statusTable === true) return { ok: false, error: "OCCUPIED" };

    orderStartLockRef.current = table.tableNumber;
    setOrderTableNumber(table.tableNumber)

    openDialog()
  

    return { ok: true, table };
  };

  const resetOrder = () => {
     orderStartLockRef.current = undefined
     setOrderTableNumber(undefined)
  };

  return (
    <OrderFlowContext.Provider
      value={{
        orderTableNumber,
        tableAvailable,
        resetOrder,
        isTableDialogVisibily: isDialogVisibily,
        openTableDialog: openDialog,
        closeTableDialog: closeDialog,
      }}
    >
      {children}
    </OrderFlowContext.Provider>
  );
};

export const useOrderFlow = () => {
  const context = useContext(OrderFlowContext);

  if (!context) {
    throw new Error("useOrderFlow must be used within OrderProvider");
  }

  return context;
};
