import { FC, useState } from "react";

type CustomModalProps = {
  open: boolean;
  title?: string;
  footerVisible?: boolean;
  children?: React.ReactNode;
};

const CustomModal: FC<CustomModalProps> = ({
  open,
  title,
  footerVisible,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(open);

  const showCustomModal = (val: boolean) => {
    setIsVisible(val);
  };

  return (
    <dialog className="h-[400px] w-[400px] bg-orange-400 ">
      This is modal
    </dialog>
  );
};

export default CustomModal;
