import { Box, Flex, Text } from "@chakra-ui/react";
import Spacer from "~/components/ui/Spacer";


const SubscribeToPremium = () => {
  return (
    <Flex
      flexDirection={"column"}
    >
      <Text
        fontSize={"15px"}
        lineHeight={"1.3em"}
        fontWeight={500}
        px={"16px"}
      >Subscribe to unlock new features and if eligible, receive a share of ads revenue.</Text>     
      <Spacer height={"10px"} />
      <Box
        pl={"16px"}
      >
        <SubscribeBtn text={"Subscribe"} />
      </Box>
      <Spacer height={"10px"} />
    </Flex>
  );
}
 
export default SubscribeToPremium;

type SubscribeBtnProps = {
  text: string;
}
const SubscribeBtn = ({ text }: SubscribeBtnProps) => {
  return (
    <Flex
      w={"107px"}
      h={"36px"}
      bgColor={'#1c9bef'}
      _hover={{
        bgColor: "rgb(28,155,239, 0.9)"
      }}
      borderRadius={'50px'}
      cursor={'pointer'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text
        fontSize={"15px"}
        fontWeight={700}
      >{text}</Text>
    </Flex>
  );
};
