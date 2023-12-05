import { Flex, Text } from "@chakra-ui/react"


const HomeMenu = () => {
  return (
    <Flex
      pl={{base: "0", lg: "30%"}}
      flexDir={'column'}
      pt={''}
    >
      <Flex
        w={'50px'}
        h={'50px'}
        bgColor={"#000000"}
        cursor={'pointer'}
        _hover={{
          bgColor: '#181919',
        }}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'50px'}
        mb={'10px'}
      >
        <Bird />
      </Flex>
      <Text>
        MenuList
      </Text>
      <Text> 
        PostButton
      </Text>
      <Text
      >
        Account
      </Text>
    </Flex>
  );
}
 
export default HomeMenu;






const Bird = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
      <path d="M24.6132 3.34841C23.7087 3.74924 22.7369 4.02007 21.7153 4.14249C22.7575 3.51849 23.557 2.52832 23.934 1.34966C22.959 1.92816 21.8789 2.34849 20.7295 2.57382C19.8087 1.59449 18.4978 0.981323 17.0462 0.981323C14.2598 0.981323 12 3.24116 12 6.02966C12 6.42399 12.0455 6.80749 12.13 7.17799C7.93424 6.96674 4.21733 4.95716 1.72783 1.90432C1.29449 2.65182 1.04533 3.51849 1.04533 4.44149C1.04533 6.19216 1.93691 7.73807 3.28999 8.64266C2.46233 8.61557 1.68449 8.38916 1.00416 8.01107V8.07607C1.00416 10.5212 2.74291 12.5611 5.05258 13.0247C4.62791 13.1396 4.18266 13.2002 3.72333 13.2002C3.39833 13.2002 3.08091 13.1699 2.77324 13.1114C3.41566 15.1156 5.27899 16.5759 7.48791 16.6149C5.75999 17.9691 3.58358 18.7762 1.21974 18.7762C0.812409 18.7762 0.410492 18.7523 0.0150757 18.7057C2.24891 20.139 4.90091 20.9732 7.75008 20.9732C17.0342 20.9732 22.1097 13.2837 22.1097 6.61466C22.1097 6.39799 22.1042 6.17916 22.0945 5.96249C23.0803 5.24966 23.9362 4.36241 24.6111 3.35166L24.6132 3.34841Z" fill="white"/>
    </svg>
  );
}
