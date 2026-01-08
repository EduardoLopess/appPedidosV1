import { Modal, View } from "react-native";
import style from "./style";
import { useOrderFlow } from "../../context/orderFlow";
import { useModal } from "../../utils/hoocks/useModal";

export const TableIdentificationDialog = () => {

  const { isTableDialogVisibily } = useOrderFlow();
  const {openModal,isVisible, closeModal} = useModal()

  if (!isTableDialogVisibily) return null;
  
  if (isTableDialogVisibily) {
    openModal()
  
    
  }
};
