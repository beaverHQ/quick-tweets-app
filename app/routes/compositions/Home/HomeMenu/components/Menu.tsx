import { Flex, Text } from "@chakra-ui/react";
import { type QIconProps } from "./icons/icon";

type MenuItem = {
  Icon: ({ active }: QIconProps) => JSX.Element;
  name: string;
  active: boolean;
};

const Menu = ({Icon, name, active}: MenuItem) => {
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
      pl={'15px'}
      pr={'15px'}
      borderRadius={'50px'}
    >
      <Icon active={active}/>
      <Text
        fontSize={{md: "19px"}}
        fontWeight={{md: 700}}
      >{name}</Text>
    </Flex>
  );
}
 
export default Menu;
