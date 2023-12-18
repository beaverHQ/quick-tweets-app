import { Flex, Text } from "@chakra-ui/react";
import HighlightSection from "./components/HighlightSection";
import Spacer from "~/components/ui/Spacer";
import SubscribeToPremium from "./components/SubscribeToPremium";
import TrendList from "./components/TrendList";


const HighlightCmp = () => {
  return (
    <Flex
      flexDirection={"column"}
    >
      <Text>Search bar</Text>
      <Spacer height={"10px"} />
      <HighlightSection 
        header={"Subscribe to Premium"}
        highlightBody={<SubscribeToPremium />}
        showMore={false}
      />
      <Spacer height={"15px"} />
      <HighlightSection 
        header={"Trends For you"}
        highlightBody={<TrendList />}
        showMore={true}
      />
      <Spacer height={"15px"} />
      <HighlightSection 
        header={"Who to follow"}
        highlightBody={<></>}
        showMore={true}
      />
    </Flex>
  );
}
 
export default HighlightCmp;
