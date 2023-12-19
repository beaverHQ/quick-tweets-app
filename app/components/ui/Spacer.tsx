import { Box, type SystemProps } from "@chakra-ui/react";

type SpacerProps = {
  width?: string;
  height?: string;
} & SystemProps;

const Spacer = ({width = "0px", height = "0px", ...props}: SpacerProps) => {
  return (
    <Box
      width={width}
      height={height}
      {...props}
      // border={"3px solid red"}
    >
    </Box>
  );
}
 
export default Spacer;
