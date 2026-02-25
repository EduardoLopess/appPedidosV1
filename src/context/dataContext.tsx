import { createContext, ReactNode, useContext } from "react";
import { Aditional, Flavor, Product, Table } from "../utils/types/ProductType";
import {
  AdditionsData,
  FlavorData,
  ProductData,
} from "../../data/ProductDataMock";
import { TableData } from "../../data/TableDataMock";

interface DataProps {
  products: Product[];
  table: Table[];
  additions: Aditional[];
  flavor: Flavor[];
}

const DataContext = createContext<DataProps | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {


  const getProduct = () => {
    
  }




  return (
    <DataContext.Provider
      value={{
        products: ProductData,
        table: TableData,
        additions: AdditionsData,
        flavor: FlavorData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
     if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
