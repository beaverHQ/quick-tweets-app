import { Flex } from "@chakra-ui/react";
import { signal } from "@preact/signals-react";


type PopupProps = {
  triggerCmp: JSX.Element;
  contentCmp: JSX.Element;
  onRequestClose: () => void;
};

const popUpState = signal(
  {
    isOpen: false,
  }
);

export const popupTrigger = () => {
  popUpState.value = {
    ...popUpState.value,
    isOpen: !popUpState.value.isOpen
  };
};

const Popup: React.FC<PopupProps> = ({triggerCmp, contentCmp, onRequestClose}) => {

  return (
    <Flex
      position={'relative'}
    >
      {triggerCmp}
      <Flex
        display={popUpState.value.isOpen ? "flex" : "none"}
        position={'absolute'}
        flexDirection={"column"}
        border={"1px solid white"}
        p={"15px"}
        {...(popUpState.value.isOpen ? { right: 0 } : {})}
      >
        {contentCmp}
      </Flex>
    </Flex>
  );
}
 
export default Popup;
