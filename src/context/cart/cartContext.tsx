import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { useControllOrder } from "../controllOrder";
import {
  Aditional,
  Cart,
  Flavor,
  Product,
} from "../../utils/types/ProductType";
import { Toast } from "toastify-react-native";
import { useDataContext } from "../dataContext";
import { useModal } from "../../utils/hoocks/useModal";
import { nanoid } from "nanoid/non-secure";

interface CartProps {
  cartItem: Cart[] | undefined;
  clearFlavorTemporaryData: () => void;
  addItemCart: (itemId: number) => void;
  addFlavorItemCart: (flavorId: number) => void;
  clearCart: () => void;
  removeItem: (idItem: string) => void;
  removeAdc: (adcIdCart: string, idItemCart: string) => void;
  alterQtdItemCart: (idItemCart: string) => void;
  isOpenModalFlavor: boolean;
  setIsOpenModalFlavor: React.Dispatch<React.SetStateAction<boolean>>;
  flavorTemporaryData: Flavor[] | undefined;
  adcTemporaryData: Aditional[] | undefined;
  containsAdditional: (productItem: Product) => boolean;
  addAdditionsItemCart: (idAdc: number, uiidProduct: string) => void;
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
  const [isOpenModalFlavor, setIsOpenModalFlavor] = useState(false);
  const [cartItem, setItemCart] = useState<Cart[]>([]); //STATE DE UI
  const [flavorTemporaryData, setFlavorTemporaryData] = useState<
    Flavor[] | undefined
  >();
  const [adcTemporaryData, setAdcTemporaryData] = useState<
    Aditional[] | undefined
  >();

  //Guarda o produto com Addons/Sabor
  const productTemporaryRef = useRef<Product | undefined>(undefined);

  const { setMensage } = useControllOrder(); //Context

  const {
    products: productData,
    additions: additionsData,
    flavor: flavorData,
  } = useDataContext();

  const getProductErrorMessage = (error?: string) => {
    const errorMap: Record<string, string> = {
      INVALID_ID: "Id Produto invalido",
      PRODUCT_NOT_FOUND: "Produto não encontrado.",
      PRODUCT_UNAVAILABLE: "Produto indisponível",
    };

    return errorMap[error || ""] || "ERROR";
  };

  const clearFlavorTemporaryData = () => {
    setFlavorTemporaryData(undefined);
    productTemporaryRef.current = undefined;
  };

  const alterQtdItemCart = (IdItemCart: string) => {
    setItemCart((prevCart) =>
      prevCart.map((item) =>
        item.nanoId === IdItemCart ? { ...item, qtd: item.qtd + 1 } : item,
      ),
    );
  };

  //remover item
  const removeItem = (idItemCart: string) => {
    const item = cartItem.find((item) => item.nanoId === idItemCart);
    if (item) {
      if (item.qtd > 1) {
        setItemCart((prevCart) =>
          prevCart.map((item) =>
            item.nanoId === idItemCart ? { ...item, qtd: item.qtd - 1 } : item,
          ),
        );
        return;
      }

      setItemCart((prevCart) =>
        prevCart.filter((item) => item.nanoId !== idItemCart),
      );
    }
  };

  const removeAdc = (adcIdCart: string, idItemCart: string) => {
    setItemCart((prevCart) =>
      prevCart.map((item) => {
        if (item.nanoId === idItemCart) {
          return {
            ...item,
            adc: item.adc?.filter((adc) => adc.nanoId !== adcIdCart),
          };
        }
        return item;
      }),
    );
  };

  const containsProduct = (id: number) => {
    const product = cartItem.find((item) => item.product.id === id);

    if (!product) return false;

    return true;
  };

  const containsProductFlavor = (idProduct: number, idFlavor: number) => {
    const contais = cartItem.find(
      (item) => item.product.id === idProduct && item.flavor?.id === idFlavor,
    );
    if (!contais) return false;

    return true;
  };

  //verifica sem o item tem array de sabor usado para o drink do tipo caipirinha
  const containsFlavor = (productItem: Product) => {
    const checkFlavor = productItem.addons?.flavorIds ?? [];
    if (checkFlavor.length > 0) {
      return true;
    }
    return false;
  };

  //verifica se tem adc dispoinivel para o item
  const containsAdditional = (productItem: Product) => {
    const checkAdc = productItem.addons?.additionsIds ?? [];
    if (checkAdc.length > 0) {
      return true;
    }
    return false;
  };

  //Cria DATA com sabores
  const createDataTemporaryFlavor = (productItem: Product) => {
    const checkFlavor = productItem.addons?.flavorIds ?? [];
    if (checkFlavor?.length > 0) {
      const dataTemporary = flavorData.filter((item) =>
        checkFlavor.includes(item.id),
      );
      setFlavorTemporaryData(dataTemporary);
      setIsOpenModalFlavor(true);
      productTemporaryRef.current = productItem;
    }
  };

  //Cria Data com os adc
  const createDataTemporaryAdc = (productItem: Product) => {
    const checkAdc = productItem.addons?.additionsIds ?? [];
    if (checkAdc.length > 0) {
      const dataTeporary = additionsData.filter((item) =>
        checkAdc.includes(item.id),
      );
      console.log("DATA FUNCAO CRIA => ", dataTeporary);
      setAdcTemporaryData(dataTeporary);
    }
  };

  //ADC ao ITEM
  const addAdditionsItemCart = (idAdc: number, uiidProduct: string) => {
    // 1. Acha o adicional nos dados mestre
    const adcItem = additionsData.find((item) => item.id === idAdc);
    if (!adcItem) return;

    // 2. Atualiza o carrinho procurando pelo nanoId (uiidProduct)
    setItemCart((prevCart) =>
      prevCart.map((item) => {
        if (item.nanoId === uiidProduct) {
          return {
            ...item,
            adc: item.adc
              ? [...item.adc, { ...adcItem, qtd: 1, nanoId: nanoid() }]
              : [{ ...adcItem, qtd: 1, nanoId: nanoid() }],
          };
        }

        return item;
      }),
    );
  };

  //ADD SABOR
  const addFlavorItemCart = (flavorId: number) => {
    const flavor = flavorData.find((item) => item.id === flavorId);
    if (!flavor) return;
    const product = productTemporaryRef.current;

    if (product) {
      const newQtdCheck = containsProductFlavor(product.id, flavor.id);
      if (newQtdCheck) {
        const newQtd = addQtdProduct(product.id, flavor.id);
        setItemCart(newQtd);
        Toast.show({
          type: "success",
          text1: "Item adcionado",
          autoHide: true,
          visibilityTime: 1500,
        });
        return;
      }

      const newItem: Cart = {
        nanoId: nanoid(),
        product: product,
        flavor: flavor,
        qtd: 1,
      };
      setItemCart((prevCart) => [...prevCart, newItem]);
      Toast.show({
        type: "success",
        text1: "Item adcionado",
        autoHide: true,
        visibilityTime: 1500,
      });
    }
  };

  //ADD QTD
  const addQtdProduct = (idProduct: number, idFlavor?: number) => {
    return cartItem.map((item) => {
      const sameProduct = item.product.id === idProduct;

      const sameFlavor =
        idFlavor !== undefined
          ? item.flavor?.id === idFlavor
          : item.flavor === undefined;

      return sameProduct && sameFlavor ? { ...item, qtd: item.qtd + 1 } : item;
    });
  };

  //busca item
  const searchItem = (itemId: number): StatusError => {
    if (!itemId) return { ok: false, error: "INVALID_ID" };

    const productItem = productData.find((item) => item.id == itemId);

    if (!productItem) return { ok: false, error: "PRODUCT_NOT_FOUND" };

    if (productItem.available === false)
      return { ok: false, error: "PRODUCT_UNAVAILABLE" };

    return { ok: true, product: productItem };
  };

  //ADD ITEM = FUNCAO PRINCIPAL
  const addItemCart = (itemId: number) => {
    const productResult = searchItem(itemId);

    //VALIDACAO
    if (!productResult.ok) {
      const message = getProductErrorMessage(productResult.error);
      setMensage(message);
      return { ok: false, error: "ERROR" };
    }

    //Verifica se tem ADC no produto
    const checkAdc = containsAdditional(productResult.product);
    if (checkAdc) {
      createDataTemporaryAdc(productResult.product);
    }

    //Verifica se tem sabor no produto
    const flavorCheck = containsFlavor(productResult.product);
    if (flavorCheck) {
      createDataTemporaryFlavor(productResult.product);
      return;
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

    const itemNew: Cart = {
      nanoId: nanoid(),
      product: productResult.product,
      qtd: 1,
    };

    setItemCart((prevCart) => [...prevCart, itemNew]);
    Toast.show({
      type: "success",
      text1: "Item adcionado",
      autoHide: true,
      visibilityTime: 1500,
    });
  };

  const clearCart = () => {
    setItemCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addItemCart,
        addAdditionsItemCart,
        cartItem,
        clearCart,
        removeAdc,
        removeItem,
        isOpenModalFlavor,
        flavorTemporaryData,
        setIsOpenModalFlavor,
        addFlavorItemCart,
        clearFlavorTemporaryData,
        alterQtdItemCart,
        adcTemporaryData,
        containsAdditional,
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
