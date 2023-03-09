import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const Feature_Card = ({ iconComponent, title, txt }: any) => {
  return (
    <>
      {/* feature */}
      <Box>
        <HStack>
          <Box color={"blue.500"}>{iconComponent}</Box>
          <Box>
            <Heading fontSize={18} lineHeight={10}>
              {title}
            </Heading>
            <Text>{txt}</Text>
          </Box>
        </HStack>
        {/* feature */}
      </Box>
    </>
  );
};
