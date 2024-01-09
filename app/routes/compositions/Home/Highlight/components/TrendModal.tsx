import {
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

// type TrendModalProp = {
//     onClick: () => void;
// }

export const TrendModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
    <Flex w={"200px"} h={"50px"} bgColor={"#fff"}>
        <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                Sit nulla est ex deserunt exercitation anim occaecat. 
                Nostrud ullamco deserunt aute id consequat veniam
                incididunt duis in sint irure nisi. Mollit officia 
                cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                </ModalBody>

                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
    </Flex>
  )
}

// const Emoji = () => {

//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
//             <path d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" fill="#1DA1F2"/>
//             <path d="M11 16.115C9.10801 16.115 7.36701 15.165 6.34401 13.571C6.12001 13.223 6.22101 12.761 6.57001 12.536C6.91801 12.31 7.38201 12.412 7.60601 12.762C8.35301 13.924 9.62201 14.617 11.001 14.617C12.38 14.617 13.649 13.924 14.397 12.763C14.621 12.413 15.085 12.313 15.433 12.538C15.783 12.762 15.883 13.226 15.659 13.574C14.634 15.168 12.893 16.119 11.001 16.119L11 16.115Z" fill="#1DA1F2"/>
//             <path d="M13.738 9.93598C14.5543 9.93598 15.216 9.27426 15.216 8.45798C15.216 7.6417 14.5543 6.97998 13.738 6.97998C12.9217 6.97998 12.26 7.6417 12.26 8.45798C12.26 9.27426 12.9217 9.93598 13.738 9.93598Z" fill="#1DA1F2"/>
//             <path d="M8.26206 9.93598C9.07833 9.93598 9.74006 9.27426 9.74006 8.45798C9.74006 7.6417 9.07833 6.97998 8.26206 6.97998C7.44578 6.97998 6.78406 7.6417 6.78406 8.45798C6.78406 9.27426 7.44578 9.93598 8.26206 9.93598Z" fill="#1DA1F2"/>
//         </svg>
//     )
    
// }
