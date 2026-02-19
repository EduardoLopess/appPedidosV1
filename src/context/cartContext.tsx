import { createContext, ReactNode, useContext, useState } from "react";
import { useControllOrder } from "./controllOrder";
import { Cart, Product } from "../utils/types/ProductType";

interface CartProps {
  cartItem: Cart[] | undefined
  

}

type StatusError = 
  | {ok: true; product: Product}
  | {ok: false, error: 'INVALID_ID' | 'PRODUCT_NOT_FOUND' | 'PRODUCT_UNAVAILABLE' | 'ERROR'}

const CartContext = createContext<CartProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {


  //STATE DE UI 
  const [cartItem, setItemCart] = useState<Cart[]>([])



  const {products, setMensage } = useControllOrder()


  const containsProduct = (id: number) => {
    const product = cartItem.find(item => item.product.id === id)

    if(!product) return false

    return true
  }

  const addQtdProduct = (idItem: number) => {

    const newQtd = [...cartItem]

    const item = newQtd.find(item => item.product.id === idItem)

    if(item) {
      item.qtd += 1
    }

  }

  const searchItem = (itemId: number): StatusError => {

    if(!itemId) return {ok: false, error: 'INVALID_ID'}

    const productItem = products.find(item => item.id == itemId)

    if(!productItem) return {ok: false, error: 'PRODUCT_NOT_FOUND'}

    if(productItem.available === false) return {ok: false, error: 'PRODUCT_UNAVAILABLE'}

    return {ok: true, product: productItem}
  }

  const addItemCart = (itemId: number) => {
    const productResult = searchItem(itemId)

    if(!productResult.ok) {
      const errorMap: Record<string, string> = {
        INVALID_ID: 'Id Produto invalido',
        PRODUCT_NOT_FOUND: 'Produto não encontado.',
        PRODUCT_UNAVAILABLE: 'Produto indisponível'
      }
      setMensage(errorMap[productResult.error!] || 'ERROR')
      return {ok: false, error: 'ERROR'}
    }

    if(productResult) {
        const contains = containsProduct(productResult.product.id)

        if(contains) {
          addQtdProduct(productResult.product.id)
        }
        
        //CONTINUAR
      setItemCart(prevCart => {
        const
        
        
      })
    }

    

  }




  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
