import { useCart } from "../../context/cartContext"
import { Cart } from "../../utils/types/ProductType"


interface CartProps  {
    id: number,
    name: string,
    category: string,
    price: number,
    qtd: number
}




export const useViewModel = () => {
    const {cartItem} = useCart()


    const checkTipeProductCart = (cartItem: Cart) => {
        
    }

    
}