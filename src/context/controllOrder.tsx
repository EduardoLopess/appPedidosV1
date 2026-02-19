import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Product, Table } from "../utils/types/ProductType";
import { ProductData } from "../../data/ProductDataMock";
import { TableData } from "../../data/TableDataMock";
import { createValidation } from "../hooks/useValidation";
import { useDialogController } from "../components/dialog/useDialog";

type StatusOrder =
  | { ok: true; status: "created" | "already_exists" }
  | { ok: false; status: "error" };

interface ControllOrderProps {
  products: Product[];
  tableData: Table[];
  orderTableNumber: number | undefined;
  orderStarted: boolean;
  mensageValue: string | undefined;
  isTableDialogVisibily: boolean;
  startOrder: (idTable: number) => StatusOrder;
  resetMensage: () => void;
  setMensage: (value: string | undefined) => void;
  resetOrderState: () => void;
  openTableDialog: () => void;
  closeTableDialog: () => void;
}

const ControllOrderContext = createContext<ControllOrderProps | undefined>(
  undefined,
);

export const ControllOrderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // REF para controle lógico
  const orderLockRef = useRef<number | undefined>(undefined);

  // STATE para UI
  const [orderTableNumber, setTableNumber] = useState<number | undefined>();
  const [mensageValue, setMensageValue] = useState<string | undefined>();
  const [orderStarted, setOrderStarted] = useState(false);

  const { isDialogVisibily, openDialog, closeDialog } = useDialogController();

  const setMensage = (value: string | undefined) => {
    setMensageValue(value);
  };

  const startOrder = (idTable: number): StatusOrder => {
    const { tableAvailable } = createValidation(
      TableData,
      orderLockRef.current,
      orderTableNumber,
    );
    const result = tableAvailable(idTable);
    const tableNum = result.table?.tableNumber;

    // Trava síncrona usando a REF
    if (
      orderLockRef.current !== undefined &&
      orderLockRef.current === tableNum
    ) {
      return { ok: true, status: "already_exists" };
    }

    if (!result.ok) {
      const errorMap: Record<string, string> = {
        OCCUPIED: "MESA OCUPADA",
        INVALID_ID: "ID INVÁLIDO",
        LOCKED: `Mesa ${orderLockRef.current} já está em atendimento`,
        NOT_FOUND: "MESA NÃO EXISTE",
      };
      setMensageValue(errorMap[result.error!] || "ERRO");
      return { ok: false, status: "error" };
    }

    // Atualiza REF (segurança) e STATE (UI)
    orderLockRef.current = tableNum;
    setTableNumber(tableNum);
    setOrderStarted(true);
    setMensageValue(undefined);
    openDialog();

    return { ok: true, status: "created" };
  };

  const resetOrderState = () => {
    orderLockRef.current = undefined;
    setTableNumber(undefined);
    setOrderStarted(false);
    setMensageValue(undefined);
    closeDialog();
  };

  return (
    <ControllOrderContext.Provider
      value={{
        products: ProductData,
        tableData: TableData,
        orderTableNumber,
        orderStarted,
        mensageValue,
        isTableDialogVisibily: isDialogVisibily,
        startOrder,
        resetMensage: () => setMensageValue(undefined),
        setMensage,

        resetOrderState,
        openTableDialog: openDialog,
        closeTableDialog: closeDialog,
      }}
    >
      {children}
    </ControllOrderContext.Provider>
  );
};

export const useControllOrder = () => {
  const context = useContext(ControllOrderContext);
  if (!context)
    throw new Error(
      "useControllOrder must be used within ControllOrderProvider",
    );
  return context;
};
