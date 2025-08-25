import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <main>
      <Box>
        <Box w="100%">
          <Box
            backgroundImage={`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('../src/assets/images/hero.jpg')`}
            minH="800px"
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            px={10}
            py={20}
          >
            <Text
              fontSize={"5xl"}
              fontWeight={"bold"}
              color="white"
              textShadow="2px 2px 4px black"
            >
              Welcome Amazing Constructions
            </Text>
            <Text
              fontSize={"3xl"}
              fontWeight={"bold"}
              color="white"
              textShadow="2px 2px 4px black"
            >
              Crafting with precision and innovation
            </Text>
            <Text fontSize={"xl"} color="white" textShadow="2px 2px 4px black">
              we excel at transforming your vision into reality with exceptional
              craftsmanship
            </Text>
            <Flex gap={2} mt={4}>
              <Button p={4} bg={"orange.500"} color={"white"}>
                Contact Now
              </Button>
              <Button p={4} bg={"yellow.500"} color={"black"}>
                View Projects
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Hero;
