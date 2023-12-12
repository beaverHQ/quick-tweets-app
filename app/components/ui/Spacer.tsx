import { Box } from "@chakra-ui/react";

type SpacerProps = {
  width?: string;
  height?: string;
};

const Spacer = ({width = "0px", height = "0px"}: SpacerProps) => {
  return (
    <Box
      width={width}
      height={height}
    >
    </Box>
  );
}
 
export default Spacer;
