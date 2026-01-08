import { useState } from "react";

interface DialogHookProps {
  isDialogVisibily: boolean;
  openDialog: () => void;
  closeDialog: () => void;

}

export const useDialogController = (): DialogHookProps => {
  const [isDialogVisibily, setIsDialogVisibily] = useState<boolean>(false);

  const openDialog = () => setIsDialogVisibily(true);
  const closeDialog = () => setIsDialogVisibily(false);

  return {
    isDialogVisibily,
    openDialog,
    closeDialog,
   
  };
};
