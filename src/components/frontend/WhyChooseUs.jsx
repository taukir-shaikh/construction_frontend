import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiZap, FiAward, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    title: "Cutting-Edge Solutions",
    description:
      "Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.",
    icon: FiZap,
  },
  {
    title: "Cutting-Edge Solutions",
    description:
      "Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.",
    icon: FiAward,
  },
  {
    title: "Cutting-Edge Solutions",
    description:
      "Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.",
    icon: FiTrendingUp,
  },
];

const WhyChooseUs = () => {
  return (
    <Box bg="white" py={20}>
      <Container maxW="8xl">
        <Text
          textAlign="center"
          color="pink.500"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Why Choose Us
        </Text>
        <Heading
          textAlign="center"
          mt={2}
          mb={4}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Discover our wide variety of projects.
        </Heading>
        <Text
          textAlign="center"
          maxW="700px"
          mx="auto"
          color="gray.600"
          mb={14}
        >
          Created in close partnership with our clients and collaborators, this
          approach merges industry expertise, decades of experience, innovation,
          and flexibility to consistently deliver excellence.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={8}
              borderRadius="xl"
              boxShadow="md"
              bg="white"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
            >
              <Icon as={feature.icon} boxSize={10} color="yellow.400" mb={4} />
              <Heading size="md" mb={2}>
                {feature.title}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
