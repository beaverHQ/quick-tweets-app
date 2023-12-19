import { Flex, Text } from "@chakra-ui/react";
import Spacer from "~/components/ui/Spacer";


type HighlightSectionProps = {
  header: string;
  highlightBody: JSX.Element[] | JSX.Element;
  showMore: boolean;
  showMoreAction?: () => void;
};

const HighlightSection = ({ header, highlightBody, showMore }: HighlightSectionProps) => {
  return (
    <Flex
      width={"350px"}
      px={"20px"}
      py={"12px"}
      bgColor={"#16181c"}
      borderRadius={"16px"}
      flexDirection={"column"}
    >
      <Text
        size={"sm"}
        fontSize={"20px"}
        fontWeight={900}
      >{header}</Text>
      <Spacer height={"8px"} />
      {highlightBody}
      {
        showMore && <Text
          mt={"5px"}
          color={"#1D9BF0"}
          fontSize={"16px"}
          fontWeight={500}
        >Show more</Text>
      }
    </Flex>
  );
}
 
export default HighlightSection;
