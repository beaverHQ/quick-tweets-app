import { Flex, Image, Text } from "@chakra-ui/react";
import ChakraSpacer from "~/components/ui/ChakraSpacer";
import Spacer from "~/components/ui/Spacer";

type MenuAccountProps = {
  avatar: string;
  fullname: string;
  handle: string;
};
const MenuAccount = ({avatar, fullname, handle}: MenuAccountProps) => {
  return (
    <Flex
      width={{xl: "255px"}}
      height={"69px"}
      borderRadius={'50px'}
      cursor={'pointer'}
      _hover={{
        bgColor: '#181919',
      }}
      alignItems={'center'}
      py={"10px"}
      px={"15px"}
    >
      <Image 
        src={avatar}
        alt="avatar image"
        width={"40px"}
        height={"40px"}
        objectFit={"cover"}
        borderRadius={"50px"}
        // border={"1px solid red"}
      />
      <Spacer 
        width="10px"
        display={{base: "none", xl: "flex"}}
        />
      <Flex
        flexDirection={"column"}
        fontSize={"16px"}
        display={{base: "none", xl: "flex"}}
      >
        <Text
          fontWeight={700}
        >{fullname}</Text>
        <Text
          color={"hsl(206,4%,46%)"}
          fontWeight={500}
        >@{handle}</Text>
      </Flex>
      <ChakraSpacer
        display={{base: "none", xl: "flex"}}
      />
      <Text
        display={{base: "none", xl: "flex"}}
        pt={"5px"}
        fontSize={'20px'}
        fontWeight={500}
        alignSelf={"start"}
      >...</Text>
    </Flex>
  );
}
 
export default MenuAccount;
