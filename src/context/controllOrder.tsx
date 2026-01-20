import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Product, Table } from "../utils/types/ProductType";
import { ProductData } from "../../data/ProductDataMock";
import { TableData } from "../../data/TableDataMock";
import { createValidation } from "../hooks/useValidation";
import { useDialogController } from "../components/dialog/useDialog";

interface ControllOrderProps {
  products: Product[];
  tableData: Table[];
  orderTableNumber: number | undefined
  orderStarted: boolean;
  startOrder: (idTable: number) => boolean;
  resetMensage: () => void
  mensageValue: string | undefined;
  isTableDialogVisibily: boolean;
  openTableDialog: () => void;
  closeTableDialog: () => void;
  resetOrderState: () => void
}

interface ControllOrderProviderProps {
  children: ReactNode;
}

// FONTE DE DADOS
const products: Product[] = ProductData;
const tableData: Table[] = TableData;

const ControllOrderContext = createContext<ControllOrderProps | undefined>(
  undefined
);

export const ControllOrderProvider = ({ children }: ControllOrderProviderProps) => {

  // TRAVA APP QUANDO PEDIDO INICIAR
  const orderStartLockRef = useRef<number | undefined>(undefined);
  const getValueOrderLockRef = () => orderStartLockRef.current;

  // MENSAGEM (AGORA REATIVA)
  const [mensageValue, setMensageValue] = useState<string | undefined>(undefined);

  // HOOKS CUSTOM
  const { tableAvailable } = createValidation(tableData, getValueOrderLockRef());
  const { isDialogVisibily, openDialog, closeDialog } = useDialogController();

  // STATES GLOBAL
  const [orderStarted, setOrderStarted] = useState<boolean>(false);
  const [orderTableNumber, setTableNumber] = useState<number | undefined>()

  const resetStartLockRef = () => {
    orderStartLockRef.current = undefined;
  };

  const resetMensage = () => {
    setMensageValue(undefined);
  };

  const startOrder = (idTable: number) => {
    const result = tableAvailable(idTable);

    if (!result.ok) {
      switch (result.error) {
        case "OCCUPIED":
          setMensageValue("MESA OCUPADA");
          break;
        case "INVALID_ID":
          setMensageValue("ID INVALIDO");
          break;
        case "LOCKED":
          setMensageValue("PEDIDO EM ABERTO");
          break;
        case "NOT_FOUND":
          setMensageValue("MESA NÃO EXISTE");
          break;
      }
      return false;
    }

    const table = result.table?.tableNumber;
    orderStartLockRef.current = table;
    setOrderStarted(true);
    setTableNumber(table)
    resetMensage();
    openDialog();

    return true;
  };




  //FUNCAO QUE LIMPA OS STATES DO PEDIDO E REFs
  const resetOrderState = () => {
    closeDialog()
    resetStartLockRef()
    setOrderStarted(false)
    resetMensage()
    setTableNumber(undefined)
  }

  return (
    <ControllOrderContext.Provider
      value={{
        orderTableNumber,
        orderStarted,
        products,
        resetMensage,
        tableData,
        startOrder,
        resetOrderState,
        mensageValue,
        isTableDialogVisibily: isDialogVisibily,
        openTableDialog: openDialog,
        closeTableDialog: closeDialog
      }}
    >
      {children}
    </ControllOrderContext.Provider>
  );
};

export const useControllOrder = () => {
  const context = useContext(ControllOrderContext);

  if (!context) {
    throw new Error(
      "useControllOrder must be used within ControllOrderProvider"
    );
  }

  return context;
};
