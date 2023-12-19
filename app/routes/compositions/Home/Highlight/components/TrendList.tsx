import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import Trend from "./Trend"

const TrendList = () => {
    const [trends, setTrends] = useState([
        {topic: "Football · Trending", target: "Osimhen", postCount: "107k"}, 
        {topic: "Trending", target: "#BoozeNG", postCount: "1234"}, 
        {topic: "Trending", target: "#OmahlayConcert", postCount: "1,276"}, 
        {topic: "Football · Trending", target: "Everton", postCount: "1234"}, 
        {topic: "Trending · Music", target: "Davido", postCount: "205k"}, 
        {topic: "Trending", target: "Man City", postCount: "1234"}, 
        {topic: "Trending", target: "#RebootCamp", postCount: "1234"}, 
        {topic: "Trendindg · Arts", target: "Landscape", postCount: "10k"}, 
        {topic: "Trending", target: "Lagos City", postCount: "512k"}, 
        {topic: "Trending", target: "Movies", postCount: "51k"}, 
    ])

  return (
    <Flex
      flexDirection={"column"}
    >
      {
        trends.map(({topic, target, postCount}, i) => 
          <Trend
            key={i}
            topic={topic}
            target={target}
            postCount={postCount + " posts"}
            onClick = {() => {
              setTrends(trends.map((trend) => (trend)))
            }}
          />
       )
      }
    </Flex>
  )
}

export default TrendList