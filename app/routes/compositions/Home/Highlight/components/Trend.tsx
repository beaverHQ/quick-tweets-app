import { 
  Flex, 
  Text, 
  Tooltip,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react';

type TrendProp = {
    topic: string;
    target: string;
    postCount: string;
    onClick: () => void;
}

const Trend = ({topic, target, postCount}: TrendProp) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null)
  const initialRef = React.useRef(null)

  return (
    <>
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
      </Flex >
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
            onClick={onOpen}
            ref={finalRef} 
            tabIndex={-1}
          >
            ···
          </Text>
        </Flex>
      </Tooltip>
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
      <ModalContent 
        bgColor={"#000"} 
        borderRadius={"10px"} 
        w={"294px"}
        boxShadow={"xl"}
        >
        <ModalBody
         p={"5px"}
        >
          <Flex direction={"column"}>
            <Flex>
              <Emoji /> <Text pl={"10px"} fontWeight={700} fontSize={"15px"}>Not interested in this</Text>
            </Flex>
            <Flex>
              <Emoji /> <Text pl={"10px"} fontWeight={700} fontSize={"15px"}>This trend is harmful or spammy</Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
</>

  )
}

export default Trend;


const Emoji = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" fill="#1DA1F2"/>
            <path d="M11 16.115C9.10801 16.115 7.36701 15.165 6.34401 13.571C6.12001 13.223 6.22101 12.761 6.57001 12.536C6.91801 12.31 7.38201 12.412 7.60601 12.762C8.35301 13.924 9.62201 14.617 11.001 14.617C12.38 14.617 13.649 13.924 14.397 12.763C14.621 12.413 15.085 12.313 15.433 12.538C15.783 12.762 15.883 13.226 15.659 13.574C14.634 15.168 12.893 16.119 11.001 16.119L11 16.115Z" fill="#1DA1F2"/>
            <path d="M13.738 9.93598C14.5543 9.93598 15.216 9.27426 15.216 8.45798C15.216 7.6417 14.5543 6.97998 13.738 6.97998C12.9217 6.97998 12.26 7.6417 12.26 8.45798C12.26 9.27426 12.9217 9.93598 13.738 9.93598Z" fill="#1DA1F2"/>
            <path d="M8.26206 9.93598C9.07833 9.93598 9.74006 9.27426 9.74006 8.45798C9.74006 7.6417 9.07833 6.97998 8.26206 6.97998C7.44578 6.97998 6.78406 7.6417 6.78406 8.45798C6.78406 9.27426 7.44578 9.93598 8.26206 9.93598Z" fill="#1DA1F2"/>
        </svg>
    )
    
}
