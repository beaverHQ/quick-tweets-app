import { Flex, Text, Tooltip } from '@chakra-ui/react'

type TrendProp = {
    topic: string;
    target: string;
    postCount: string;
    onClick: () => void;
}

const Trend = ({topic, target, postCount}: TrendProp) => {
  return (
    <Flex
      py={"10px"}
      pl={"15px"}
      pr={"10px"}
      _hover={{
        bgColor: "#1d1f23",
        cursor: "pointer",
      }}
      justifyContent={"space-between"}
    >
      <Flex 
        flexDirection={"column"}
        >
          <Text 
            fontSize={"14px"}
            color={"hsl(210,5%,50%)"}
          >
            {topic}
          </Text>

          <Text
            fontSize={"14px"}
            fontWeight={700}
            color={"#e6e9ea"}
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
      <Tooltip 
        label="More" 
        fontSize="10px" 
        fontWeight={700}
        color={"white"} 
        bgColor={"#4e616f"}
        // width={"max-content"}
        py={"3px"}
        px={"5px"}
      >
        <Flex
          w={'30px'}
          h={'30px'}
          borderRadius={"50px"}
          color={"hsl(210,5%,50%)"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            borderRadius: "50px",
            bgColor: "rgb(28,155,239, 0.1)",
            color: "rgb(28,155,239, 0.9)",
          }}
          >
          <Text
            fontSize={'20px'}
            fontWeight={500}
            textAlign={"center"}
          >
            ···
          </Text>
        </Flex>
      </Tooltip>
    </Flex>
  )
}

export default Trend;
