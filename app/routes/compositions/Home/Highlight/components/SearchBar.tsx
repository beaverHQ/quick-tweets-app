import { Box, Input } from "@chakra-ui/react"



export const SearchBar = () => {
  return (
    <Box maxW={"30px"}>
        <Box pt={"5px"} mb={"40px"}>
          <Box as='span' color='#000' fontSize='sm' position='absolute' pl='20px' pt='15px' zIndex={"1"}>
            <SearchBarIcon />
          </Box>
        <Input 
          bgColor={"#212327"} 
          h={"45px"} 
          pl={"58px"}
          borderRadius="50px" 
          position={"fixed"} 
          maxW={"350px"} 
          border={"none"}
          _focus={{
              border: "none",
              bgColor: "#000"
          }}
        />
      </Box>
    </Box>
  )
}


const SearchBarIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="#212327">
            <path d="M19.53 18.47L15.87 14.81C17.195 13.24 18 11.214 18 9C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C11.215 18 13.24 17.196 14.808 15.87L18.468 19.53C18.615 19.676 18.808 19.75 18.998 19.75C19.188 19.75 19.383 19.677 19.528 19.53C19.823 19.237 19.823 18.763 19.53 18.47ZM1.5 9C1.5 4.865 4.865 1.5 9 1.5C13.135 1.5 16.5 4.865 16.5 9C16.5 13.135 13.135 16.5 9 16.5C4.865 16.5 1.5 13.135 1.5 9Z" fill="#8899A6"/>
        </svg>
    )
}
