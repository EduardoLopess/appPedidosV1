import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Product, Table } from "../utils/types/ProductType";
import { ProductData } from "../../data/ProductDataMock";
import { TableData } from "../../data/TableDataMock";
import { useValidation } from "../hooks/useValidation";
import { useDialogController } from "../components/dialog/useDialog";

interface ControllOrderProps {
  products: Product[];
  tableData: Table[];
  orderTableNumber: number | undefined,
  startOrder: (idTable: number) => boolean;
  currentControlValue: number | undefined;
  getValueMensageRef: () => string | undefined;
  isTableDialogVisibily: boolean;
  openTableDialog: () => void;
  closeTableDialog: () => void;
}

interface ControllOrderProviderProps {
  children: ReactNode;
}

const products: Product[] = ProductData;
const tableData: Table[] = TableData;

const ControllOrderContext = createContext<ControllOrderProps | undefined>(
  undefined
);

export const ControllOrderProvider = ({children}: ControllOrderProviderProps) => {

  //HOOCKS CUSTOM
  const { tableAvailable } = useValidation();
  const { isDialogVisibily, openDialog, closeDialog } = useDialogController();

  //STATES GLOBAL
  const [orderTableNumber, setOrderTableNumber] = useState<number | undefined>();

  //TRAVA APP QUANDO PEDIDO INICIAR
  const orderStartLockRef = useRef<number | undefined>(undefined);
  //MENSAGEM DE CONTROLE DA VALIDACAO
  const mensageRef = useRef<string | undefined>(undefined);

  const getValueRef = () => orderStartLockRef.current;
  const resetStartLockRef = () => (orderStartLockRef.current = undefined);

  const getValueMensageRef = () => mensageRef.current;

  const setMensage = (mensage: string) => {
    mensageRef.current = mensage;
  };

  const startOrder = (idTable: number) => {
    const result = tableAvailable(idTable);

    if (!result.ok) {
      switch (result.error) {
        case "OCCUPIED":
          setMensage("MESA OCUPADA");
          break;

        case "INVALID_ID":
          setMensage("ID INVALIDO");
          break;

        case "LOCKED":
          setMensage("PEDIDO EM ABERTO");
          break;

        case "NOT_FOUND":
          setMensage("MESA NÃO EXISTE");
          break;
      }

      return false;
    }

    const table = result.table.tableNumber;
    orderStartLockRef.current = table;
    setOrderTableNumber(table);
    
    openDialog()

    return true;
  };

  return (
    <ControllOrderContext.Provider
      value={{
        orderTableNumber,
        products,
        tableData,
        startOrder,
        getValueMensageRef,
        isTableDialogVisibily: isDialogVisibily,
        openTableDialog: openDialog,
        closeTableDialog: closeDialog,

        currentControlValue: getValueRef(),
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
