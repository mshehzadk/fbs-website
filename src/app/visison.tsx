"use client";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Vision() {
  return (
    <Flex
      h={500}
      justifyContent="center"
      alignItems={"center"}
      mb="30px"
      bg={"gray.300"}
    >
      <Box
        as="div"
        pos="relative"
        w={"300px"}
        h={"200px"}
        borderRadius="10px"
        boxShadow={"box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);"}
        transition="0.3s"
        p={"30px 50px"}
        mr="30px"
        bg="blackAlpha.300"
        cursor={"pointer"}
        _hover={{ h: "320px" }}
      >
        <Box
          pos={"relative"}
          w={"100%"}
          h={"100%"}
          translateY="-80px"
          zIndex="99"

          /*   transform: translateY(-80px); */
        >
          <Image
            width={"100%"}
            borderRadius="10px"
            boxShadow={"0px 5px 20px rgba(0, 0, 0, 0.5)"}
            alt="img"
            src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </Box>

        <Box
          p={"10px 20px"}
          textAlign="center"
          translateY={"-450px"}
          opacity="0"
          transition={"0.1px"}
          _hover={{ opacity: "1", translateY: "-180px" }}
        >
          <Heading>keep Smiling</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloribus vitae fugit enim repudiandae
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
