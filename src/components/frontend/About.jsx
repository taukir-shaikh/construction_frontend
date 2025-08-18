import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      py={{ base: 10, md: 20 }}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
        >
          {/* Left Image */}
          <Box flex="1" borderRadius="xl" overflow="hidden" shadow="md">
            <Image
               src="../src/assets/images/about-us.jpg"
              alt="Construction workers reviewing plans"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>

          {/* Right Content */}
          <Stack flex="1" spacing={4}>
            <Text
              fontWeight="bold"
              color="pink.500"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
            >
              About Us
            </Text>

            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              lineHeight="short"
            >
              Crafting structures that last a lifetime
            </Heading>

            <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
              Building enduring structures requires a comprehensive approach that
              combines advanced materials, resilient design, routine maintenance,
              and sustainable practices. By drawing on historical insights and
              utilizing modern technology.
            </Text>

            <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
              Designing structures that stand the test of time involves a seamless
              blend of cutting-edge materials, durable design, ongoing upkeep, and
              eco-friendly practices. By combining lessons from the past with the
              power of modern technology.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
