import { useState } from "react"
import { useControllOrder } from "../context/controllOrder"

export const useMensage = () => {

    const {getValueMensageRef} = useControllOrder()

    const [valueMensge, setValueMensage] = useState(getValueMensageRef())
    


}