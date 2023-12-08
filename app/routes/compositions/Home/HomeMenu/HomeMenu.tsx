import { Box, Flex, Text } from "@chakra-ui/react"

import MenuList from "./components/MenuList";
import PostBtn from "./components/Post";
import BirdCmp from "./components/Bird";



const HomeMenu = () => {
  return (
    <Flex
      pl={{base: "0", lg: "30%"}}
      flexDir={'column'}
      pt={''}
    >
      <BirdCmp />
      <MenuList />
      <Box h={'10px'}></Box>
      <PostBtn />
      <Text
      >
        Account
      </Text>
    </Flex>
  );
}
 
export default HomeMenu;
