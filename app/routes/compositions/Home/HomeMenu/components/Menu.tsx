import { Flex, Text } from "@chakra-ui/react";
import { type QIconProps } from "./icons/icon";

type MenuItem = {
  Icon: ({ active }: QIconProps) => JSX.Element;
  name: string;
  active: boolean;
  onClick: () => void;
};

const Menu = ({Icon, name, active, onClick}: MenuItem) => {
  return (
    <Flex
      maxWidth={'fit-content'}
      h={"50px"}
      gap={"20px"}
      alignItems={'center'}
      bgColor={"#000000"}
      cursor={'pointer'}
      _hover={{
        bgColor: '#181919',
      }}
      px={'15px'}
      borderRadius={'50px'}
      onClick={onClick}
    >
      <Icon active={active}/>
      <Text
        fontSize={{md: "19px"}}
        fontWeight={{md: active ? 700 : 500}}
      >{name}</Text>
    </Flex>
  );
}
 
export default Menu;
