import { Flex, Text } from "@chakra-ui/react";
import HighlightSection from "./components/HighlightSection";
import SubscribeToPremium from "./components/SubscribeToPremium";
import TrendList from "./components/TrendList";
import WhoToFollowList from './components/WhoToFollowList';

const HighlightCmp = () => {
  return (
    <Flex
      className="no-scrollbar"
      flexDirection={"column"}
      h={'100vh'}
      overflowY={'auto'}
      gap={"15px"}
    >
      <Text>Search bar</Text>

      <HighlightSection 
        header={"Subscribe to Premium"}
        highlightBody={<SubscribeToPremium />}
        showMore={false}
      />

      <HighlightSection 
        header={"Trends For you"}
        highlightBody={<TrendList />}
        showMore={true}
      />

      <HighlightSection 
        header={"Who to follow"}
				highlightBody={<WhoToFollowList />}
        showMore={true}
      />
    </Flex>
  );
}
 
export default HighlightCmp;
