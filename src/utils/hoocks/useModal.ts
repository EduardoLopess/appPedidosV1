import { useState } from "react"

export const useModal = <T>() => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
  

    const openModal = () => setIsVisible(true)
    const closeModal = () => setIsVisible(false)

    return {
        isVisible,
        openModal,
        closeModal
    }
}