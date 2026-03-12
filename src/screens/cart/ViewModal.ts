import { useCart } from "../../context/cartContext"


interface CartProps  {
    id: number,
    name: string,
    category: string,
    price: number,
    qtd: number
}




export const useViewModel = () => {
    const {} = useCart()

    
}