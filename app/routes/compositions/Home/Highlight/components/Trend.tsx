import { Flex, Text } from '@chakra-ui/react'

type TrendProp = {
    topic: string;
    target: string;
    postCount: string;
    onClick: () => void;
}

const Trend = ({topic, target, postCount}: TrendProp) => {
  return (
    <Flex 
        position={"relative"}
        flexDirection={"column"}
        py={"10px"}
        _hover={{
          bgColor: "hsl(210,5%,12%)",
          cursor: "pointer",
        }}
        mb={"10px"}
    >
        <Text 
          fontSize={"12px"}
          color={"hsl(210,5%,50%)"}
        >
          {topic}
        </Text>

        <Text
        fontSize={"14px"}
        fontWeight={700}
        >
        {target}
        </Text>

        <Text
          fontSize={"12px"}
          color={"hsl(210,5%,50%)"}
        >
          {postCount}
        </Text>

        <Text
        w={'37px'}
        h={'37px'}
        maxWidth={'fit-content'}
        px={"10px"}
        borderRadius= {"50px"}
        position={"absolute"}
        left={"285px"}
        top={"0px"}
        fontSize={'20px'}
        fontWeight={500}
        color={"hsl(210,5%,50%)"}
        alignItems={'center'}
        justifyContent={'center'}
        _hover={{
          borderRadius: "50px",
          bgColor: "rgb(28,155,239, 0.1)",
          color: "rgb(28,155,239, 0.9)"
        }}
      >...</Text>
    </Flex>

  )
}

export default Trend;