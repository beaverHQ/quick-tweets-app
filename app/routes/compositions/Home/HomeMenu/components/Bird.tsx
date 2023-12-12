import { Flex } from "@chakra-ui/react";



const BirdCmp = () => {
  return (
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
      mt={'3px'}
      mb={'10px'}
    >
      <Bird />
    </Flex>    
  );
}
 
export default BirdCmp;

const Bird = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 357 322" fill="none">
      <path d="M281.026 0.125H335.608L216.362 136.415L356.645 321.875H246.805L160.774 209.395L62.335 321.875H7.71996L135.265 176.098L0.690964 0.125H113.32L191.084 102.937L281.026 0.125ZM261.869 289.205H292.114L96.886 31.079H64.4305L261.869 289.205Z" fill="white"/>
    </svg>  
  );
};
