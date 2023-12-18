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
        flexDirection={"column"}
        pl={"10px"}
        py={"10px"}
        _hover={{
          bgColor: "hsl(210,5%,70%)",
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
    </Flex>

  )
}

export default Trend;