import { Flex, Text } from "@chakra-ui/react";

const PostBtn = () => {
  return (
    <Flex
      w={{md: '225px'}}
      h={{md: '52px'}}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={'#1c9bef'}
      _hover={{
        bgColor: "rgb(28,155,239, 0.9)"
      }}
      borderRadius={'50px'}
      cursor={'pointer'}
    >
      <Text
        fontSize={'17px'}
        fontWeight={700}
      >Post</Text>
    </Flex>
  );
}
 
export default PostBtn;
