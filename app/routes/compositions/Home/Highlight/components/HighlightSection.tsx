import { Flex, Text } from "@chakra-ui/react";
import Spacer from "~/components/ui/Spacer";


type HighlightSectionProps = {
  header: string;
  highlightBody: JSX.Element;
  showMore: boolean;
  showMoreAction?: () => void;
};

const HighlightSection = ({ header, highlightBody, showMore }: HighlightSectionProps) => {
  return (
    <Flex
      width={"350px"}
      pt={"12px"}
      bgColor={"#16181c"}
      borderRadius={"16px"}
      flexDirection={"column"}
    >
      <Text
        size={"sm"}
        px={"16px"}
        fontSize={"20px"}
        fontWeight={900}
      >{header}</Text>
      <Spacer height={"8px"} />
      {highlightBody}
      {
        showMore && <Text
          mt={"5px"}
          px={"16px"}
          py={"12px"}
          color={"#1D9BF0"}
          fontSize={"16px"}
          fontWeight={500}
          _hover={{
            bgColor: "#1d1f23",
            cursor: "pointer",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >Show more</Text>
      }
    </Flex>
  );
}
 
export default HighlightSection;
