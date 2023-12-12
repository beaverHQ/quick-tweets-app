import { Flex } from "@chakra-ui/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";


import HomeMenu from "./compositions/Home/HomeMenu/HomeMenu";


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
      justifyContent={'space-between'}
      bgColor={"#000000"}
      color={'white'}
    >
      <Flex
        width={{md: '18vw', lg: '26vw'}}
      >
        <HomeMenu />
      </Flex>
      <Flex
        borderX={'1px'}
        width={{md: '57vw', lg: '40vw'}}
        height={'100vh'}
        borderColor={'#2F3336'}
      >
        Feed
      </Flex>
      <Flex
        width={{md: '25vw',lg: '34vw'}}
      >
        Highlight
      </Flex>
    </Flex>
  );
}
