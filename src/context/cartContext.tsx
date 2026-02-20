import { createContext, ReactNode, useContext, useState } from "react";
import { useControllOrder } from "./controllOrder";
import { Cart, Product } from "../utils/types/ProductType";
import { Toast } from "toastify-react-native";

interface CartProps {
  cartItem: Cart[] | undefined;
  addItemCart: (itemId: number) => void;
  clearCart: () => void,
  removeItem: (idItem: number) => void
}

type StatusError =
  | { ok: true; product: Product }
  | {
      ok: false;
      error:
        | "INVALID_ID"
        | "PRODUCT_NOT_FOUND"
        | "PRODUCT_UNAVAILABLE"
        | "ERROR";
    };

const CartContext = createContext<CartProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  //STATE DE UI
  const [cartItem, setItemCart] = useState<Cart[]>([]);

  const { products, setMensage } = useControllOrder();

  const containsProduct = (id: number) => {
    const product = cartItem.find((item) => item.product.id === id);

    if (!product) return false;

    return true;
  };

  const addQtdProduct = (idItem: number) => {
    const newQtd = cartItem.map((item) =>
      item.product.id === idItem ? { ...item, qtd: item.qtd + 1 } : item,
    );

    return newQtd;
  };

  const searchItem = (itemId: number): StatusError => {
    if (!itemId) return { ok: false, error: "INVALID_ID" };

    const productItem = products.find((item) => item.id == itemId);

    if (!productItem) return { ok: false, error: "PRODUCT_NOT_FOUND" };

    if (productItem.available === false)
      return { ok: false, error: "PRODUCT_UNAVAILABLE" };

    return { ok: true, product: productItem };
  };

  const addItemCart = (itemId: number) => {
    const productResult = searchItem(itemId);

    //VALIDACAO
    if (!productResult.ok) {
      const errorMap: Record<string, string> = {
        INVALID_ID: "Id Produto invalido",
        PRODUCT_NOT_FOUND: "Produto não encontado.",
        PRODUCT_UNAVAILABLE: "Produto indisponível",
      };
      setMensage(errorMap[productResult.error!] || "ERROR");
      return { ok: false, error: "ERROR" };
    }

    //FUNCAO QUE VERIFICA SE O PRODUTO JA ESTA NO CARRINHO TRUE/FALSE
    const contains = containsProduct(productResult.product.id);

    if (contains) {
      //FUNCAO PRA ADD QTD
      const newQtd = addQtdProduct(productResult.product.id);
      setItemCart(newQtd);
      Toast.show({
        type: "success",
        text1: "Item adcionado",
        autoHide: true,
        visibilityTime: 1500,
      });
      return;
    }

    const itemNew: Cart = { product: productResult.product, qtd: 1 };

    setItemCart((prevCart) => [...prevCart, itemNew]);
    Toast.show({
      type: "success",
      text1: "Item adcionado",
      autoHide: true,
      visibilityTime: 1500,
    });
  };


  const removeItem = (idItem: number) => {

  }


  const clearCart = () => {
    setItemCart([])
  }

  return (
    <CartContext.Provider
      value={{
        addItemCart,
        cartItem,
        clearCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
