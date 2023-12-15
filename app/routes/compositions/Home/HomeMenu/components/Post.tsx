import { Box, Flex, Text } from "@chakra-ui/react";
import PostIcon from "./icons/PostIcon";
import { useState } from "react";


const PostBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box 
        display={{base: "flex", xl: "none"}}
        cursor={"pointer"}
        onMouseOver={() => {
          setIsHovered(true)
        }}
        onMouseOut={() => {
          setIsHovered(false)
        }}
        // w={'50px'}
        // h={'50px'}
      >
        <PostIcon isHovered={isHovered} />
      </Box>
      <Flex
        display={{base: "none", xl: "flex"}}
        w={{xl: '225px'}}
        h={{xl: '52px'}}
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
    </>
  );
}
 
export default PostBtn;
