import { Flex } from "@chakra-ui/react"

import MenuList from "./components/MenuList";
import PostBtn from "./components/Post";
import BirdCmp from "./components/Bird";
import Spacer from "~/components/ui/Spacer";
import MenuAccount from "./components/MenuAccount";
import ChakraSpacer from "~/components/ui/ChakraSpacer";



const HomeMenu = () => {
  return (
    <Flex
      pl={{base: "0", lg: "30%"}}
      flexDir={'column'}
      pt={''}
    >
      <BirdCmp />
      <MenuList />
      <Spacer height="10px" />
      <PostBtn />
      <ChakraSpacer />
      <MenuAccount 
        avatar={"https://phoebeonlinesite.files.wordpress.com/2018/06/dxd5vzevmaagw6s-e1529487605376.jpg"}
        fullname={"Timi Adesina"}
        handle={"TimmyAdesina"}
      />
      <Spacer height="20px" />
    </Flex>
  );
}
 
export default HomeMenu;