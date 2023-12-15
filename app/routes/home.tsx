import { Flex } from "@chakra-ui/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";


import HomeMenu from "./compositions/Home/HomeMenu/HomeMenu";
import Spacer from "~/components/ui/Spacer";
import HighlightCmp from "./compositions/Home/Highlight/Highlight";


export const loader = async ({ params }: LoaderFunctionArgs) => {
  return {  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: "quick tweets"
    },
  ];
};

export default function Index() {
  return (
    <Flex
      w={'full'}
      h={'full'}
      bgColor={"#000000"}
      color={'white'}
    >
      <Flex
        width={{md: '8vw', lg: '15vw', xl: '26vw'}}
        borderRight={'1px'}
        borderColor={'#2F3336'}
        // pl={{base: "0", lg: "30%"}}
        justifyContent={"end"}
      >
        <HomeMenu />
        <Spacer width={'10px'} />
      </Flex>

      <Flex
        width={"598px"}
        height={'100vh'}
        borderRight={'1px'}
        borderColor={'#2F3336'}
      >
        Feed
      </Flex>

      <Flex
        display={{md: "none", lg: "flex"}}
        alignSelf={"stretch"}
      >
        <Spacer width={"30px"} />
        <HighlightCmp />
      </Flex>
    </Flex>
  );
}
